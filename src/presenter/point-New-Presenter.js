import editElement from '../view/edit-Template';
import {nanoid} from 'nanoid';
import { remove } from '../render/render.js';
import{RenderPosition,renderElement} from '../render/render.js';
import {UserAction, UpdateType} from '../util/util';
import dayjs from 'dayjs';

export default class PointNewPresenter {
  #pointListContainer = null;
  #changeData = null;
  #pointEditComponent = null;

  constructor(pointListContainer, changeData) {
    this.#pointListContainer = pointListContainer;
    this.#changeData = changeData;
  }

  init = () => {
    const clearData= {
      'base_price':0,
      'date_from': dayjs(),
      'date_to': dayjs(),
      'destination':{'description':'',
        'name': 'Choose city',
        'pictures': [],
      },
      'id':nanoid(),
      'offers': [],
      'type':'taxi',
      'is_favorite':false
    };


    if (this.#pointEditComponent !== null) {
      return;
    }

    this.#pointEditComponent = new editElement(clearData);
    this.#pointEditComponent.setFormSubmitHandler(this.#handleFormSubmit);
    this.#pointEditComponent.setDeleteClickHandler(this.#handleDeleteClick);

    renderElement(this.#pointListContainer, this.#pointEditComponent, RenderPosition.AFTERBEGIN);

    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  destroy = () => {
    if (this.#pointEditComponent === null) {
      return;
    }

    remove(this.#pointEditComponent);
    this.#pointEditComponent = null;

    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }


  setSaving = () => {
    this.#pointEditComponent.updateData({
      isDisabled: true,
    });
  }

  #handleFormSubmit = (point) => {
    this.#changeData(
      UserAction.ADD_POINT,
      UpdateType.MAJOR,
      point,
    );
  }

  setAborting = () => {
    const resetFormState = () => {
      this.#pointEditComponent.updateData({
        isDisabled: false,
        isSaving: false,
        isDeleting: false,
      });
    };

    this.#pointEditComponent.shake(resetFormState);
  }

  #handleDeleteClick = () => {
    this.destroy();
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.destroy();
    }
  }
}
