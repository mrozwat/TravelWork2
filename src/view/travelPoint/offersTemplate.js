function offersTemplate (data){

  let offersHTML = '';
  for (let j =0;j<data.offers.length;j++){
    offersHTML +=`<li class="event__offer">
      <span class="event__offer-title">${data.offers[j].title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${data.offers[j].price}</span>
    </li>
  `;
  }
  return offersHTML;
}


export {offersTemplate};
