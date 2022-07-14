import AbstractObservable from './abstcractObserver';
import { FilterType } from '../util/util';

export default class FilterModel extends AbstractObservable {
    #filter = FilterType.ALL;

    get filter() {
      return this.#filter;
    }

    setFilter = (updateType, filter) => {
      this.#filter = filter;
      this._notify(updateType, filter);
    }
}
