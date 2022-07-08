function offerType (data){
  let Taxi = '';
  let Bus = '';
  let Train = '';
  let Ship = '';
  let Drive = '';
  let Flight = '';
  let Checkin = '';
  let Sightseeing = '';
  let Restaurant = '';
  switch (data.type){
    case 'Taxi':  Taxi = 'checked';Bus = '';Train = '';Ship = '';Drive = '';Flight = '';Checkin = '';Sightseeing = '';Restaurant = '';  break;
    case 'Bus':  Bus = 'checked';Taxi = '';Train = '';Ship = '';Drive = '';Flight = '';Checkin = '';Sightseeing = '';Restaurant = ''; break;
    case 'Train':  Train = 'checked';Taxi = '';Bus = '';Ship = '';Drive = '';Flight = '';Checkin = '';Sightseeing = '';Restaurant = ''; break;
    case 'Ship':  Ship = 'checked'; Taxi = '';Bus = '';Train = '';Drive = '';Flight = '';Checkin = '';Sightseeing = '';Restaurant = '';break;
    case 'Drive':  Drive = 'checked'; Taxi = '';Bus = '';Train = '';Ship = '';Flight = '';Checkin = '';Sightseeing = '';Restaurant = '';break;
    case 'Flight':  Flight = 'checked';Taxi = '';Bus = '';Train = '';Ship = '';Drive = '';Checkin = '';Sightseeing = '';Restaurant = ''; break;
    case 'Check-in':  Checkin = 'checked';Taxi = '';Bus = '';Train = '';Ship = '';Drive = '';Flight = '';Sightseeing = '';Restaurant = ''; break;
    case 'Sightseeing':  Sightseeing = 'checked';Taxi = '';Bus = '';Train = '';Ship = '';Drive = '';Flight = '';Checkin = '';Restaurant = ''; break;
    case 'Restaurant':  Restaurant = 'checked'; Taxi = '';Bus = '';Train = '';Ship = '';Drive = '';Flight = '';Checkin = '';Sightseeing = '';break;
  }


  const offerHtml = `<fieldset class="event__type-group">
    <legend class="visually-hidden">Event type</legend>

    <div class="event__type-item">
      <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi"${Taxi}>
      <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
    </div>

    <div class="event__type-item">
      <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus"${Bus}>
      <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
    </div>

    <div class="event__type-item">
      <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train"${Train}>
      <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
    </div>

    <div class="event__type-item">
      <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship"${Ship}>
      <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
    </div>

    <div class="event__type-item">
      <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive" ${Drive}>
      <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
    </div>

    <div class="event__type-item">
      <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" ${Flight}>
      <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
    </div>

    <div class="event__type-item">
      <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in" ${Checkin}>
      <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
    </div>

    <div class="event__type-item">
      <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing" ${Sightseeing}>
      <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
    </div>

    <div class="event__type-item">
      <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant"${Restaurant}>
      <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
    </div>
  </fieldset>`;

  return offerHtml;
}


export{offerType};
