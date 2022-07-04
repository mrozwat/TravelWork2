import   {testData}from'../../mock/test-data.js';

function offerListToEdit (i){
  let offersListHtml ='';
  if (testData[i].offers.length>0) {
    offersListHtml =`
  <section class="event__section  event__section--offers">
    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

    <div class="event__available-offers">`;
    for (let j=0;j<testData[i].offers.length;j++){
      offersListHtml +=`
    
    <div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-${testData[i].offers[j].title}-1" type="checkbox" name="event-offer-${testData[i].offers[j].title}" checked>
            <label class="event__offer-label" for="event-offer-${testData[i].offers[j].title}-1">
          <span class="event__offer-title">${testData[i].offers[j].title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${testData[i].offers[j].price}</span>
            </label>
            </div>`;}
    return offersListHtml;
  }

  else {return offersListHtml ='';}
}
export{offerListToEdit};
