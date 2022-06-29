import { InfoAbautTrip } from '../view/info-about-trip.js';

function menu (){
  return `  
  <div class="trip-main">
  ${InfoAbautTrip()}
    <div class="trip-main__trip-controls  trip-controls">
      <div class="trip-controls__navigation">
        <h2 class="visually-hidden">Switch trip view</h2>
        <nav class="trip-controls__trip-tabs  trip-tabs">
        <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
        <a class="trip-tabs__btn" href="#">Stats</a>
      </nav>
  </div>`;}

export{menu};
