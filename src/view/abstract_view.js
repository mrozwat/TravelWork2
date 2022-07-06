import { createElement } from '../render/render';

export default class AbstractElement {
#element=null;
constructor (){
  if(new.target===AbstractElement){throw new Error ('Can/t instantiate AbstractView, only concrete one.');}
}

get element() {
  if (!this.#element) {
    this.#element = createElement(this.template);
  }

  return this.#element;
}

get template() {
  throw new Error('Abstract method not implemented: get template');
}

removeElement() {
  this.#element = null;
}
}
