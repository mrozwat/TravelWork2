function editPhoto(datacondition) {
  let imgHtml ='';
  for (let j=0; j<datacondition.pictures.length;j++){

    imgHtml += `<img class="event__photo" src="${datacondition.pictures[j].src}" alt="${datacondition.pictures[j].description}"></img>`;

  }
  return imgHtml;
}

function description (datacondition) {
  let description ='<h3 class="event__section-title  event__section-title--destination">Destination</h3>';

  if (datacondition.description!=`` ||datacondition.pictures.length !==0 ) {
    description+=`<p class="event__destination-description">${datacondition.description}</p>`;
  }
  else {description='';}

  return description;
}

export {editPhoto,description};
