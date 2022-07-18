import dayjs from 'dayjs';
import flatpickr from 'flatpickr';
import AbstractSmartView from './abstract-smart-view.js';
import '../../node_modules/flatpickr/dist/flatpickr.min.css';
import Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

function createStatisticsTemplate (){ return`<section class="statistics">
<h2 class="visually-hidden">Trip statistics</h2>



<div class="statistics__item">
  <canvas class="statistics__chart" id="money" width="900"></canvas>
</div>

<div class="statistics__item">
  <canvas class="statistics__chart" id="type" width="900"></canvas>
</div>

<div class="statistics__item">
  <canvas class="statistics__chart" id="time" width="900"></canvas>
</div>
</section>
`;}

export default class StatisticsView extends AbstractSmartView {
  #datepicker = null;

  constructor(points) {
    super();
    this._data = points;
  }

  get template() {
    return createStatisticsTemplate(this._data);
  }

  init =()=>{
    const moneyChartData = this.#dataForMoney();
    const typeCyrent=  this.#dataFortypeChart();
    this.#setCharts(moneyChartData,typeCyrent);}

  removeElement = () => {
    super.removeElement();


  }

  #dataForMoney =() =>{
console.log(this._data)
    const FlightData= [];
    this._data.forEach((element) => {
      if (element.type ==='Flight')
      {FlightData.push(element.base_price);}
    });
    let moneyResult = FlightData.reduce((sum, elem) => sum + elem, 0);
    console.log(FlightData)
    console.log(moneyResult)

    const StayData= [];
    this._data.forEach((element) => {
      if (element.type ==='Check-in')
      {StayData.push(element.base_price);}
    });
    let stayResult = StayData.reduce((sum, elem) => sum + elem, 0);

    const driveData= [];
    this._data.forEach((element) => {
      if (element.type ==='Drive')
      {driveData.push(element.base_price);}
    });
    let driveResult = driveData.reduce((sum, elem) => sum + elem, 0);

    const rideData= [];
    this._data.forEach((element) => {
      if (element.type ==='Train')
      {rideData.push(element.base_price);}
    });
    let rideResult = rideData.reduce((sum, elem) => sum + elem, 0);


    const TaxiData= [];
    this._data.forEach((element) => {
      if (element.type ==='Taxi')
      {TaxiData.push(element.base_price);}
    });
    let taxiResult = TaxiData.reduce((sum, elem) => sum + elem, 0);

    const BusData= [];
    this._data.forEach((element) => {
      if (element.type ==='Bus')
      {BusData.push(element.base_price);}
    });
    let busResult = BusData.reduce((sum, elem) => sum + elem, 0);

    const shipData= [];
    this._data.forEach((element) => {
      if (element.type ==='Ship')
      {shipData.push(element.base_price);}
    });
    let shipResult = shipData.reduce((sum, elem) => sum + elem, 0);

    const lookData= [];
    this._data.forEach((element) => {
      if (element.type ==='Sightseeing')
      {lookData.push(element.base_price);}
    });
    let lookResult = lookData.reduce((sum, elem) => sum + elem, 0);

    const restoranData= [];
    this._data.forEach((element) => {
      if (element.type ==='Restaurant')
      {restoranData.push(element.base_price);}
    });
    let restoranResult = restoranData.reduce((sum, elem) => sum + elem, 0);


    let finalyStats =[moneyResult,stayResult,driveResult,rideResult,taxiResult,busResult,shipResult,lookResult,restoranResult];
    return finalyStats;
  }

 #dataFortypeChart =()=>{
   const FlightData= [];
   this._data.forEach((element) => {
     if (element.type ==='Flight')
     {FlightData.push(1);}
   });
   const moneyResult = FlightData.reduce((sum, elem) => sum + elem, 0);

   const StayData= [];
   this._data.forEach((element) => {
     if (element.type ==='Check-in')
     {StayData.push(1);}
   });
   const stayResult = StayData.reduce((sum, elem) => sum + elem, 0);

   const driveData= [];
   this._data.forEach((element) => {
     if (element.type ==='Drive')
     {driveData.push(1);}
   });
   const driveResult = driveData.reduce((sum, elem) => sum + elem, 0);

   const rideData= [];
   this._data.forEach((element) => {
     if (element.type ==='Train')
     {rideData.push(1);}
   });
   const rideResult = rideData.reduce((sum, elem) => sum + elem, 0);


   const TaxiData= [];
   this._data.forEach((element) => {
     if (element.type ==='Taxi')
     {TaxiData.push(1);}
   });
   const taxiResult = TaxiData.reduce((sum, elem) => sum + elem, 0);

   const BusData= [];
   this._data.forEach((element) => {
     if (element.type ==='Bus')
     {BusData.push(1);}
   });
   const busResult = BusData.reduce((sum, elem) => sum + elem, 0);

   const shipData= [];
   this._data.forEach((element) => {
     if (element.type ==='Ship')
     {shipData.push(1);}
   });
   const shipResult = shipData.reduce((sum, elem) => sum + elem, 0);

   const lookData= [];
   this._data.forEach((element) => {
     if (element.type ==='Sightseeing')
     {lookData.push(1);}
   });
   const lookResult = lookData.reduce((sum, elem) => sum + elem, 0);

   const restoranData= [];
   this._data.forEach((element) => {
     if (element.type ==='Restaurant')
     {restoranData.push(1);}
   });
   const restoranResult = restoranData.reduce((sum, elem) => sum + elem, 0);


   const finalyStats =[moneyResult,stayResult,driveResult,rideResult,taxiResult,busResult,shipResult,lookResult,restoranResult];
   return finalyStats;
 }

  #setCharts = (moneyChartData,typeCyrent) => {
    const moneyCtx =document.querySelector('#money');
    const transportCtx =document.querySelector('#type');
    const timeSpendCtx =document.querySelector('#time');
    // Рассчитаем высоту канваса в зависимости от того, сколько данных в него будет передаваться
    const BAR_HEIGHT = 55;
    moneyCtx.width = BAR_HEIGHT * 6;
    transportCtx.width = BAR_HEIGHT * 4;
    timeSpendCtx.width = BAR_HEIGHT * 4;

    
    const moneyChart = new Chart(moneyCtx, {
      plugins: [ChartDataLabels],
      type: 'horizontalBar',
      data: {
        labels: ['Flight', 'Check-in', 'Drive', 'Train',
          'Taxi','Bus','Ship','Sightseeing','Restaurant'],
        datasets: [{
          data: [...moneyChartData],
          backgroundColor: '#ffffff',
          hoverBackgroundColor: '#ffffff',
          anchor: 'start'
        }]
      },
      options: {
        plugins: {
          datalabels: {
            font: {
              size: 13
            },
            color: '#000000',
            anchor: 'end',
            align: 'start',
            formatter: (val) => `€ ${val}`
          }
        },
        title: {
          display: true,
          text: 'MONEY',
          fontColor: '#000000',
          fontSize: 23,
          position: 'left'
        },
        scales: {
          yAxes: [{
            ticks: {
              fontColor: '#000000',
              padding: 5,
              fontSize: 13,
            },
            gridLines: {
              display: false,
              drawBorder: false
            },
            barThickness: 44,
          }],
          xAxes: [{
            ticks: {
              display: false,
              beginAtZero: true,
            },
            gridLines: {
              display: false,
              drawBorder: false
            },
            minBarLength: 50
          }],
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: false,
        }
      }
    });

   
    const transportChart = new Chart(transportCtx, {
      plugins: [ChartDataLabels],
      type: 'horizontalBar',
      data: {
        labels: ['Flight', 'Check-in', 'Drive', 'Train',
          'Taxi','Bus','Ship','Sightseeing','Restaurant'],
        datasets: [{
          data: [...typeCyrent],
          backgroundColor: '#ffffff',
          hoverBackgroundColor: '#ffffff',
          anchor: 'start'
        }]
      },
      options: {
        plugins: {
          datalabels: {
            font: {
              size: 13
            },
            color: '#000000',
            anchor: 'end',
            align: 'start',
            formatter: (val) => `${val}x`
          }
        },
        title: {
          display: true,
          text: 'TRANSPORT',
          fontColor: '#000000',
          fontSize: 23,
          position: 'left'
        },
        scales: {
          yAxes: [{
            ticks: {
              fontColor: '#000000',
              padding: 5,
              fontSize: 13,
            },
            gridLines: {
              display: false,
              drawBorder: false
            },
            barThickness: 44,
          }],
          xAxes: [{
            ticks: {
              display: false,
              beginAtZero: true,
            },
            gridLines: {
              display: false,
              drawBorder: false
            },
            minBarLength: 50
          }],
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: false,
        }
      }
    });
  }
}
