import { createElement } from '../render/render.js';


export default class welcomeMesage {
  #element = null;
  

  get element () {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template () { return welcomeMesageHtml();}

  removeElement () {
    this.#element=null;
  }
}


function welcomeMesageHtml (){
  return '<p class="trip-events__msg">Click New Event to create your first point</p>' ;
}
