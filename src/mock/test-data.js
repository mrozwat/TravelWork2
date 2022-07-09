import { setType } from './type';
import { endDate,startDate } from './date';
import { setCityName,setDescription,setPicture} from './destination';
import { getRandomPositiveInteger } from '../util/util';
import { setTestOffers } from './offers';
import {nanoid} from 'nanoid';
const dayjs = require('dayjs');


function getTestPoint (){
  const testPointArray =[];
  const random = getRandomPositiveInteger(0,2);
  for (let i=0;i<random;i++){
    const pointTest ={
      'id': nanoid(),
      'type': setType(),
      'date_from': startDate(),
      'date_to': endDate(),
      'destination': {
        'name': setCityName(),
        'description': setDescription(),
        'pictures': setPicture()
      },
      'base_price': getRandomPositiveInteger(1,1000),
      'is_favorite': Boolean(getRandomPositiveInteger(0,1)),
      'offers': setTestOffers()
    };
    testPointArray.push(pointTest);
  }
  return testPointArray;
}


const rawTestData = getTestPoint();

const testData = rawTestData.slice().sort((a, b) => b.date_from - a.date_from);//sort fo date

//add new key to data with value
testData.forEach((element) =>{
  const a=dayjs(element.date_from);
  const b =dayjs(element.date_to);
  element.diferent=b.diff(a,'minute');
});


const offersList = [
  {
    'type': 'taxi',
    'offers': [
      {
        'id': 1,
        'title': 'Upgrade to a business class',
        'price': 190
      },
      {
        'id': 2,
        'title': 'Choose the radio station',
        'price': 30
      },
      {
        'id': 3,
        'title': 'Choose temperature',
        'price': 170
      },
      {
        'id': 4,
        'title': 'Drive quickly, I\'m in a hurry',
        'price': 100
      },
      {
        'id': 5,
        'title': 'Drive slowly',
        'price': 110
      }
    ]
  },
  {
    'type': 'bus',
    'offers': [
      {
        'id': 1,
        'title': 'Infotainment system',
        'price': 50
      },
      {
        'id': 2,
        'title': 'Order meal',
        'price': 100
      },
      {
        'id': 3,
        'title': 'Choose seats',
        'price': 190
      }
    ]
  },
  {
    'type': 'train',
    'offers': [
      {
        'id': 1,
        'title': 'Book a taxi at the arrival point',
        'price': 110
      },
      {
        'id': 2,
        'title': 'Order a breakfast',
        'price': 80
      },
      {
        'id': 3,
        'title': 'Wake up at a certain time',
        'price': 140
      }
    ]
  },
  {
    'type': 'flight',
    'offers': [
      {
        'id': 1,
        'title': 'Choose meal',
        'price': 120
      },
      {
        'id': 2,
        'title': 'Choose seats',
        'price': 90
      },
      {
        'id': 3,
        'title': 'Upgrade to comfort class',
        'price': 120
      },
      {
        'id': 4,
        'title': 'Upgrade to business class',
        'price': 120
      },
      {
        'id': 5,
        'title': 'Add luggage',
        'price': 170
      },
      {
        'id': 6,
        'title': 'Business lounge',
        'price': 160
      }
    ]
  },
  {
    'type': 'check-in',
    'offers': [
      {
        'id': 1,
        'title': 'Choose the time of check-in',
        'price': 70
      },
      {
        'id': 2,
        'title': 'Choose the time of check-out',
        'price': 190
      },
      {
        'id': 3,
        'title': 'Add breakfast',
        'price': 110
      },
      {
        'id': 4,
        'title': 'Laundry',
        'price': 140
      },
      {
        'id': 5,
        'title': 'Order a meal from the restaurant',
        'price': 30
      }
    ]
  },
  {
    'type': 'sightseeing',
    'offers': []
  },
  {
    'type': 'ship',
    'offers': [
      {
        'id': 1,
        'title': 'Choose meal',
        'price': 130
      },
      {
        'id': 2,
        'title': 'Choose seats',
        'price': 160
      },
      {
        'id': 3,
        'title': 'Upgrade to comfort class',
        'price': 170
      },
      {
        'id': 4,
        'title': 'Upgrade to business class',
        'price': 150
      },
      {
        'id': 5,
        'title': 'Add luggage',
        'price': 100
      },
      {
        'id': 6,
        'title': 'Business lounge',
        'price': 40
      }
    ]
  },
  {
    'type': 'drive',
    'offers': [
      {
        'id': 1,
        'title': 'With automatic transmission',
        'price': 110
      },
      {
        'id': 2,
        'title': 'With air conditioning',
        'price': 180
      }
    ]
  },
  {
    'type': 'restaurant',
    'offers': [
      {
        'id': 1,
        'title': 'Choose live music',
        'price': 150
      },
      {
        'id': 2,
        'title': 'Choose VIP area',
        'price': 70
      }
    ]
  }
];

const descriptionList = [
  {
    'name': 'Chamonix',
    'description': 'Chamonix, in a middle of Europe.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.5904004599518997',
        'description': 'Chamonix zoo'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.6100557444727261',
        'description': 'Chamonix city centre'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.3439178101267286',
        'description': 'Chamonix kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.6510932361238344',
        'description': 'Chamonix kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.7815320832980994',
        'description': 'Chamonix city centre'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.012699504176185261',
        'description': 'Chamonix zoo'
      }
    ]
  },
  {
    'name': 'Geneva',
    'description': 'Geneva, in a middle of Europe, with a beautiful old town, with an embankment of a mighty river as a centre of attraction, full of of cozy canteens where you can try the best coffee in the Middle East, a perfect place to stay with a family, famous for its crowded street markets with the best street food in Asia.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.6459729979544748',
        'description': 'Geneva central station'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.8461821217969752',
        'description': 'Geneva zoo'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.5357350024567598',
        'description': 'Geneva embankment'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.11164930013296437',
        'description': 'Geneva kindergarten'
      }
    ]
  },
  {
    'name': 'Amsterdam',
    'description': 'Amsterdam, a true asian pearl, with a beautiful old town, full of of cozy canteens where you can try the best coffee in the Middle East, a perfect place to stay with a family.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.34790911022609206',
        'description': 'Amsterdam kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.5259778813958993',
        'description': 'Amsterdam parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.5527916314836065',
        'description': 'Amsterdam parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.3618517187918511',
        'description': 'Amsterdam zoo'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.953311076024087',
        'description': 'Amsterdam street market'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.243413705269919',
        'description': 'Amsterdam kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.2963278206621287',
        'description': 'Amsterdam street market'
      }
    ]
  },
  {
    'name': 'Helsinki',
    'description': 'Helsinki, with crowded streets.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.5050412672105706',
        'description': 'Helsinki city centre'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.11522096676749127',
        'description': 'Helsinki parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.8211187914980005',
        'description': 'Helsinki street market'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.6250724579611167',
        'description': 'Helsinki kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.8688339386972201',
        'description': 'Helsinki embankment'
      }
    ]
  },
  {
    'name': 'Oslo',
    'description': 'Oslo, is a beautiful city, a true asian pearl, famous for its crowded street markets with the best street food in Asia.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.4075451660488858',
        'description': 'Oslo central station'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.40128385572883274',
        'description': 'Oslo park'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.533428746980066',
        'description': 'Oslo biggest supermarket'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.03698261306057926',
        'description': 'Oslo zoo'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.7706836299069895',
        'description': 'Oslo street market'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.435249184435176',
        'description': 'Oslo street market'
      }
    ]
  },
  {
    'name': 'Kopenhagen',
    'description': 'Kopenhagen, is a beautiful city.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.3620349082171139',
        'description': 'Kopenhagen biggest supermarket'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.3158071369338602',
        'description': 'Kopenhagen park'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.6745564267263313',
        'description': 'Kopenhagen central station'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.9636146184606253',
        'description': 'Kopenhagen biggest supermarket'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.812834628423577',
        'description': 'Kopenhagen central station'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.4796575711824185',
        'description': 'Kopenhagen biggest supermarket'
      }
    ]
  },
  {
    'name': 'Den Haag',
    'description': 'Den Haag, with a beautiful old town, for those who value comfort and coziness, with an embankment of a mighty river as a centre of attraction.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.36085752720835074',
        'description': 'Den Haag park'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.25335691364622925',
        'description': 'Den Haag parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.5904614315456322',
        'description': 'Den Haag central station'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.49707219238142497',
        'description': 'Den Haag park'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.98489986976521',
        'description': 'Den Haag zoo'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.7293087238864302',
        'description': 'Den Haag central station'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.09169748327005589',
        'description': 'Den Haag city centre'
      }
    ]
  },
  {
    'name': 'Rotterdam',
    'description': 'Rotterdam, with crowded streets, in a middle of Europe.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.6370053094226431',
        'description': 'Rotterdam kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.6812757472190154',
        'description': 'Rotterdam zoo'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.6486973608012889',
        'description': 'Rotterdam zoo'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.16027698950779423',
        'description': 'Rotterdam zoo'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.029043922441216674',
        'description': 'Rotterdam park'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.6232740713023601',
        'description': 'Rotterdam biggest supermarket'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.38256425513980785',
        'description': 'Rotterdam parliament building'
      }
    ]
  },
  {
    'name': 'Saint Petersburg',
    'description': 'Saint Petersburg, a true asian pearl, for those who value comfort and coziness.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.7841913445193018',
        'description': 'Saint Petersburg park'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.6813029021782877',
        'description': 'Saint Petersburg kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.3642809814058967',
        'description': 'Saint Petersburg street market'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.3048580189922372',
        'description': 'Saint Petersburg biggest supermarket'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.8422875188005201',
        'description': 'Saint Petersburg zoo'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.7493628330114628',
        'description': 'Saint Petersburg biggest supermarket'
      }
    ]
  },
  {
    'name': 'Moscow',
    'description': 'Moscow, is a beautiful city.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.3937962398280712',
        'description': 'Moscow city centre'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.34785427819482373',
        'description': 'Moscow city centre'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.727150672182953',
        'description': 'Moscow park'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.13870565126837908',
        'description': 'Moscow city centre'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.5326591291871356',
        'description': 'Moscow central station'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.7019445211755426',
        'description': 'Moscow park'
      }
    ]
  },
  {
    'name': 'Sochi',
    'description': 'Sochi, with a beautiful old town, middle-eastern paradise, for those who value comfort and coziness.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.4903791732584708',
        'description': 'Sochi kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.4356597229678183',
        'description': 'Sochi park'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.6599225319612807',
        'description': 'Sochi biggest supermarket'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.8484578761028478',
        'description': 'Sochi park'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.27044050069228653',
        'description': 'Sochi city centre'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.2532890439460187',
        'description': 'Sochi park'
      }
    ]
  },
  {
    'name': 'Tokio',
    'description': 'Tokio, for those who value comfort and coziness.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.2541609088249872',
        'description': 'Tokio parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.3566969908595765',
        'description': 'Tokio biggest supermarket'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.5428255898860372',
        'description': 'Tokio kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.6277829971861639',
        'description': 'Tokio kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.06932236256779678',
        'description': 'Tokio street market'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.2610348860491243',
        'description': 'Tokio kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.8732102571655826',
        'description': 'Tokio parliament building'
      }
    ]
  },
  {
    'name': 'Kioto',
    'description': 'Kioto, a true asian pearl, with crowded streets, middle-eastern paradise, full of of cozy canteens where you can try the best coffee in the Middle East.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.6813147323216977',
        'description': 'Kioto street market'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.4462723778833191',
        'description': 'Kioto biggest supermarket'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.9861734549643588',
        'description': 'Kioto biggest supermarket'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.1053163853696073',
        'description': 'Kioto kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.4241964714771944',
        'description': 'Kioto city centre'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.010439344414400642',
        'description': 'Kioto street market'
      }
    ]
  },
  {
    'name': 'Nagasaki',
    'description': 'Nagasaki, is a beautiful city, a true asian pearl, full of of cozy canteens where you can try the best coffee in the Middle East.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.49383229067822976',
        'description': 'Nagasaki embankment'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.17590539201977395',
        'description': 'Nagasaki city centre'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.46770615119564374',
        'description': 'Nagasaki parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.06161631431820114',
        'description': 'Nagasaki central station'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.6284134710150862',
        'description': 'Nagasaki biggest supermarket'
      }
    ]
  },
  {
    'name': 'Hiroshima',
    'description': 'Hiroshima, middle-eastern paradise, for those who value comfort and coziness, with an embankment of a mighty river as a centre of attraction, full of of cozy canteens where you can try the best coffee in the Middle East, famous for its crowded street markets with the best street food in Asia.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.9432761000236614',
        'description': 'Hiroshima embankment'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.5883568174886578',
        'description': 'Hiroshima parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.08223621175775708',
        'description': 'Hiroshima zoo'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.3532546528334972',
        'description': 'Hiroshima park'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.9195509237018109',
        'description': 'Hiroshima central station'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.8364111038072146',
        'description': 'Hiroshima park'
      }
    ]
  },
  {
    'name': 'Berlin',
    'description': 'Berlin, is a beautiful city, in a middle of Europe, a perfect place to stay with a family.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.3053640370152093',
        'description': 'Berlin park'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.75853066327381',
        'description': 'Berlin biggest supermarket'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.9119720284918758',
        'description': 'Berlin kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.80437179878653',
        'description': 'Berlin embankment'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.6818553448601483',
        'description': 'Berlin street market'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.4833009300795825',
        'description': 'Berlin biggest supermarket'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.4809993408790332',
        'description': 'Berlin street market'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.3122448422328856',
        'description': 'Berlin street market'
      }
    ]
  },
  {
    'name': 'Munich',
    'description': 'Munich, is a beautiful city.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.9785537128389394',
        'description': 'Munich central station'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.33790844092603467',
        'description': 'Munich embankment'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.7813639301347866',
        'description': 'Munich embankment'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.23372181861772767',
        'description': 'Munich kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.5512902428430315',
        'description': 'Munich embankment'
      }
    ]
  },
  {
    'name': 'Frankfurt',
    'description': 'Frankfurt, in a middle of Europe, middle-eastern paradise, for those who value comfort and coziness, a perfect place to stay with a family.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.21561567312764107',
        'description': 'Frankfurt kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.7832067797199136',
        'description': 'Frankfurt kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.2188561464071883',
        'description': 'Frankfurt biggest supermarket'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.9527034524896525',
        'description': 'Frankfurt zoo'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.4635743907082883',
        'description': 'Frankfurt embankment'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.18386543732209248',
        'description': 'Frankfurt street market'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.08153630454594496',
        'description': 'Frankfurt street market'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.4295422894030472',
        'description': 'Frankfurt central station'
      }
    ]
  },
  {
    'name': 'Vien',
    'description': 'Vien, is a beautiful city, in a middle of Europe, a perfect place to stay with a family, famous for its crowded street markets with the best street food in Asia.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.685023630552815',
        'description': 'Vien street market'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.0775969750917711',
        'description': 'Vien biggest supermarket'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.06635018772997636',
        'description': 'Vien city centre'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.4150658487729042',
        'description': 'Vien city centre'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.6011481332709696',
        'description': 'Vien parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.6400553340518069',
        'description': 'Vien parliament building'
      }
    ]
  },
  {
    'name': 'Rome',
    'description': 'Rome, a true asian pearl, famous for its crowded street markets with the best street food in Asia.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.3415392710213121',
        'description': 'Rome park'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.85779278090234',
        'description': 'Rome central station'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.7301403574215828',
        'description': 'Rome central station'
      }
    ]
  },
  {
    'name': 'Naples',
    'description': 'Naples, is a beautiful city, a true asian pearl, in a middle of Europe, with an embankment of a mighty river as a centre of attraction.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.016368300618168075',
        'description': 'Naples kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.0975393684136241',
        'description': 'Naples biggest supermarket'
      }
    ]
  },
  {
    'name': 'Venice',
    'description': 'Venice, a true asian pearl, in a middle of Europe, for those who value comfort and coziness, famous for its crowded street markets with the best street food in Asia.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.9950293752310233',
        'description': 'Venice park'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.8607293590994036',
        'description': 'Venice street market'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.8762069482973214',
        'description': 'Venice park'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.45990637235089404',
        'description': 'Venice kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.005272257344293152',
        'description': 'Venice parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.018220857186825645',
        'description': 'Venice embankment'
      }
    ]
  },
  {
    'name': 'Milan',
    'description': 'Milan, a true asian pearl, with crowded streets, in a middle of Europe, for those who value comfort and coziness, famous for its crowded street markets with the best street food in Asia.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.823551560920537',
        'description': 'Milan park'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.42495980938198774',
        'description': 'Milan street market'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.672382827448448',
        'description': 'Milan kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.46838874505572514',
        'description': 'Milan biggest supermarket'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.07781189015027978',
        'description': 'Milan kindergarten'
      }
    ]
  },
  {
    'name': 'Monaco',
    'description': 'Monaco, in a middle of Europe, middle-eastern paradise, for those who value comfort and coziness.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.5380754790683546',
        'description': 'Monaco central station'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.06629768004379355',
        'description': 'Monaco parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.2898623630110586',
        'description': 'Monaco parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.23526440437671914',
        'description': 'Monaco central station'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.7873317020123931',
        'description': 'Monaco embankment'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.8546578956653414',
        'description': 'Monaco central station'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.9825974730032458',
        'description': 'Monaco biggest supermarket'
      }
    ]
  },
  {
    'name': 'Paris',
    'description': 'Paris, for those who value comfort and coziness.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.6304693932674565',
        'description': 'Paris central station'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.46101763954662855',
        'description': 'Paris embankment'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.19532246759896887',
        'description': 'Paris embankment'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.9173612220904588',
        'description': 'Paris parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.8861529041299989',
        'description': 'Paris parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.7037131755365202',
        'description': 'Paris park'
      }
    ]
  },
  {
    'name': 'Barcelona',
    'description': 'Barcelona, with crowded streets, middle-eastern paradise.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.8333821079728512',
        'description': 'Barcelona embankment'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.8158244664255554',
        'description': 'Barcelona embankment'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.36341590604225615',
        'description': 'Barcelona kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.053783929440172296',
        'description': 'Barcelona kindergarten'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.9518584421794221',
        'description': 'Barcelona zoo'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.8206448884528699',
        'description': 'Barcelona zoo'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.4482075587172576',
        'description': 'Barcelona central station'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.048894244555859334',
        'description': 'Barcelona biggest supermarket'
      }
    ]
  },
  {
    'name': 'Valencia',
    'description': 'Valencia, is a beautiful city, in a middle of Europe, with a beautiful old town, middle-eastern paradise.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.8930903728096695',
        'description': 'Valencia park'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.001347470267120121',
        'description': 'Valencia park'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.6047396478478471',
        'description': 'Valencia central station'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.3159172044679477',
        'description': 'Valencia park'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.3760103175212035',
        'description': 'Valencia street market'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.27523082170143587',
        'description': 'Valencia zoo'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.197190020700456',
        'description': 'Valencia embankment'
      }
    ]
  },
  {
    'name': 'Madrid',
    'description': 'Madrid, a true asian pearl, in a middle of Europe.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.8343782569685503',
        'description': 'Madrid central station'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.355800765531602',
        'description': 'Madrid city centre'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.33245246284368335',
        'description': 'Madrid embankment'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.09172154445558411',
        'description': 'Madrid zoo'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.7327907016387414',
        'description': 'Madrid street market'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.09154178554665404',
        'description': 'Madrid park'
      }
    ]
  }
];

export {testData,offersList,descriptionList};
