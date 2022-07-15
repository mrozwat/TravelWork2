
import AbstractElement from '../view/abstract_view.js';



const RenderPosition ={
  BEFOREBEGIN:'beforebegin',
  AFTERBEGIN:'afterbegin',
  BEFOREEND:'beforeend',
  AFTEREND:'afterend',
};


function renderElement  (container,element, place) {
  const parent = container instanceof AbstractElement ? container.element : container;
  const child = element instanceof AbstractElement ? element.element : element;
  switch (place){
    case RenderPosition.BEFOREBEGIN:
      parent.before(child);
      break;
    case RenderPosition.AFTERBEGIN:
      parent.prepend(child);
      break;
    case RenderPosition.BEFOREEND:
      parent.append(child);
      break;
    case RenderPosition.AFTEREND:
      parent.after(child);
      break;
  }
}

function createElement (template) {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstElementChild;
}

const remove = (component) => {
  if (component === null) {
    return;
  }

  if (!(component instanceof AbstractElement)) {
    throw new Error('Can remove only components');
  }

  
    component.element.remove();
 

  component.removeElement();
};

export {RenderPosition,renderElement,createElement,remove};
