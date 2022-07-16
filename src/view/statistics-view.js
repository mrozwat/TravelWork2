// import dayjs from 'dayjs';
// import flatpickr from 'flatpickr';
// import AbstractSmartView from './abstract-smart-view.js';
// import '../../node_modules/flatpickr/dist/flatpickr.min.css';
// import Chart from 'chart.js';

// const createStatisticsTemplate = () => `<section class="statistic">
// <div class="statistic__money"> </div>
// <div statistic__transport"> </div>
// <div class="statistic__time-spend"> </div>
// </section>`;

// export default class StatisticsView extends AbstractSmartView {
//   #datepicker = null;

//   constructor(points) {
//     super();
//     this._data = points;
//     this.#setCharts();
//   }

//   get template() {
//     return createStatisticsTemplate(this._data);
//   }

//   removeElement = () => {
//     super.removeElement();

//     if (this.#datepicker) {
//       this.#datepicker.destroy();
//       this.#datepicker = null;
//     }
//   }


//   restoreHandlers = () => {
//     this.#setCharts();
//     this.#setDatepicker();
//   }

//   #dateChangeHandler = ([dateFrom, dateTo]) => {
//     if (!dateFrom || !dateTo) {
//       return;
//     }

//     this.updateData({
//       dateFrom,
//       dateTo,
//     });
//   }

//   #setDatepicker = () => {
//     this.#datepicker = flatpickr(
//       this.element.querySelector('.statistic__period-input'),
//       {
//         mode: 'range',
//         dateFormat: 'j F',
//         defaultDate: [this._data.dateFrom, this._data.dateTo],
//         onChange: this.#dateChangeHandler,
//       },
//     );
//   }

//   // #setCharts = () => {
//   //   const moneyCtx =
//   //   document.querySelector('.statistic__money');
//   //   console.log(moneyCtx)
//   //   const transportCtx =
//   //   document.querySelector('.statistic__transport');
//   //   const timeSpendCtx =
//   //   document.querySelector('.statistic__time-spend');
//   //   // Рассчитаем высоту канваса в зависимости от того, сколько данных в него будет передаваться
//   //   const BAR_HEIGHT = 55;
//   //   moneyCtx.height = BAR_HEIGHT * 6;
//   //   transportCtx.height = BAR_HEIGHT * 4;
//   //   timeSpendCtx.height = BAR_HEIGHT * 4;

//   //   const moneyChart = new Chart(moneyCtx, {
//   //     plugins: [ChartDataLabels],
//   //     type: 'horizontalBar',
//   //     data: {
//   //       labels: ['FLY', 'STAY', 'DRIVE', 'LOOK',
//   //         'RIDE'],
//   //       datasets: [{
//   //         data: [400, 300, 200, 160 , 100],
//   //         backgroundColor: '#ffffff',
//   //         hoverBackgroundColor: '#ffffff',
//   //         anchor: 'start'
//   //       }]
//   //     },
//   //     options: {
//   //       plugins: {
//   //         datalabels: {
//   //           font: {
//   //             size: 13
//   //           },
//   //           color: '#000000',
//   //           anchor: 'end',
//   //           align: 'start',
//   //           formatter: (val) => `€ ${val}`
//   //         }
//   //       },
//   //       title: {
//   //         display: true,
//   //         text: 'MONEY',
//   //         fontColor: '#000000',
//   //         fontSize: 23,
//   //         position: 'left'
//   //       },
//   //       scales: {
//   //         yAxes: [{
//   //           ticks: {
//   //             fontColor: '#000000',
//   //             padding: 5,
//   //             fontSize: 13,
//   //           },
//   //           gridLines: {
//   //             display: false,
//   //             drawBorder: false
//   //           },
//   //           barThickness: 44,
//   //         }],
//   //         xAxes: [{
//   //           ticks: {
//   //             display: false,
//   //             beginAtZero: true,
//   //           },
//   //           gridLines: {
//   //             display: false,
//   //             drawBorder: false
//   //           },
//   //           minBarLength: 50
//   //         }],
//   //       },
//   //       legend: {
//   //         display: false
//   //       },
//   //       tooltips: {
//   //         enabled: false,
//   //       }
//   //     }
//   //   });
//   //   const transportChart = new Chart(transportCtx, {
//   //     plugins: [ChartDataLabels],
//   //     type: 'horizontalBar',
//   //     data: {
//   //       labels: ['FLY', 'DRIVE', 'RIDE'],
//   //       datasets: [{
//   //         data: [4, 2, 1],
//   //         backgroundColor: '#ffffff',
//   //         hoverBackgroundColor: '#ffffff',
//   //         anchor: 'start'
//   //       }]
//   //     },
//   //     options: {
//   //       plugins: {
//   //         datalabels: {
//   //           font: {
//   //             size: 13
//   //           },
//   //           color: '#000000',
//   //           anchor: 'end',
//   //           align: 'start',
//   //           formatter: (val) => `${val}x`
//   //         }
//   //       },
//   //       title: {
//   //         display: true,
//   //         text: 'TRANSPORT',
//   //         fontColor: '#000000',
//   //         fontSize: 23,
//   //         position: 'left'
//   //       },
//   //       scales: {
//   //         yAxes: [{
//   //           ticks: {
//   //             fontColor: '#000000',
//   //             padding: 5,
//   //             fontSize: 13,
//   //           },
//   //           gridLines: {
//   //             display: false,
//   //             drawBorder: false
//   //           },
//   //           barThickness: 44,
//   //         }],
//   //         xAxes: [{
//   //           ticks: {
//   //             display: false,
//   //             beginAtZero: true,
//   //           },
//   //           gridLines: {
//   //             display: false,
//   //             drawBorder: false
//   //           },
//   //           minBarLength: 50
//   //         }],
//   //       },
//   //       legend: {
//   //         display: false
//   //       },
//   //       tooltips: {
//   //         enabled: false,
//   //       }
//   //     }
//   //   });
//   // }
// }
