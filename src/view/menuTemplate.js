import { createElement } from '../render/render.js';

 export default  class menuElement {
  #element = null;

  get element () {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template () { return menu();}

  removeElement () {
    this.#element=null;
  }
}



function menu (){
  return `<div class="trip-main">
    <div class="trip-main__trip-controls  trip-controls">
      <div class="trip-controls__navigation">
        <h2 class="visually-hidden">Switch trip view</h2>
        <nav class="trip-controls__trip-tabs  trip-tabs">
        <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
        <a class="trip-tabs__btn" href="#">Stats</a>
      </nav>
  </div>`;}


