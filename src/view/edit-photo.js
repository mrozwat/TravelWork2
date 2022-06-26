import {testData} from '../mock/test-data.js'

function editPhoto(i) {
    let imgHtml =``;
    for (let j=0; j<testData[i].destination.pictures.length;j++){
    
         imgHtml += `<img class="event__photo" src="${testData[i].destination.pictures[j].src}" alt="${testData[i].destination.pictures[j].description}"></img>`;
    
}
return imgHtml;
};

export {editPhoto}