import{render,RenderPosition} from './render/render.js';
import {menu} from './view/menuTemplate';
import { filter } from './view/filters-Template';
import { sort } from './view/sort-Template.js';
import { addNew } from './view/Add-New-Template.js'; //v konce // render(addNewBlock,addNew(),RenderPosition.BEFOREEND);
import { edit } from './view/edit-Template.js';
import { travelPoint } from './view/travel-Point_Template.js';
import { InfoAbautTrip } from '../src/view/menu/info-about-trip.js';
import { testData } from './mock/test-data.js';

//position for new block
const menuBlock =document.querySelector('.trip-controls__navigation');
const filterBlock =document.querySelector('.trip-controls__filters');
const sortBlock =document.querySelector('.trip-events');

//contaner,html,position render function
if (testData.length>0) {render(menuBlock,InfoAbautTrip(),RenderPosition.BEFOREEND);}
render(sortBlock,sort(),RenderPosition.BEFOREEND);
if (testData.length>0) {render(sortBlock,edit(),RenderPosition.BEFOREEND);}
render(menuBlock,menu(),RenderPosition.BEFOREEND);
render(filterBlock,filter(),RenderPosition.BEFOREEND);
//mb nead change template


render(sortBlock,travelPoint(),RenderPosition.BEFOREEND);

