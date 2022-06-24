const RenderPosition ={
  BEFOREBEGIN:'beforebegin',
  AFTERBEGIN:'afterbegin',
  BEFOREEND:'beforeend',
  AFTEREND:'afterend',
};

//contaner,html,position
function render (contaner, html,position){
  contaner.insertAdjacentHTML(position,html);
}
export {render,RenderPosition};
