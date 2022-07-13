import  travelPoint  from '../view/travel-Point_Template.js';
import editElement  from '../view/edit-Template.js';
import{RenderPosition,renderElement,remove} from '../render/render.js';
import { replace } from '../util/util.js';
import { UserAction, UpdateType } from '../util/util.js';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export default  class TravelPontPresenter {
    #pointListContainer = null;
    #pointComponent = null;
    #pointEditComponent = null;
    #point = null;
    #changeData = null;
    #changeMode = null;
    #mode = Mode.DEFAULT
    constructor(poinListContainer,changeData,changeMode ) {
      this.#changeData=changeData;
      this.#pointListContainer = poinListContainer;
      this.#changeMode = changeMode;
    }

init = (point) =>{
  this.#point=point;
  const prevEditComponent = this.#pointEditComponent;
  const prevPointComponent = this.#pointComponent;
  this.#pointComponent = new travelPoint(point);
  this.#pointEditComponent = new editElement(point);


  this.#pointComponent.setFavoriteClickHandler(this.#handleFavoriteClick);


  this.#pointComponent.setEditClickHandler(() => {
    this.#replacePointToEdit();
    document.addEventListener('keydown', this.#onEscKeyDown);
  });

  this.#pointEditComponent.setEditClickHandler( () => {
    this.#replaceEditToPoint();
  });

  this.#pointEditComponent.setFormSubmitHandler( () => {
    this.#replaceEditToPoint();
  });
 

  if (prevPointComponent === null || prevEditComponent === null) {
    renderElement(this.#pointListContainer, this.#pointComponent, RenderPosition.BEFOREEND);
    return;
  }


  if (this.#mode === Mode.DEFAULT) {
    replace( this.#pointComponent,prevPointComponent);
  }


  if (this.#mode === Mode.EDITING) {
    replace(this.#pointEditComponent,prevEditComponent);
  }


  remove(prevPointComponent);
  remove(prevEditComponent);

}

resetView = () => {
  if (this.#mode !== Mode.DEFAULT) {
    this.#replaceEditToPoint();
  }
}

#replacePointToEdit = () => {
  this.#pointComponent.element.replaceWith(this.#pointEditComponent.element);
  document.addEventListener('keydown', this.#onEscKeyDown);
  this.#changeMode();
  this.#mode = Mode.EDITING;
};

#replaceEditToPoint = () => {
  this.#pointEditComponent.reset(this.#point);
  this.#pointEditComponent.element.replaceWith(this.#pointComponent.element);
  document.removeEventListener('keydown',this.#onEscKeyDown);
  this.#mode = Mode.DEFAULT;
};

destroy = () => {
  remove(this.#pointComponent);
  remove(this.#pointEditComponent);
}

#onEscKeyDown = (evt) =>{
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    this.#pointEditComponent.reset(this.#point);
    this.#replaceEditToPoint();
    document.removeEventListener('keydown', this.#onEscKeyDown);
  }
}

#handleFavoriteClick = () => {
  this.#changeData(
    UserAction.UPDATE_TASK,
    UpdateType.MINOR,
    {...this.#point, isFavorite: !this.#point.isFavorite},
  );
}

#handelSubmitForm = () => {
  this.#changeData(
    UserAction.UPDATE_TASK,
    UpdateType.MINOR,
    this.#point,
  );
  this.#replaceEditToPoint();
}

}

