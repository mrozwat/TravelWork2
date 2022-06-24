import { setid} from './id';
import { setType } from './type';
import { endDate,startDate } from './date';
import { setCityName,setDescription,setPicture} from './destination';
import { getRandomPositiveInteger } from '../util/util';

const pointid = setid();

const point ={
  'id': pointid(),
  'type': setType(),
  'date_from': startDate(),
  'date_to': endDate(),
  'destination': {
    'name': setCityName(),
    'description': setDescription(),
    'pictures': setPicture()
  },
  'base_price': getRandomPositiveInteger(1,1000),
  'is_favorite': Boolean(getRandomPositiveInteger(0,1)),
  'offers': [
    {
      'id': 1,
      'title': 'With automatic transmission',
      'price': 110
    }
  ]
};
 
console.log(point)