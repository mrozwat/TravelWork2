import{RenderPosition,renderElement} from '../render/render.js';
import menuElement from '../view/menuTemplate.js';
import filtersElement  from '../view/filters-Template.js';
import SortElement  from '../view/sort-Template.js';
import { addNew } from '../view/Add-New-Template.js'; //v konce // render(addNewBlock,addNew(),RenderPosition.BEFOREEND);
import  InfoAbautTrip from '../view/info-about-trip.js';
import welcomeMesage from '../view/welcomeMesage.js';
import TravelPontPresenter from './task-presenter.js';
import { sortType,UpdateType,UserAction,remove} from '../util/util.js';

//const
const menuBlock =document.querySelector('.trip-controls__navigation');
const filterBlock =document.querySelector('.trip-controls__filters');


export default class BoardPresenter {
    #pointPresenter = new Map();
    #boardContainer = null;
    #sortComponent = null;
    #currentSortType = sortType.DAY;
    #PointModel= null;
    #noPoint = new welcomeMesage()
    constructor(boardContainer,pointModel) {
      this.#boardContainer = boardContainer;
      this.#PointModel = pointModel;
      this.#PointModel.addObserver(this.#handleModelEvent);
    }

    get points (){
      switch (this.#currentSortType) {
        case sortType.DIFERENT:
          return this.#PointModel.points.slice().sort((a, b) => b.diferent - a.diferent);
        case sortType.PRICE:
          return [...this.#PointModel.points].slice().sort((a, b) => b.base_price - a.base_price);
      }
      return this.#PointModel.points;
    }

      init = () => {
        // Метод для инициализации (начала работы) модуля
        renderElement(menuBlock,new menuElement(),RenderPosition.BEFOREEND);
        renderElement(filterBlock,new filtersElement(),RenderPosition.BEFOREEND);
        this.#renderBoard();
      }

      #renderSortElement = () => {
        // Метод для рендеринга сортировки
        this.#sortComponent = new SortElement(this.#currentSortType);
        this.#sortComponent.setSortTypeChangeHandler(this.#handleSortTypeChange);
        renderElement(this.#boardContainer, this.#sortComponent, RenderPosition.AFTERBEGIN);
      }

      #renderPointComponent = (data) => {
        const travelPointPresenterInstance = new TravelPontPresenter(this.#boardContainer,this.#handleViewAction,this.#handleModeChange);
        travelPointPresenterInstance.init(data);
        this.#pointPresenter.set(data.id,travelPointPresenterInstance);
      }

      #renderPoints = () => {
        // Метод для рендеринга N-point за раз
        if (this.points.length>0) {
          this.points.forEach((data)=> {
            this.#renderPointComponent(data);
          });
        }
      }

      #renderWelcomeMessage = () => {
        // Метод для рендеринга заглушки
        if (this.#PointModel.length===0) {renderElement(this.#boardContainer,this.#noPoint, RenderPosition.BEFOREEND);}
      }

      #renderBoard = () => {
        // Метод для инициализации (начала работы) модуля
        const points = this.points;
        if (points.length===0) {this.#renderWelcomeMessage();}
        this.#renderInfoAbautTrip();
        this.#renderSortElement();
        this.#renderPoints();
      }

      #renderInfoAbautTrip = ()=> {
        if (this.#PointModel.length>0) {
          renderElement(menuBlock,new InfoAbautTrip(this.#PointModel),RenderPosition.BEFOREEND);}
      }

      #clearPointList = () => {
        this.#pointPresenter.forEach((presenter) => presenter.destroy());
        this.#pointPresenter.clear();
      }

      #handleModeChange = () => {
        this.#pointPresenter.forEach((presenter) => presenter.resetView());
      }

      #handleViewAction = (actionType, updateType, update) => {
        switch (actionType) {
          case UserAction.UPDATE_TASK:
            this.#PointModel.updateTask(updateType, update);
            break;
          case UserAction.ADD_TASK:
            this.#PointModel.addTask(updateType, update);
            break;
          case UserAction.DELETE_TASK:
            this.#PointModel.deleteTask(updateType, update);
            break;
        }
      }

      #handleModelEvent = (updateType, data) => {
        switch (updateType) {
          case UpdateType.PATCH:
            this.#pointPresenter.get(data.id).init(data);
            break;
          case UpdateType.MINOR:
            this.#clearBoard();
            this.#renderBoard();
            break;
          case UpdateType.MAJOR:
            this.#clearBoard({resetSortType: true});
            this.#renderBoard();
            break;
        }
      }

     #handleSortTypeChange = (sortTypeC) => {
       if (this.#currentSortType === sortTypeC) {
         return;
       }
       this.#currentSortType =sortTypeC;
       this.#clearBoard({resetRenderedTaskCount: true});
       this.#renderBoard();
     }

     #clearBoard = ({resetSortType = false} = {}) => {

       this.#pointPresenter.forEach((point) => point.destroy());
       this.#pointPresenter.clear();

       remove(this.#sortComponent);
       remove(this.#noPoint);


       if (resetSortType) {
         this.#currentSortType = sortType.DAY;
       }
     }

}

