import   {testData}from'../mock/test-data.js'
import { offersTemplate } from './offersTemplate.js';
const dayjs = require('dayjs');
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

console.log(testData)





function travelPoint()
{
  let travelPointHtml = ``;

  for (let i=0;i<testData.length;i++){
    let dateFrom = dayjs(testData[i].date_from);
    let dateTo = dayjs(testData[i].date_to);
    travelPointHtml+=`<li class="trip-events__item">
<div class="event">
  <time class="event__date" datetime="${testData[i].date_from}">${dayjs(testData[i].date_from).format('MMM D')}</time>
  <div class="event__type">
    <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">
  </div>
  <h3 class="event__title">${testData[i].destination.name}</h3>
  <div class="event__schedule">
    <p class="event__time">
      <time class="event__start-time" datetime="${testData[i].date_from}">${dayjs(testData[i].date_from).format('H:mm')}</time>
      &mdash;
      <time class="event__end-time" datetime="${testData[i].date_to}">${dayjs(testData[i].date_to).format('H:mm')}</time>
    </p>
    <p class="event__duration">${dayjs(dateFrom).from(dateTo, true)}</p>
  </div>
  <p class="event__price">
    &euro;&nbsp;<span class="event__price-value">${testData[i].base_price}</span>
  </p>
  <h4 class="visually-hidden">Offers:</h4>
  <ul class="event__selected-offers">
  ${offersTemplate(i)}
  </ul>
  <button class="event__favorite-btn event__favorite-btn--active" type="button">
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
  }
  
  return travelPointHtml
}


export {travelPoint};
