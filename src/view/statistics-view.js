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

  init =()=>{this.#setCharts()}

  removeElement = () => {
    super.removeElement();


  }


  #setCharts = () => {
    const moneyCtx =document.querySelector('#money');
    console.log(moneyCtx);
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
        labels: ['FLY', 'STAY', 'DRIVE', 'LOOK',
          'RIDE'],
        datasets: [{
          data: [400, 300, 200, 160 , 100],
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
        labels: ['FLY', 'DRIVE', 'RIDE'],
        datasets: [{
          data: [4, 2, 1],
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
