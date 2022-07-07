import{RenderPosition,renderElement} from '../render/render.js';
import editElement  from '../view/edit-Template.js';
import menuElement from '../view/menuTemplate.js';//
import filtersElement  from '../view/filters-Template.js';//
import SortElement  from '../view/sort-Template.js';
import { addNew } from '../view/Add-New-Template.js'; //v konce // render(addNewBlock,addNew(),RenderPosition.BEFOREEND);
import  travelPoint  from '../view/travel-Point_Template.js';
import  InfoAbautTrip from '../view/info-about-trip.js';
import { testData } from '../mock/test-data.js';
import welcomeMesage from '../view/welcomeMesage.js';

const menuBlock =document.querySelector('.trip-controls__navigation');
const filterBlock =document.querySelector('.trip-controls__filters');


export default class BoardPresenter {
    #boardContainer = null;
    #dataPoints = [];

    constructor(boardContainer) {
      this.#boardContainer = boardContainer;
    }

      init = (dataPoints) => {
        // Метод для инициализации (начала работы) модуля,
        // малая часть текущей функции renderBoard в main.js
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
        // Метод, куда уйдёт логика созданию и рендерингу компонетов point
        const pointComponent = new travelPoint(data);
        const editComponent = new editElement(data);

        const replacePointToEdit = () => {
          pointComponent.element.replaceWith(editComponent.element);};

        const replaceEditToPoint = () => {
          editComponent.element.replaceWith(pointComponent.element);};

        function onEscKeyDown  (evt) {
          if (evt.key === 'Escape' || evt.key === 'Esc') {
            evt.preventDefault();
            replaceEditToPoint();
            document.removeEventListener('keydown', onEscKeyDown);
          }
        }

        pointComponent.setEditClickHandler(() => {
          replacePointToEdit();
          document.addEventListener('keydown', onEscKeyDown);
        });

        editComponent.setEditClickHandler( () => {
          replaceEditToPoint();
        });

        editComponent.setFormSubmitHandler(() => {
          replaceEditToPoint();
        });


        renderElement(this.#boardContainer, pointComponent, RenderPosition.BEFOREEND);
      }


      #renderTasks = () => {
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
        this.#renderTasks();
        this.#renderWelcomeMessage();
      }

      #renderInfoAbautTrip = ()=> {
        if (this.#dataPoints.length>0) {
          renderElement(menuBlock,new InfoAbautTrip(this.#dataPoints),RenderPosition.BEFOREEND);}
      }
}

