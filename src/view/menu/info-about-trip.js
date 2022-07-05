import {testData} from '../../mock/test-data.js';
const dayjs = require('dayjs');

function InfoAbautTrip () {
  const infoAboutTripHtml =`
  <section class="trip-main__trip-info  trip-info">
<div class="trip-info__main">
  <h1 class="trip-info__title">${tripCityList()}</h1>

  <p class="trip-info__dates">${dayjs(testData[0].date_from).format('MMM D')}&nbsp;&mdash;&nbsp;${dayjs(testData[testData.length-1].date_to).format('D MMM')}</p>
</div>
<p class="trip-info__cost">
              Total: €&nbsp;<span class="trip-info__cost-value">${tripCost ()}</span>
            </p>
</section>
`;
  return infoAboutTripHtml;
}

function tripCityList () {
  const length = testData.length;
  let cityList ='';

  if (length===0) {cityList =='';}

  else if (length===1 && testData[0].destination.name!=='' ) {
    cityList = `${`${testData[0].destination.name} `}`;
  }


  else if (length===2 && testData[0].destination.name!=='' && testData[1].destination.name!=='') {
    cityList = `${`${testData[0].destination.name} ${testData[1].destination.name}`}`;
  }

  else if (length===3 && testData[0].destination.name!=='' && testData[1].destination.name!=='' && testData[2].destination.name!=='') {
    cityList = `${`${testData[0].destination.name} ${testData[1].destination.name} ${testData[2].destination.name}`}`;
  }

  else if (length>3 && testData[0].destination.name!=='') { cityList = `${`${testData[0].destination.name}...${testData[2].destination.name}`}`;}


  return cityList;

}

function tripCost () {
  let price = 0;
  for (let i =0 ; i<testData.length; i++) {
price +=testData[i].base_price
  }
  return price
}


export {InfoAbautTrip};
