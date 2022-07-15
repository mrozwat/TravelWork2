import { offersTemplate } from './travelPoint/offersTemplate.js';
import AbstractElement from './abstract_view.js';
import he from 'he';
const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);


export default  class travelPointElement extends AbstractElement {
  #data = null;

  constructor(data){
    super();
    this.#data=data;
  }

  get template () { return travelPoint(this.#data);}

  setEditClickHandler = (callback) => {
    this._callback.editClick = callback;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editClickHandler);
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.editClick();
  }

  setFavoriteClickHandler = (callback) => {
    this._callback.favoriteClick = callback;
    this.element.querySelector('.event__favorite-btn').addEventListener('click', this.#favoriteClickHandler);
  }

  #favoriteClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.favoriteClick();
  }

}


function travelPoint(data)
{
  let travelPointHtml = '';
  const dateFrom = dayjs(data.date_from);
  const dateTo = dayjs(data.date_to);
  travelPointHtml+=`<li class="trip-events__item">
<div class="event">
  <time class="event__date" datetime="${data.date_from}">${dayjs(data.date_from).format('MMM D')}</time>
  <div class="event__type">
    <img class="event__type-icon" width="42" height="42" src="img/icons/${data.type.toLowerCase()}.png" alt="Event type icon">
  </div>
  <h3 class="event__title">${he.encode(data.destination.name)}</h3>
  <div class="event__schedule">
    <p class="event__time">
      <time class="event__start-time" datetime="${data.date_from}">${dayjs(data.date_from).format('H:mm')}</time>
      &mdash;
      <time class="event__end-time" datetime="${data.date_to}">${dayjs(data.date_to).format('H:mm')}</time>
    </p>
    <p class="event__duration">${dayjs(dateFrom).from(dateTo, true)}</p>
  </div>
  <p class="event__price">
    &euro;&nbsp;<span class="event__price-value">${data.base_price}</span>
  </p>
  <h4 class="visually-hidden">Offers:</h4>
  <ul class="event__selected-offers">
  ${offersTemplate(data)}
  </ul>
  <button class="event__favorite-btn event__favorite-btn--${data.is_favorite ? 'active':'ne active' }" type="button">
    <span class="visually-hidden">Add to favorite</span>
    <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
      <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
    </svg>
  </button>
  <button class="event__rollup-btn" type="button">
    <span class="visually-hidden">Open event</span>
  </button>
</div>
</li>`;
  return travelPointHtml;
}


