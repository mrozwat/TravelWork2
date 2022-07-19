import AbstractObservable from './abstcractObserver';
import { UpdateType } from '../util/util';
const dayjs = require('dayjs');
import { offersList,descriptionList } from '../mock/test-data.js';

export default class PointModel extends AbstractObservable {

    #points = [];//sdelati prosto masiv
    #apiService = null;
    #descriptionList=descriptionList;
    constructor(apiService) {
      super();
      this.#apiService = apiService;


    }

    #adaptToClient = (point) => {

      const adaptedTask = {...point,
        date_from: point['date_from'] !== null ? new Date(point['date_from']) : point['date_from'], // На клиенте дата хранится как экземпляр Date
        date_to: point['date_to'] !== null ? new Date(point['date_to']) : point['date_to'],
      };


      return adaptedTask;
    }


    init = async () => {
      try {
        const points = await this.#apiService.points;
        this.#points = points.map(this.#adaptToClient);
      } catch(err) {
        this.#points = [];
      }

      this._notify(UpdateType.INIT);
    }


    get points() {
      this.#points.forEach((element) =>{
        const a=dayjs(element.date_from);
        const b =dayjs(element.date_to);
        element.diferent=b.diff(a,'minute');
      });
      return this.#points;
    }

    updateTask = async(updateType, update) => {
      const index = this.#points.findIndex((point) => point.id === update.id);
      if (index === -1) {
        throw new Error('Can\'t update unexisting task');
      }

      try {

        const response = await this.#apiService.updateTask(this.#apiService.adaptToServer(update));

        const updatedTask = this.#adaptToClient(response);
        this.#points = [
          ...this.#points.slice(0, index),
          updatedTask,
          ...this.#points.slice(index + 1),
        ];
        this._notify(updateType, updatedTask);
        console.log(updatedTask);
      } catch(err) {
        throw new Error('Can\'t update task');
      }
    }

    addTask = async (updateType, update) => {
      try {
        const response = await this.#apiService.addPoint(update);
        const newPoint = this.#adaptToClient(response);
        this.#points = [newPoint, ...this.#points];
        this._notify(updateType, newPoint);
      } catch(err) {
        throw new Error('Can\'t add task');}
    }


    deleteTask = async(updateType, update) => {
      const index = this.#points.findIndex((task) => task.id === update.id);
      console.log(updateType)
      console.log(update)
      if (index === -1) {
        throw new Error('Can\'t delete unexisting task');
      }

      try {
        // Обратите внимание, метод удаления задачи на сервере
        // ничего не возвращает. Это и верно,
        // ведь что можно вернуть при удалении задачи?
        await this.#apiService.deleteTask(update);
        console.log('error')
        this.#points = [
          ...this.#points.slice(0, index),
          ...this.#points.slice(index + 1),
        ];
        this._notify(updateType);
      } catch(err) {
        throw new Error('Can\'t delete task');
      }
    };
}
