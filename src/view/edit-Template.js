import {offerType} from '../view/edit/edit-emplate-offers-types.js';
import { offerListToEdit,setoption } from '../view/edit/edit-template-offers-list.js';
import {editPhoto} from './edit/edit-photo.js';
import { description } from './edit/edit-photo.js';
import { offersList,descriptionList } from '../mock/test-data.js';
import AbstractSmartView from './abstract-smart-view.js';
const dayjs = require('dayjs');
//element.querySelector('input[name="event-type"]:checked').value;

export default  class editElement extends AbstractSmartView{
  #data = null;
  #offersList=null;
  #descriptionList=null;
  constructor(data){
    super();
    this.#data=data;
    this.#offersList=offersList;
    this.#descriptionList=descriptionList;
    this._dataCondition=this.#setConditionData(this.#data);
    this.#setinnerHandlers();
  }

   #setConditionData =(data)=>{
     this._dataCondition= {
       'name': data.destination.name,
       'type':data.type.toLowerCase().toString(),
       'price': data.base_price,
       'timeTo':data.date_to,
       'timeFrom':data.date_from,
       'description':'',
       'checkedOffers': [],
       'pictures':[]
     };

     offersList.forEach((element)=>{if(element.type=== this._dataCondition.type){this._dataCondition.checkedOffers.push(...element.offers);} else {}});

     for (let i=0; i<this._dataCondition.checkedOffers.length;i++){
       for (let k=0;k<this.#data.offers.length;k++){
         if (this._dataCondition.checkedOffers[i].id===data.offers[k].id) { this._dataCondition.checkedOffers[i].ceheck=true;}
         else{ this._dataCondition.checkedOffers[i].ceheck=false;}
       }
     }

     this.#descriptionList.forEach((el)=>{if(el.name===this._dataCondition.name){this._dataCondition.description=el.description;
       this._dataCondition.pictures.push(...el.pictures);

     }});
     return this._dataCondition;
   }

   get template () {
     return edit(this._dataCondition,this.#descriptionList);}

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

  setTypeButtonhandler = () => {
    this.element.querySelector('.event__type-group').addEventListener('change', this.#typeButtonhandler);
  }

  #typeButtonhandler= (evt) =>{
    evt.preventDefault();
    const datatoUpdate = {
      'type': this.element.querySelector('input[name="event-type"]:checked').value,
      'checkedOffers':[]
    };

    offersList.forEach((element)=>{if(element.type=== datatoUpdate.type){
      datatoUpdate.checkedOffers.push(...element.offers);} else {}});
    this.updateData(datatoUpdate);
  }

  setNamebuttonHandler = () =>{
    this.element.querySelector('.event__input--destination').addEventListener('change', this.#nameHandler);
  };

  #nameHandler=(evt)=>{
    evt.preventDefault();
    const dataUpdate ={
      'name':this.element.querySelector('input[name="event-destination"]').value,
      'pictures':[]
    };

    this.#descriptionList.forEach((el)=>{if(el.name===dataUpdate.name){dataUpdate.description=el.description;
      dataUpdate.pictures.push(...el.pictures);
    }});
    this.updateData(dataUpdate);
  };

  setInpuPriceHandler =()=>{
    this.element.querySelector('.event__input--price').addEventListener('input', this.#inputPriceHandler);
  };

  #inputPriceHandler= ()=>{
    const dataPriceUpdate ={
      'price':this.element.querySelector('.event__input--price').value,
    };
    this.updateData(dataPriceUpdate,true);
  };

  #setinnerHandlers= ()=>{
    this.setTypeButtonhandler();
    this.setNamebuttonHandler();
    this.setInpuPriceHandler();
  };

  restoreHandlers = () => {
    this.#setinnerHandlers();
    this.setEditClickHandler(this._callback.editClick);
    this.setFormSubmitHandler(this._callback.formSubmit);
  }
}


function edit (datacondition,allCitys){
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
    <select>
     ${setoption(allCitys)}
     </select>
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

