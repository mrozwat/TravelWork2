import{RenderPosition,renderElement} from '../render/render.js';
import SortElement  from '../view/sort-Template.js';
import  InfoAbautTrip from '../view/info-about-trip.js';
import welcomeMesage from '../view/welcomeMesage.js';
import TravelPontPresenter from './task-presenter.js';
import { sortType,UpdateType,UserAction,remove,FilterType} from '../util/util.js';
import {filter} from '../util/filter';
import PointNewPresenter from './point-New-Presenter';

// render(addNewBlock,addNew(),RenderPosition.BEFOREEND); addnew

//const
const menuBlock =document.querySelector('.trip-controls__navigation');


export default class BoardPresenter {
    #pointPresenter = new Map();
    #boardContainer = null;
    #sortComponent = null;
    #currentSortType = sortType.DAY;
    #PointModel= null;
    #noPoint = new welcomeMesage()
    #TripInfo=null;
    #filterModel = null;
    #pointNewPresenter = null;
    constructor(boardContainer,pointModel,filtreModel) {
      this.#filterModel = filtreModel;
      this.#boardContainer = boardContainer;
      this.#PointModel = pointModel;
      this.#TripInfo= new InfoAbautTrip(this.#PointModel);

    }

    get points (){
      const filterType = this.#filterModel.filter;
      const points = this.#PointModel.points;
      const filteredPoints = filter[filterType](points);

      switch (this.#currentSortType) {
        case sortType.DIFERENT:
          return filteredPoints.sort((a, b) => b.diferent - a.diferent);
        case sortType.PRICE:
          return filteredPoints.sort((a, b) => b.base_price - a.base_price);
      }
      this.#filterModel.addObserver(this.#handleModelEvent);
      this.#PointModel.addObserver(this.#handleModelEvent);
      return filteredPoints;
    }

      init = () => {
        // Метод для инициализации (начала работы) модуля
        this.#renderBoard();
      }

      #renderSortElement = () => {
        // Метод для рендеринга сортировки
        this.#sortComponent = new SortElement(this.#currentSortType);
        this.#sortComponent.setSortTypeChangeHandler(this.#handleSortTypeChange);
        renderElement(this.#boardContainer, this.#sortComponent, RenderPosition.AFTERBEGIN);
        this.#pointNewPresenter = new PointNewPresenter(this.#boardContainer, this.#handleViewAction);

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
        renderElement(this.#boardContainer,this.#noPoint, RenderPosition.BEFOREEND);
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
        renderElement(menuBlock,this.#TripInfo,RenderPosition.BEFOREEND);
      }


      #handleModeChange = () => {
        this.#pointPresenter.forEach((presenter) => presenter.resetView());
      }

      #handleViewAction = (actionType, updateType, update) => {
        switch (actionType) {
          case UserAction.UPDATE_POINT:
            this.#PointModel.updateTask(updateType, update);
            break;
          case UserAction.ADD_POINT:
            this.#PointModel.addTask(updateType, update);
            break;
          case UserAction.DELETE_POINT:
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
       this.#pointNewPresenter.destroy();
       this.#pointPresenter.forEach((point) => point.destroy());
       this.#pointPresenter.clear();

       remove(this.#sortComponent);
       remove(this.#noPoint);
       remove(this.#TripInfo);

       if (resetSortType) {
         this.#currentSortType = sortType.DAY;
       }
     }

     createTask = () => {
       //  this.#currentSortType = sortType.DEFAULT;
       this.#pointNewPresenter.init();
     }

     destroy = () => {
       this.#clearBoard({resetSortType: true});
       this.#PointModel.removeObserver(this.#handleModelEvent);
       this.#filterModel.removeObserver(this.#handleModelEvent);
     }
}

