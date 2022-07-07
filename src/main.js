import { testData } from './mock/test-data.js';
import BoardPresenter from './presenter/bord-presenter.js';

// Data Model
const data =testData;
console.log(data);

//position for new block
const bordContainer =document.querySelector('.trip-events');

// render function

const BoardPresenterInstans =  new BoardPresenter (bordContainer);
BoardPresenterInstans.init(data);

