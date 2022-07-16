import AbstractElement from '../view/abstract_view';
const dayjs = require('dayjs');

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

// const updateItem = (items, update) => {
//   const index = items.findIndex((item) => item.id === update.id);

//   if (index === -1) {
//     return items;
//   }

//   return [
//     ...items.slice(0, index),
//     update,
//     ...items.slice(index + 1),
//   ];
// };

const replace = (newElement, oldElement) => {
  if (newElement === null || oldElement === null) {
    throw new Error('Can\'t replace unexisting elements');
  }

  const newChild = newElement instanceof AbstractElement ? newElement.element : newElement;
  const oldChild = oldElement instanceof AbstractElement ? oldElement.element : oldElement;

  const parent = oldChild.parentElement;

  if (parent === null) {
    throw new Error('Parent element doesn\'t exist');
  }

  parent.replaceChild(newChild, oldChild);
};

const sortType = {
  DAY: 'DAY',
  DIFERENT: 'DIFERENT',
  PRICE: 'PRICE',
};


export const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT',
};

export const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
};

const remove = (component) => {
  if (component === null) {
    return;
  }

  if (!(component instanceof AbstractElement)) {
    throw new Error('Can remove only components');
  }

  component.element.remove();
  component.removeElement();
};

const FilterType = {
  ALL: 'all',
  FUTURE: 'future',
  PAST: 'past',
};

const MenuItem = {
  POINTS: 'points',
  STATISTICS: 'STATISTICS',
};

export {getRandomPositiveInteger,replace,sortType,remove,FilterType,MenuItem};
