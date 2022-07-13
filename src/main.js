import { testData } from './mock/test-data.js';
import BoardPresenter from './presenter/bord-presenter.js';
import PointModel from './model/points-model.js';
// Data Model
// const data =testData;
// console.log(data);

const pointModel = new PointModel();


//position for new block
const bordContainer =document.querySelector('.trip-events');

// render function

const BoardPresenterInstans =  new BoardPresenter (bordContainer,pointModel);
BoardPresenterInstans.init();

