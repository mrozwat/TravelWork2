import  travelPoint  from '../view/travel-Point_Template.js';
import editElement  from '../view/edit-Template.js';
import{RenderPosition,renderElement} from '../render/render.js';

export default  class TravelPontPresenter {
    #pointListContainer = null;
    #pointComponent = null;
    #pointEditComponent = null;
    #point = null;

    constructor(poinListContainer) {
      this.#pointListContainer = poinListContainer;
    }

    init = (point) =>{
      this.#point=point;
      this.#pointComponent = new travelPoint(point);
      this.#pointEditComponent = new editElement(point);

      this.#pointComponent.setEditClickHandler(() => {
        this.#replacePointToEdit();
        document.addEventListener('keydown', this.#onEscKeyDown);
      });

      this.#pointEditComponent.setEditClickHandler( () => {
        this.#replaceEditToPoint();
      });

      this.#pointEditComponent.setFormSubmitHandler(() => {
        this.#replaceEditToPoint();
      });

      renderElement(this.#pointListContainer, this.#pointComponent, RenderPosition.BEFOREEND);
    }

    #replacePointToEdit = () => {
      this.#pointComponent.element.replaceWith(this.#pointEditComponent.element);};

    #replaceEditToPoint = () => {
      this.#pointEditComponent.element.replaceWith(this.#pointComponent.element);};

    #onEscKeyDown = (evt) =>{
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        this.#replaceEditToPoint();
        document.removeEventListener('keydown', this.#onEscKeyDown);
      }
    }


}
