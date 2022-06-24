function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
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

export {getRandomPositiveInteger}