

function offerListToEdit (datacondition){
  let offersListHtml ='';

  if (datacondition.checkedOffers!== undefined && datacondition.checkedOffers.length>0) {
    offersListHtml =`
  <section class="event__section  event__section--offers">
    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

    <div class="event__available-offers">`;

    for (let j=0;j<datacondition.checkedOffers.length;j++){

      offersListHtml +=`
    <div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="${datacondition.checkedOffers[j].id}" type="checkbox" name="event-offer-${datacondition.checkedOffers[j].title}" ${datacondition.checkedOffers[j].ceheck ? 'checked': ''}>
            <label class="event__offer-label" for="event-offer-${datacondition.checkedOffers[j].title}-1">
          <span class="event__offer-title">${datacondition.checkedOffers[j].title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${datacondition.checkedOffers[j].price}</span>
            </label>
            </div>`;}
    return offersListHtml;
  }

  else {return offersListHtml ='';}
}

function setoption(allCitys){
  let htmlOptiom =``;
  allCitys.forEach(element => {
    htmlOptiom+=`<option value="${element.name}"></option>`;
  });
  return htmlOptiom;
}
export{offerListToEdit,setoption};
