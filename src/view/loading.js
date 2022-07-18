import AbstractElement from './abstract_view';

const createNoTaskTemplate  = ()=>'<p class="trip-events__msg">Loading...</p>';

export default class LoadingView extends AbstractElement {
  get template() {
    return createNoTaskTemplate();
  }
}
