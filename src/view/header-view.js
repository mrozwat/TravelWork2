import AbstractView from './abstract-view';
import dayjs from 'dayjs';
import { sortTaskByDay } from '../utils/point';

const createHeaderView = (points) => {
  points.sort(sortTaskByDay);
  const arrayNameCities = points.map((event)=> event.city.currentCity.name);
  let totalBasePrice = null;
  points.forEach((point)=> {totalBasePrice += Number(point.basePrice);});
  const dateBegin = dayjs(points[0].date.dataBeginEvent).format('D MMM');
  const dateEnd = dayjs(points[points.length-1].date.dataEndEvent).format('DD MMM');

  let tripTitles = '';

  if(arrayNameCities.length <= 3) {
    arrayNameCities.forEach((nameCity, index) => {
      if(index === arrayNameCities.length - 1) {
        tripTitles += `${nameCity}`;
      }
      else {
        tripTitles += `${nameCity} &mdash; `;
      }
    });
  }
  else if(arrayNameCities.length > 3) {
    tripTitles = `${arrayNameCities[0]} &mdash; ... &mdash; ${arrayNameCities[arrayNameCities.length - 1]}`;
  }

  return`<section class="trip-main__trip-info  trip-info">
            <div class="trip-info__main">
              <h1 class="trip-info__title">${tripTitles}</h1>
              <p class="trip-info__dates">${dateBegin}&nbsp;&mdash;&nbsp;${dateEnd}</p>
            </div>
            <p class="trip-info__cost">
              Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalBasePrice}</span>
            </p>
          </section>`;
};
export default class HeaderView extends AbstractView{
  #points = null;

  constructor(points){
    super();
    this.#points = points;
  }

  get template() {
    return createHeaderView(this.#points);
  }
}
