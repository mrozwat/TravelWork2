import {getRandomPositiveInteger} from '../util/util';
import { setid} from './id';
const offerId = setid();
const offerDiscription = ['add luggage','switch comfort' , 'add meal', 'chose seats','travel by train','With automatic transmission'];


function setTestOffers (){
  const random = getRandomPositiveInteger(0,5);
  const offersArray = [];
  for(let i =0;i<random;i++){
    const offerObject= {};
    offerObject.id =offerId();
    offerObject.title = offerDiscription[getRandomPositiveInteger(0, offerDiscription.length-1)];
    offerObject.price = getRandomPositiveInteger(1, 100);
    offersArray.push(offerObject);
  }

  return offersArray;
}
export {setTestOffers};
