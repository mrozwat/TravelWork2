const dayjs = require('dayjs');
import {getRandomPositiveInteger} from '../util/util';

function startDate () {
  const day = dayjs().add(getRandomPositiveInteger(0,3), 'day').toDate();
  return day;
}

function endDate () {
  const day = dayjs().add(getRandomPositiveInteger(4,7), 'day').toDate();
  return day;
}

export{startDate,endDate};