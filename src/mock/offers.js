import {getRandomPositiveInteger} from '../util/util';
import { setid} from './id';
let offerId = setid();
let offerDiscription = ['add luggage','switch comfort' , 'add meal', 'chose seats','travel by train','With automatic transmission']


function setTestOffers (){
    const random = getRandomPositiveInteger(0,5);
    let offersArray = [];
    for(let i =0;i<random;i++){
        let offerObject= {};
        offerObject.id =offerId();
        offerObject.title = offerDiscription[getRandomPositiveInteger(0, offerDiscription.length-1)];
        offerObject.price = getRandomPositiveInteger(1, 100);
        offersArray.push(offerObject)
    }

return offersArray;
}
export {setTestOffers};