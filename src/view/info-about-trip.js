import AbstractElement from './abstract_view';
const dayjs = require('dayjs');


export default  class InfoAbautTrip extends AbstractElement {
  #data = null;

  constructor(data){
    super();
    this.#data=data;

  }

  get template () { return InfoAbautTripHtml(this.#data);}

}

function InfoAbautTripHtml (Data) {
  if (Data.points.length===0) {return '<section></section> ';}
  else{
    const infoAboutTripHtml =`
  <section class="trip-main__trip-info  trip-info">
<div class="trip-info__main">
  <h1 class="trip-info__title">${tripCityList(Data.points)}</h1>

  <p class="trip-info__dates">${dayjs(Data.points[0].date_from).format('MMM D')}&nbsp;&mdash;&nbsp;${dayjs(Data.points[Data.points.length-1].date_to).format('D MMM')}</p>
</div>
<p class="trip-info__cost">
              Total: €&nbsp;<span class="trip-info__cost-value">${tripCost(Data.points)}</span>
            </p>
</section>
`;
    return infoAboutTripHtml;}
}

function tripCityList (Data) {
  const length = Data.length;
  let cityList ='';

  if (length===0) {cityList ='';}

  else if (length===1 && Data[0].destination.name!=='' ) {
    cityList = `${`${Data[0].destination.name} `}`;
  }


  else if (length===2 && Data[0].destination.name!=='' && Data[1].destination.name!=='') {
    cityList = `${`${Data[1].destination.name} ${Data[0].destination.name}`}`;
  }

  else if (length===3 && Data[0].destination.name!=='' && Data[1].destination.name!=='' && Data[2].destination.name!=='') {
    cityList = `${`${Data[2].destination.name}-${Data[1].destination.name}-${Data[0].destination.name}`}`;
  }

  else if (length>3 && Data[0].destination.name!=='') { cityList = `${`${Data[Data.length-1].destination.name}...${Data[0].destination.name}`}`;}


  return cityList;

}

function tripCost (Data) {
  let price = 0;
  for (let i =0 ; i<Data.length; i++) {
    price +=Data[i].base_price;
  }
  return price;
}


