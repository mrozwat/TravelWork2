import{RenderPosition,renderElement} from '../render/render.js';
import menuElement from '../view/menuTemplate.js';
import filtersElement  from '../view/filters-Template.js';
import SortElement  from '../view/sort-Template.js';
import { addNew } from '../view/Add-New-Template.js'; //v konce // render(addNewBlock,addNew(),RenderPosition.BEFOREEND);
import  InfoAbautTrip from '../view/info-about-trip.js';
import welcomeMesage from '../view/welcomeMesage.js';
import TravelPontPresenter from './task-presenter.js';
import { updateItem } from '../util/util.js';

//const
const menuBlock =document.querySelector('.trip-controls__navigation');
const filterBlock =document.querySelector('.trip-controls__filters');


export default class BoardPresenter {
    #pointPresenter = new Map();
    #boardContainer = null;
    #dataPoints = [];

    constructor(boardContainer) {
      this.#boardContainer = boardContainer;
    }

      init = (dataPoints) => {
        // Метод для инициализации (начала работы) модуля
        this.#dataPoints = [...dataPoints];
        renderElement(menuBlock,new menuElement(),RenderPosition.BEFOREEND);
        renderElement(filterBlock,new filtersElement(),RenderPosition.BEFOREEND);
        this.#renderBoard();
      }

      #renderSortElement = () => {
        // Метод для рендеринга сортировки
        renderElement(this.#boardContainer,new SortElement(),RenderPosition.BEFOREEND);
      }

      #renderPointComponent = (data) => {
        const travelPointPresenterInstance = new TravelPontPresenter(this.#boardContainer,this.#handleTaskChange,this.#handleModeChange);
        travelPointPresenterInstance.init(data);
        this.#pointPresenter.set(data.id,travelPointPresenterInstance);
      }

      #renderPoints = () => {
        // Метод для рендеринга N-point за раз
        if (this.#dataPoints.length>0) {
          this.#dataPoints.forEach((data)=> {
            this.#renderPointComponent(data);
          });
        }
      }

      #renderWelcomeMessage = () => {
        // Метод для рендеринга заглушки
        if (this.#dataPoints.length===0) {renderElement(this.#boardContainer,new welcomeMesage(), RenderPosition.BEFOREEND);}
      }

      #renderBoard = () => {
        // Метод для инициализации (начала работы) модуля
        this.#renderInfoAbautTrip();
        this.#renderSortElement();
        this.#renderPoints();
        this.#renderWelcomeMessage();
      }

      #renderInfoAbautTrip = ()=> {
        if (this.#dataPoints.length>0) {
          renderElement(menuBlock,new InfoAbautTrip(this.#dataPoints),RenderPosition.BEFOREEND);}
      }

      #clearTaskList = () => {
        this.#pointPresenter.forEach((presenter) => presenter.destroy());
        this.#pointPresenter.clear();
      }

      #handleModeChange = () => {
        this.#pointPresenter.forEach((presenter) => presenter.resetView());
      }

     #handleTaskChange = (updatedTask) => {
       this.#dataPoints = updateItem(this.#dataPoints, updatedTask);
       this.#pointPresenter.get(updatedTask.id).init(updatedTask);
     }
}

