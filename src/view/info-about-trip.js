import { createElement } from '../render/render.js';
const dayjs = require('dayjs');


export default  class InfoAbautTrip {
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

  get template () { return InfoAbautTripHtml(this.#data);}

  removeElement () {
    this.#element=null;
  }
}

function InfoAbautTripHtml (Data) {
  const infoAboutTripHtml =`
  <section class="trip-main__trip-info  trip-info">
<div class="trip-info__main">
  <h1 class="trip-info__title">${tripCityList(Data)}</h1>

  <p class="trip-info__dates">${dayjs(Data[0].date_from).format('MMM D')}&nbsp;&mdash;&nbsp;${dayjs(Data[Data.length-1].date_to).format('D MMM')}</p>
</div>
<p class="trip-info__cost">
              Total: €&nbsp;<span class="trip-info__cost-value">${tripCost(Data)}</span>
            </p>
</section>
`;
  return infoAboutTripHtml;
}

function tripCityList (Data) {
  const length = Data.length;
  let cityList ='';

  if (length===0) {cityList ='';}

  else if (length===1 && Data[0].destination.name!=='' ) {
    cityList = `${`${Data[0].destination.name} `}`;
  }


  else if (length===2 && Data[0].destination.name!=='' && Data[1].destination.name!=='') {
    cityList = `${`${Data[0].destination.name} ${Data[1].destination.name}`}`;
  }

  else if (length===3 && Data[0].destination.name!=='' && Data[1].destination.name!=='' && Data[2].destination.name!=='') {
    cityList = `${`${Data[0].destination.name} ${Data[1].destination.name} ${Data[2].destination.name}`}`;
  }

  else if (length>3 && Data[0].destination.name!=='') { cityList = `${`${Data[0].destination.name}...${Data[Data.length-1].destination.name}`}`;}


  return cityList;

}

function tripCost (Data) {
  let price = 0;
  for (let i =0 ; i<Data.length; i++) {
    price +=Data[i].base_price;
  }
  return price;
}


