import AbstractObservable from './abstcractObserver';
import { testData } from '../mock/test-data.js';
const data =testData;
const dayjs = require('dayjs');
console.log(data);

export default class PointModel extends AbstractObservable {
    #points = [...data];//sdelati prosto masiv

    set points(points) {
      this.#points = [...points];
    }

    get points() {
      this.#points.forEach((element) =>{
        const a=dayjs(element.date_from);
        const b =dayjs(element.date_to);
        element.diferent=b.diff(a,'minute');
      });
      return this.#points;
    }

    updateTask = (updateType, update) => {
      const index = this.#points.findIndex((task) => task.id === update.id);

      if (index === -1) {
        throw new Error('Can\'t update unexisting task');
      }
      this.#points = [
        ...this.#points.slice(0, index),
        update,
        ...this.#points.slice(index + 1),
      ];
      this._notify(updateType, update);
    }

    addTask = (updateType, update) => {
      this.#points = [
        update,
        ...this.#points,
      ];

      this._notify(updateType, update);
    }

    deleteTask = (updateType, update) => {
      const index = this.#points.findIndex((task) => task.id === update.id);

      if (index === -1) {
        throw new Error('Can\'t delete unexisting task');
      }

      this.#points = [
        ...this.#points.slice(0, index),
        ...this.#points.slice(index + 1),
      ];

      this._notify(updateType);
    }
}

