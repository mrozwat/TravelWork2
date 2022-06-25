
import{render,RenderPosition} from './render/render.js';
import {menu} from './view/menuTemplate';
import { filter } from './view/filters-Template';
import { sort } from './view/sort-Template.js';
import { addNew } from './view/Add-New-Template.js';
import { edit } from './view/edit-Template.js';
import { travelPoint } from './view/travel-Point_Template.js';
import   {testData}from'./mock/test-data.js'



const TravelPointCount = 3;

//position for new block
const menuBlock =document.querySelector('.trip-controls__navigation');
const filterBlock =document.querySelector('.trip-controls__filters');
const sortBlock =document.querySelector('.trip-events');
const addNewBlock = document.querySelector('.trip-events');//mb nead change
const editBlock = document.querySelector('.trip-events');//mb nead change
const Travelpoint = document.querySelector('.trip-events');//mb nead change

//contaner,html,position render function
render(sortBlock,sort(),RenderPosition.BEFOREEND);
render(editBlock,edit(),RenderPosition.BEFOREEND);
render(menuBlock,menu(),RenderPosition.BEFOREEND);
render(filterBlock,filter(),RenderPosition.BEFOREEND);
//mb nead change template

for (let i=0; i<TravelPointCount;i++){
  render(Travelpoint,travelPoint(),RenderPosition.BEFOREEND);//mb nead change
}

// render(addNewBlock,addNew(),RenderPosition.BEFOREEND);

