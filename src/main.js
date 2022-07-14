import { testData } from './mock/test-data.js';
import BoardPresenter from './presenter/bord-presenter.js';
import PointModel from './model/points-model.js';
import filtersElement  from '../src/view/filters-Template.js';
import{RenderPosition,renderElement} from '../src/render/render.js';
import FilterPresenter from './presenter/filter-presenter.js';
import FilterModel from './model/filterModel.js';
// Data Model
// const data =testData;
// console.log(data);

const pointModel = new PointModel();
const filtreModele = new FilterModel();
//position for new block
const bordContainer =document.querySelector('.trip-events');
const filterBlock =document.querySelector('.trip-controls__filters');
// render function

const BoardPresenterInstans =  new BoardPresenter (bordContainer,pointModel,filtreModele);
BoardPresenterInstans.init();
const filterPresenter = new FilterPresenter(filterBlock, filtreModele, pointModel);
filterPresenter.init();