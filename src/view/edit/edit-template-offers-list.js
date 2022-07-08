

function offerListToEdit (data,offersList,descriptionList){


  let curnetOffers;
  let isChecked;
  const offerlist = offersList;
  const dataType= data.type.toLowerCase().toString();
  offerlist.forEach((element) => {
    if(element.type===dataType){
      curnetOffers= element.offers;
    }
  });


  let offersListHtml ='';
  if (curnetOffers!== undefined && curnetOffers.length>0) {
    offersListHtml =`
  <section class="event__section  event__section--offers">
    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

    <div class="event__available-offers">`;

    for (let j=0;j<curnetOffers.length;j++){

      data.offers.forEach((element)=>{if(element.id===curnetOffers[j].id)  {isChecked=true; } else {isChecked=false;} });

      offersListHtml +=`
    <div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-${curnetOffers[j].title}-1" type="checkbox" name="event-offer-${curnetOffers[j].title}" ${isChecked? 'checked': ''}>
            <label class="event__offer-label" for="event-offer-${curnetOffers[j].title}-1">
          <span class="event__offer-title">${curnetOffers[j].title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${curnetOffers[j].price}</span>
            </label>
            </div>`;}
    return offersListHtml;
  }

  else {return offersListHtml ='';}
}
export{offerListToEdit};
