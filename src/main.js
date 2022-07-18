import BoardPresenter from './presenter/bord-presenter.js';
import PointModel from './model/points-model.js';
import filtersElement  from '../src/view/filters-Template.js';
import{RenderPosition,renderElement} from '../src/render/render.js';
import FilterPresenter from './presenter/filter-presenter.js';
import FilterModel from './model/filterModel.js';
import {MenuItem, remove} from './util/util';
import menuElement from './view/menuTemplate.js';
import StatisticsView from './view/statistics-view.js';

//  Model
const pointModel = new PointModel();
const filtreModele = new FilterModel();
const siteMenuComponent  = new menuElement();

//position for new block
const bordContainer =document.querySelector('.trip-events');
const filterBlock =document.querySelector('.trip-controls__filters');

// render function
renderElement(filterBlock, siteMenuComponent ,RenderPosition.BEFOREEND);


const BoardPresenterInstans =  new BoardPresenter (bordContainer,pointModel,filtreModele);
const filterPresenter = new FilterPresenter(filterBlock, filtreModele, pointModel);
const button =document.querySelector('.trip-main__event-add-btn');
let stats = null;
let cyrentpage=MenuItem.POINTS;
const typebt = document.querySelector('#table');
const statsbt = document.querySelector('#stats');

const handleSiteMenuClick = (menuItem) => {
  switch (menuItem) {
    case MenuItem.POINTS:
      if(cyrentpage===MenuItem.STATISTICS){
        remove(stats);
        stats =null;
        filterPresenter.init();
        BoardPresenterInstans.init();
        button.classList.remove('visually-hidden');
        typebt.classList.add('trip-tabs__btn--active');
        statsbt.classList.remove('trip-tabs__btn--active');
        cyrentpage =MenuItem.POINTS;
        break;} else {return;}
    case MenuItem.STATISTICS:
      if(cyrentpage===MenuItem.POINTS){
        filterPresenter.destroy();
        BoardPresenterInstans.destroy();
        stats = new StatisticsView(pointModel.points);
        renderElement(bordContainer,stats,RenderPosition.BEFOREEND);
        stats.init();
        button.classList.add('visually-hidden');
        typebt.classList.remove('trip-tabs__btn--active');
        statsbt.classList.add('trip-tabs__btn--active');
        cyrentpage =MenuItem.STATISTICS;
        break;} else {}
  }
};

siteMenuComponent.setMenuClickHandler(handleSiteMenuClick);

//VERNUT
filterPresenter.init();
BoardPresenterInstans.init();


//add point
button.addEventListener('click', (evt) => {
  evt.preventDefault();
  BoardPresenterInstans.createTask();

});
