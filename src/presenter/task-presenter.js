import  travelPoint  from '../view/travel-Point_Template.js';
import editElement  from '../view/edit-Template.js';
import{RenderPosition,renderElement,remove} from '../render/render.js';

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
  const prevEditComponent = this.#pointEditComponent;
  const prevPointComponent = this.#pointComponent;
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


  if (prevPointComponent === null || prevEditComponent === null) {
    renderElement(this.#pointListContainer, this.#pointComponent, RenderPosition.BEFOREEND);
    return;
  }


  if (this.#pointListContainer.element.contains(prevPointComponent.element)) {
    this.#pointListContainer.element.replaceWith(prevPointComponent.element);
  }

  if (this.#pointListContainer.element.contains(prevEditComponent.element)) {
    this.#pointEditComponent.element.replaceWith(prevEditComponent.element);
  }

  remove(prevPointComponent);
  remove(prevEditComponent);


}

#replacePointToEdit = () => {
  this.#pointComponent.element.replaceWith(this.#pointEditComponent.element);};

#replaceEditToPoint = () => {
  this.#pointEditComponent.element.replaceWith(this.#pointComponent.element);};

destroy = () => {
  remove(this.#pointComponent);
  remove(this.#pointEditComponent);
}

#onEscKeyDown = (evt) =>{
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    this.#replaceEditToPoint();
    document.removeEventListener('keydown', this.#onEscKeyDown);
  }
}
}
