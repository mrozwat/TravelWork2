import AbstractElement from './abstract_view.js';
import {offerType} from '../view/edit/edit-emplate-offers-types.js';
import { offerListToEdit,setoption } from '../view/edit/edit-template-offers-list.js';
import {editPhoto} from './edit/edit-photo.js';
import { description } from './edit/edit-photo.js';
const dayjs = require('dayjs');
import { offersList,descriptionList } from '../mock/test-data.js';
//element.querySelector('input[name="event-type"]:checked').value;

export default  class editElement extends AbstractElement {
  #data = null;
  #dataCondition=null;
  #offersList=null;
  #descriptionList=null;
  constructor(data){
    super();
    this.#data=data;
    this.#offersList=offersList;
    this.#descriptionList=descriptionList;
    this.#dataCondition=this.#data;
  }

   #setConditionData =()=>{
     this.#dataCondition= {
       'name': this.#data.destination.name,
       'type':this.#data.type.toLowerCase().toString(),
       'price': this.#data.base_price,
       'timeTo':this.#data.date_to,
       'timeFrom':this.#data.date_from,
       'description':'',
       'checkedOffers': [],
       'pictures':[]
     };

     offersList.forEach((element)=>{if(element.type=== this.#dataCondition.type){this.#dataCondition.checkedOffers.push(...element.offers);} else {}});

     for (let i=0; i<this.#dataCondition.checkedOffers.length;i++){
       for (let k=0;k<this.#data.offers.length;k++){
         if (this.#dataCondition.checkedOffers[i].id===this.#data.offers[k].id) { this.#dataCondition.checkedOffers[i].ceheck=true;}
         else{ this.#dataCondition.checkedOffers[i].ceheck=false;}
       }
     }

     this.#descriptionList.forEach((el)=>{if(el.name===this.#dataCondition.name){this.#dataCondition.description=el.description;
       this.#dataCondition.pictures.push(...el.pictures);

     }});
   }

   get template () {
     this.#setConditionData();
     return edit(this.#dataCondition,this.#descriptionList);}

  setFormSubmitHandler = (callback) => {
    this._callback.formSubmit = callback;
    this.element.addEventListener('submit', this.#formSubmitHandler);
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this._callback.formSubmit(this.#data);
  }

  setEditClickHandler = (callback) => {
    this._callback.editClick = callback;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editClickHandler);
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.editClick();
  }

}


function edit (datacondition,allCitys){
console.log(allCitys)
  const editHtml =`<form class="event event--edit" action="#" method="post" id="editform">
<header class="event__header">
  <div class="event__type-wrapper">
    <label class="event__type  event__type-btn" for="event-type-toggle-1">
      <span class="visually-hidden">Choose event type</span>
      <img class="event__type-icon" width="17" height="17" src="img/icons/${datacondition.type.toLowerCase()}.png" alt="Event type icon">
    </label>
    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

    <div class="event__type-list">
      ${offerType(datacondition)}
    </div>
  </div>

  <div class="event__field-group  event__field-group--destination">
    <label class="event__label  event__type-output" for="event-destination-1">
    ${datacondition.type}
    </label>
    <input  class="event__input  event__input--destination" list="destination-list-1" id="event-destination-1" type="text" name="event-destination" value="${datacondition.name}"">
    <datalist id="destination-list-1">
     ${setoption(allCitys)}
      <option value="Amsterdam">
      <option value="Geneva">
      <option value="Chamonix">
    </datalist>
  </div>

  <div class="event__field-group  event__field-group--time">
    <label class="visually-hidden" for="event-start-time-1">From</label>
    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${dayjs(datacondition.timeFrom).format('DD/MM/YY HH.mm')}">
    &mdash;
    <label class="visually-hidden" for="event-end-time-1">To</label>
    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${dayjs(datacondition.timeTo).format('DD/MM/YY HH.mm')}">
  </div>

  <div class="event__field-group  event__field-group--price">
    <label class="event__label" for="event-price-1">
      <span class="visually-hidden">Price</span>
      &euro;
    </label>
    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${datacondition.price}">
  </div>

  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
  <button class="event__reset-btn" type="reset">Delete</button>
  <button class="event__rollup-btn" type="button">
    <span class="visually-hidden">Open event</span>
  </button>
</header>
<section class="event__details">
      ${offerListToEdit(datacondition)}
    </div>
  </section>

  <section class="event__section  event__section--destination">
   ${description(datacondition)}
    <div class="event__photos-container">
    <div class="event__photos-tape">
      ${editPhoto(datacondition)}
    </div>
  </div>
    </section>
</section>
</form>`;
  return editHtml;
}

