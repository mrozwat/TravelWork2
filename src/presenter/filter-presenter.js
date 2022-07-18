import filtersElement from '../view/filters-Template';
import { RenderPosition, remove, renderElement} from '../render/render';
import {FilterType, UpdateType} from '../util/util';
import { replace } from '../util/util.js';

export default class FilterPresenter {
  #filterContainer = null;
  #filterModel = null;
  #pointModel = null;

  #filterComponent = null;

  constructor(filterContainer, filterModel, pointModel) {
    this.#filterContainer = filterContainer;
    this.#filterModel = filterModel;
    this.#pointModel = pointModel;

    this.#pointModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  get filters() {

    return [
      {
        type: FilterType.ALL,
        name: 'All',
      },
      {
        type: FilterType.FUTURE,
        name: 'future',
      },
      {
        type: FilterType.PAST,
        name: 'past',
      }
    ];
  }

  init = () => {
    const filters = this.filters;
    const prevFilterComponent = this.#filterComponent;

    this.#filterComponent = new filtersElement(filters, this.#filterModel.filter);
    this.#filterComponent.setFilterTypeChangeHandler(this.#handleFilterTypeChange);

    this.#pointModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);

    if (prevFilterComponent === null) {
      renderElement(this.#filterContainer, this.#filterComponent, RenderPosition.AFTEREND);
      return;
    }

    replace(this.#filterComponent, prevFilterComponent);
    remove(prevFilterComponent);
  }

  #handleModelEvent = () => {
    this.init();
  }

  #handleFilterTypeChange = (filterType) => {
    if (this.#filterModel.filter === filterType) {
      return;
    }

    this.#filterModel.setFilter(UpdateType.MAJOR, filterType);
  }

  destroy = () => {
    remove(this.#filterComponent);
    this.#filterComponent = null;

    this.#pointModel.removeObserver(this.#handleModelEvent);
    this.#filterModel.removeObserver(this.#handleModelEvent);

    this.#filterModel.setFilter(UpdateType.MAJOR, FilterType.ALL);
  }
}
