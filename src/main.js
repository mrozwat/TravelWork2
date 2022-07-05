import{render,RenderPosition,renderElement} from './render/render.js';
import editElement  from './view/edit-Template.js';
import menuElement from './view/menuTemplate.js';
import filtersElement  from './view/filters-Template.js';
import SortElement  from './view/sort-Template.js';
import { addNew } from './view/Add-New-Template.js'; //v konce // render(addNewBlock,addNew(),RenderPosition.BEFOREEND);
import  travelPoint  from './view/travel-Point_Template.js';
import { InfoAbautTrip } from '../src/view/menu/info-about-trip.js';
import { testData } from './mock/test-data.js';


const data =testData;
console.log(data);

//position for new block
const menuBlock =document.querySelector('.trip-controls__navigation');
const filterBlock =document.querySelector('.trip-controls__filters');
const sortBlock =document.querySelector('.trip-events');

// render function
renderElement(sortBlock,new SortElement().element,RenderPosition.BEFOREEND);

if (data.length>0) {
  render(menuBlock,InfoAbautTrip(),RenderPosition.BEFOREEND);}


if (data.length>0) {
  data.forEach((data)=> {
    renderElement(sortBlock,new editElement(data).element,RenderPosition.BEFOREEND);
    renderElement(sortBlock, new travelPoint(data).element,RenderPosition.BEFOREEND);
  });
}


renderElement(menuBlock,new menuElement().element,RenderPosition.BEFOREEND);
renderElement(filterBlock,new filtersElement().element,RenderPosition.BEFOREEND);


