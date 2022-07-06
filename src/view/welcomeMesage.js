import AbstractElement from "./abstract_view";


export default class welcomeMesage  extends AbstractElement{
  #element = null;

  get template () { return welcomeMesageHtml();}

}


function welcomeMesageHtml (){
  return '<p class="trip-events__msg">Click New Event to create your point</p>' ;
}
