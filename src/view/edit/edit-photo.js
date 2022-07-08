function editPhoto(data,descriptionList) {
  console.log(descriptionList)
  let imgHtml ='';
  for (let j=0; j<data.destination.pictures.length;j++){

    imgHtml += `<img class="event__photo" src="${data.destination.pictures[j].src}" alt="${data.destination.pictures[j].description}"></img>`;

  }
  return imgHtml;
}

function description (data,descriptionList) {
  let description ='<h3 class="event__section-title  event__section-title--destination">Destination</h3>';

  if (data.destination.description!=`` ||data.destination.pictures.length !=0 ) {
    description+=`<p class="event__destination-description">${data.destination.description}</p>`;
  }
  else {description='';}

  return description;
}

export {editPhoto,description};
