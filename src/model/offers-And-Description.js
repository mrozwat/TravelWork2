
const offersUrl = 'https://16.ecmascript.pages.academy/big-trip/offers';


const getOffers = (onSuccess, onError) =>() => fetch(
  offersUrl,{
    headers:{
      Authorization:'Basic er883jdzbdw'
    }})
  .then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(`${response.status} ${response.statusText}`);
  }).then((data) => {
    onSuccess(data);
  })
  .catch((err) => {
    onError(err);
  });

export{getOffers};
