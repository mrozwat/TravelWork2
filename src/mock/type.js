import { getRandomPositiveInteger } from '../util/util';

const types = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Checkin', 'Sightseeing', 'Restaurant'];

function setType () {
  const randomNumber =getRandomPositiveInteger(0,types.length-1);
  return types[randomNumber];
}


export{setType};
