const RenderPosition ={
  BEFOREBEGIN:'beforebegin',
  AFTERBEGIN:'afterbegin',
  BEFOREEND:'beforeend',
  AFTEREND:'afterend',
};

//deleat
function render (contaner, html,position){
  contaner.insertAdjacentHTML(position,html);
}

function renderElement  (container,element, place) {
  switch (place){
    case RenderPosition.BEFOREBEGIN:
      container.before(element);
      break;
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
    case RenderPosition.AFTEREND:
      container.after(element);
      break;
  }
}

function createElement (template) {
  let newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstElementChild;
}

export {render,RenderPosition,renderElement,createElement};
