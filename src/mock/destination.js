import { getRandomPositiveInteger } from '../util/util';

const citys = [
  'Triford',
  'Blonport',
  'Uyruchester',
  'Vetol',
  'Wison',
  'Shance',
  'Yrora',
  'Yrodon',
  'Orkland',
  'Eimfield',
  'Sreemont'];

const description = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui',
  'Sed sed nisi sed augue convallis suscipit in sed felis',
  'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus',
  'In rutrum ac purus sit amet tempus'
];

function setCityName () {
  const random = getRandomPositiveInteger(0,citys.length-1);
  return citys[random];
}

function setDescription () {
  const startRandom = getRandomPositiveInteger(0,description.length-1);
  const endRandom =  getRandomPositiveInteger(startRandom,description.length-1);
  const descriptionNewArray = description.slice(startRandom,endRandom).join(' ');
  return descriptionNewArray;
}

function  setPictureSrc () {
  const random =getRandomPositiveInteger(1,10000);
  const src = `http://picsum.photos/248/152?r=${random}`;
  return src;
}

function setPicture () {
  const random =getRandomPositiveInteger(0,5);
  const pictursArray = [];

  for (let i=0;i<random;i++){
    const pictureObject = {};
    pictureObject.src= setPictureSrc();
    pictureObject.description= setDescription();
    pictursArray.push(pictureObject);

  }
  return pictursArray;
}


export {setCityName,setDescription,setPicture};
