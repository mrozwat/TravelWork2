import AbstractElement from './abstract_view';

export default class AbstractSmartView extends AbstractElement {
    _dataCondition = {};

    updateData = (update, justDataUpdating) => {
      if (!update) {
        return;
      }

      this._dataCondition = {...this._dataCondition, ...update};

      if (justDataUpdating) {
        return;
      }

      this.updateElement();
    }

    updateElement = () => {
      const prevElement = this.element;
      const parent = prevElement.parentElement;
      this.removeElement();

      const newElement = this.element;

      parent.replaceChild(newElement, prevElement);

      this.restoreHandlers();
    }

    restoreHandlers = () => {
      throw new Error('Abstract method not implemented: restoreHandlers');
    }
}
