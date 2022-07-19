import  travelPoint  from '../view/travel-Point_Template.js';
import editElement  from '../view/edit-Template.js';
import{RenderPosition,renderElement,remove} from '../render/render.js';
import { replace } from '../util/util.js';
import { UserAction, UpdateType } from '../util/util.js';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export const State = {
  SAVING: 'SAVING',
  DELETING: 'DELETING',
  ABORTING: 'ABORTING'
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

  this.#pointEditComponent.setDeleteClickHandler(this.#handleDeleteClick);

  this.#pointComponent.setFavoriteClickHandler(this.#handleFavoriteClick);


  this.#pointComponent.setEditClickHandler(() => {
    this.#replacePointToEdit();
    document.addEventListener('keydown', this.#onEscKeyDown);
  });

  this.#pointEditComponent.setEditClickHandler( () => {
    this.#replaceEditToPoint();
  });

  this.#pointEditComponent.setFormSubmitHandler(this.#handelSubmitForm);


  if (prevPointComponent === null || prevEditComponent === null) {
    renderElement(this.#pointListContainer, this.#pointComponent, RenderPosition.BEFOREEND);
    return;
  }


  if (this.#mode === Mode.DEFAULT) {
    replace( this.#pointComponent,prevPointComponent);
  }


  if (this.#mode === Mode.EDITING) {
    replace(this.#pointEditComponent, prevEditComponent);
    this.#mode = Mode.DEFAULT;
  }


  remove(prevPointComponent);
  remove(prevEditComponent);

}

setSaving = () => {
  this.#pointEditComponent.updateData({
    isDisabled: true,
    isSaving: true,
  });
}

setViewState = (state) => {
  if (this.#mode === Mode.DEFAULT) {
    return;
  }

  const resetFormState = () => {
    this.#pointEditComponent.updateData({
      isDisabled: false,
      isSaving: false,
      isDeleting: false,
    });
  };


  switch (state) {
    case State.SAVING:
      this.#pointEditComponent.updateData({
        isDisabled: true,
        isSaving: true,
      });
      break;
    case State.DELETING:
      this.#pointEditComponent.updateData({
        isDisabled: true,
        isDeleting: true,
      });
      break;
    case State.ABORTING:
      this.#pointComponent.shake(resetFormState);
      this.#pointEditComponent.shake(resetFormState);
      break;
  }
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
    UserAction.UPDATE_POINT,
    UpdateType.MINOR,
    {...this.#point, is_favorite: !this.#point.is_favorite},
  );
}

#handelSubmitForm = (update12) => {
  this.#changeData(
    UserAction.UPDATE_POINT,
    UpdateType.MINOR ,
    update12
  );
}

#handleDeleteClick = (point) => {
  this.#changeData(
    UserAction.DELETE_POINT,
    UpdateType.MINOR,
    point,
  );}

}

