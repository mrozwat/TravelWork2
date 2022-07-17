import AbstractElement from './abstract_view';
import { MenuItem } from '../util/util';

export default  class menuElement extends AbstractElement {


  get template () { return menu();}

  setMenuClickHandler = (callback) => {
    this._callback.menuClick = callback;
    this.element.addEventListener('click', this.#menuClickHandler);
  }

  setMenuItem = (menuItem) => {
    const item = this.element.querySelector('.trip-controls__trip-tabs');

    if (item !== null) {
      item.checked = true;
    }
  }

  #menuClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.menuClick(evt.target.dataset.type);
    console.log(evt.target.dataset.type)
  }

}


function menu (){
  return `<div class="trip-main">
    <div class="trip-main__trip-controls  trip-controls">
      <div class="trip-controls__navigation">
        <h2 class="visually-hidden">Switch trip view</h2>
        <nav class="trip-controls__trip-tabs  trip-tabs">


        <a class="trip-tabs__btn " href="#" data-type="${MenuItem.POINTS}" id="table" >Table</a>
        <a class="trip-tabs__btn" href="#" data-type="${MenuItem.STATISTICS}"id="stats" >Stats</a>
      
        </nav>
  </div>`;}


