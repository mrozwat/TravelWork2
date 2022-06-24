function setid () {
  let idcounter = 0;
  return function () {
    return idcounter+=1; // tyt nelzya po drygomy ya testil
  };
}

// function getRandomIdFromRange (min,max){
//   const idAray = [];
//   return function () {
//     let curentValue = getRandomPositiveInteger(min,max);
//     if (idAray >=(max-min+1)) { return null;}
//     while (idAray.includes(curentValue)) {
//       curentValue = getRandomPositiveInteger (min,max);
//     }
//     idAray.push(curentValue);
//     return curentValue;
//   };
// }

export {setid};
