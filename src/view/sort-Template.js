import AbstractElement from './abstract_view';
import { sortType } from '../util/util.js';


export default class SortElement extends AbstractElement {
  #element = null;
  #currentSortType = null;

  constructor (currentSortType){
    super();
    this.#currentSortType=currentSortType;
  }

  get template () { return sort(this.#currentSortType);}

  setSortTypeChangeHandler = (callback) => {
    this._callback.sortTypeChange = callback;
    this.element.addEventListener('change', this.#sortTypeChangeHandler);
  }

  #sortTypeChangeHandler = (evt) => {
    evt.preventDefault();
    this._callback.sortTypeChange(evt.target.dataset.sortType);
  }

}


function sort (currentSortType){

  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
<div class="trip-sort__item  trip-sort__item--day">
  <input id="sort-day" class="trip-sort__input   visually-hidden" type="radio" name="trip-sort" value="sort-day" data-sort-type="${sortType.DAY}" ${currentSortType === sortType.DAY ? 'checked' : ''}   >
  <label class="trip-sort__btn" for="sort-day">Day</label>
</div>

<div class="trip-sort__item  trip-sort__item--event">
  <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
  <label class="trip-sort__btn" for="sort-event">Event</label>
</div>

<div class="trip-sort__item  trip-sort__item--time">
  <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time" data-sort-type="${sortType.DIFERENT}"${currentSortType === sortType.DIFERENT ? 'checked' : ''} >
  <label class="trip-sort__btn" for="sort-time">Time</label>
</div>

<div class="trip-sort__item  trip-sort__item--price">
  <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" data-sort-type="${sortType.PRICE}" ${currentSortType === sortType.PRICE ? 'checked' : ''}>
  <label class="trip-sort__btn" for="sort-price">Price</label>
</div>

<div class="trip-sort__item  trip-sort__item--offer">
  <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
  <label class="trip-sort__btn" for="sort-offer">Offers</label>
</div>
</form>`;}

