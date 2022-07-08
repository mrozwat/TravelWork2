import { setType } from './type';
import { endDate,startDate } from './date';
import { setCityName,setDescription,setPicture} from './destination';
import { getRandomPositiveInteger } from '../util/util';
import { setTestOffers } from './offers';
import {nanoid} from 'nanoid';
const dayjs = require('dayjs');





function getTestPoint (){
  const testPointArray =[];
  const random = getRandomPositiveInteger(0,20);
  for (let i=0;i<random;i++){
    const pointTest ={
      'id': nanoid(),
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

const testData = rawTestData.slice().sort((a, b) => b.date_from - a.date_from);//sort fo date

//add new key to data with value
testData.forEach(element =>{
  let a=dayjs(element.date_from);
  let b =dayjs(element.date_to)
  element.diferent=b.diff(a,'minute');
}) 

export {testData};
