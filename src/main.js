import BoardPresenter from './presenter/bord-presenter.js';
import PointModel from './model/points-model.js';
import filtersElement  from '../src/view/filters-Template.js';
import{RenderPosition,renderElement} from '../src/render/render.js';
import FilterPresenter from './presenter/filter-presenter.js';
import FilterModel from './model/filterModel.js';
import {MenuItem} from './util/util';
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


const handleSiteMenuClick = (menuItem) => {
  switch (menuItem) {
    case MenuItem.POINTS:
      filterPresenter.init();
      BoardPresenterInstans.init();
      // BoardPresenterInstans.init();
      // Показать фильтры
      // Показать доску
      // Скрыть статистику
      break;
    case MenuItem.STATISTICS:
      filterPresenter.destroy();
      BoardPresenterInstans.destroy();
      // Скрыть фильтры
      // Скрыть доску
      // Показать статистику
      break;
  }
};

siteMenuComponent.setMenuClickHandler(handleSiteMenuClick);

//VERNUT
// filterPresenter.init();
// BoardPresenterInstans.init();
const stats = new StatisticsView(pointModel.points);
renderElement(bordContainer,stats,RenderPosition.BEFOREEND);
stats.init();

//add point
document.querySelector('.trip-main__event-add-btn').addEventListener('click', (evt) => {
  evt.preventDefault();
  BoardPresenterInstans.createTask();

});
