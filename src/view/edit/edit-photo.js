import {testData} from '../../mock/test-data.js';

function editPhoto(i) {
  let imgHtml ='';
  for (let j=0; j<testData[i].destination.pictures.length;j++){

    imgHtml += `<img class="event__photo" src="${testData[i].destination.pictures[j].src}" alt="${testData[i].destination.pictures[j].description}"></img>`;

  }
  return imgHtml;
}

function description (i) {
  let description ='<h3 class="event__section-title  event__section-title--destination">Destination</h3>';

  if (testData[i].destination.description!=`` ||testData[i].destination.pictures.length !=0 ) {
    description+=`<p class="event__destination-description">${testData[i].destination.description}</p>`;
  }
  else {description='';}

  return description;
}

export {editPhoto,description};
