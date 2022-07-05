import { setid} from './id';
import { setType } from './type';
import { endDate,startDate } from './date';
import { setCityName,setDescription,setPicture} from './destination';
import { getRandomPositiveInteger } from '../util/util';
import { setTestOffers } from './offers';

const pointid = setid();


function getTestPoint (){
  const testPointArray =[];
  const random = getRandomPositiveInteger(0,20);
  for (let i=0;i<random;i++){
    const pointTest ={
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
      'offers': setTestOffers()
    };
    testPointArray.push(pointTest);
  }
  return testPointArray;
}


const rawTestData = getTestPoint();

const testData = rawTestData.slice().sort((a, b) => a.date_from - b.date_from) //sort fo date

console.log(testData);

export {testData};
