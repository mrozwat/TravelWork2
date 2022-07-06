import{RenderPosition,renderElement} from './render/render.js';
import editElement  from './view/edit-Template.js';
import menuElement from './view/menuTemplate.js';
import filtersElement  from './view/filters-Template.js';
import SortElement  from './view/sort-Template.js';
import { addNew } from './view/Add-New-Template.js'; //v konce // render(addNewBlock,addNew(),RenderPosition.BEFOREEND);
import  travelPoint  from './view/travel-Point_Template.js';
import  InfoAbautTrip from './view/info-about-trip.js';
import { testData } from './mock/test-data.js';
import welcomeMesage from './view/welcomeMesage.js';

// Data Model
const data =testData;
console.log(data);

//position for new block
const menuBlock =document.querySelector('.trip-controls__navigation');
const filterBlock =document.querySelector('.trip-controls__filters');
const sortBlock =document.querySelector('.trip-events');

// render function
renderElement(sortBlock,new SortElement().element,RenderPosition.BEFOREEND);

if (data.length===0) {renderElement(sortBlock,new welcomeMesage().element, RenderPosition.BEFOREEND);}

if (data.length>0) {
  renderElement(menuBlock,new InfoAbautTrip(data).element,RenderPosition.BEFOREEND);}


if (data.length>0) {
  data.forEach((data)=> {
    renderPoinPlusEdit(sortBlock,data);
  });
}

renderElement(menuBlock,new menuElement().element,RenderPosition.BEFOREEND);
renderElement(filterBlock,new filtersElement().element,RenderPosition.BEFOREEND);


function renderPoinPlusEdit (pointElement, data) {
  const pointComponent = new travelPoint(data);
  const editComponent = new editElement(data);

  const replacePointToEdit = () => {
    pointComponent.element.replaceWith(editComponent.element);};

  const replaceEditToPoint = () => {
    editComponent.element.replaceWith(pointComponent.element);};

  function onEscKeyDown  (evt) {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      replaceEditToPoint();
      document.removeEventListener('keydown', onEscKeyDown);
    }
  }

  pointComponent.setEditClickHandler(() => {
    replacePointToEdit();
    document.addEventListener('keydown', onEscKeyDown);
  });

  
  editComponent.setEditClickHandler( () => {
    replaceEditToPoint();
  });

  editComponent.setFormSubmitHandler(() => {
    replaceEditToPoint();
  });


  renderElement(pointElement, pointComponent.element, RenderPosition.BEFOREEND);
}


