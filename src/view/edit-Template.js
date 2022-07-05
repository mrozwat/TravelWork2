import { createElement } from '../render/render.js';
import {offerType} from '../view/edit/edit-emplate-offers-types.js';
import { offerListToEdit } from '../view/edit/edit-template-offers-list.js';
import {editPhoto} from './edit/edit-photo.js';
import { description } from './edit/edit-photo.js';
const dayjs = require('dayjs');


export default  class editElement {
  #element = null;
  #data = null;

  constructor(data){
    this.#data=data;
  }

  get element () {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template () { return edit(this.#data);}

  removeElement () {
    this.#element=null;
  }
}


function edit (data){
  const editHtml =`<form class="event event--edit" action="#" method="post">
<header class="event__header">
  <div class="event__type-wrapper">
    <label class="event__type  event__type-btn" for="event-type-toggle-1">
      <span class="visually-hidden">Choose event type</span>
      <img class="event__type-icon" width="17" height="17" src="img/icons/${data.type.toLowerCase()}.png" alt="Event type icon">
    </label>
    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

    <div class="event__type-list">
      ${offerType(data)}
    </div>
  </div>

  <div class="event__field-group  event__field-group--destination">
    <label class="event__label  event__type-output" for="event-destination-1">
    ${data.type}
    </label>
    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${data.destination.name}" list="destination-list-1">
    <datalist id="destination-list-1">
      <option value="Amsterdam"></option>
      <option value="Geneva"></option>
      <option value="Chamonix"></option>
    </datalist>
  </div>

  <div class="event__field-group  event__field-group--time">
    <label class="visually-hidden" for="event-start-time-1">From</label>
    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${dayjs(data.date_from).format('DD/MM/YY HH.mm')}">
    &mdash;
    <label class="visually-hidden" for="event-end-time-1">To</label>
    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${dayjs(data.date_to).format('DD/MM/YY HH.mm')}">
  </div>

  <div class="event__field-group  event__field-group--price">
    <label class="event__label" for="event-price-1">
      <span class="visually-hidden">Price</span>
      &euro;
    </label>
    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${data.base_price}">
  </div>

  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
  <button class="event__reset-btn" type="reset">Delete</button>
  <button class="event__rollup-btn" type="button">
    <span class="visually-hidden">Open event</span>
  </button>
</header>
<section class="event__details">
      ${offerListToEdit(data)}
    </div>
  </section>

  <section class="event__section  event__section--destination">
   ${description(data)}
    <div class="event__photos-container">
    <div class="event__photos-tape">
      ${editPhoto(data)}
    </div>
  </div>
    </section>
</section>
</form>`;
  return editHtml;
}

