import   {testData}from'../mock/test-data.js'

function offersTemplate (i){
    
    let offersHTML = '';
    for (let j =0;j<testData[i].offers.length;j++){
        offersHTML +=`
    <li class="event__offer">
      <span class="event__offer-title">${testData[i].offers[j].title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${testData[i].offers[j].price}</span>
    </li>
  `;
    }
    return offersHTML;
}


export {offersTemplate};