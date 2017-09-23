import React, { Component } from 'react';
import '../styles/app.css';
import '../styles/base.css';
import FA from 'react-fontawesome';
import Fundstats from './Fundstats';
import Fancycharts from './Fancycharts';

import Navbar from './Navbar';
import Chart from 'chart.js';

class App extends Component {

  componentDidMount() {
    //version 2 of Charjs
    Chart.pluginService.register({
      beforeDraw: function(chart) {
        var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;

        ctx.restore();
        var fontSize = (height / 150).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";
        //text color
        ctx.fillStyle = '#0091ea';

        var text = "281% USD",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;

        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    });

    var ctx = document.getElementById("donut-chart").getContext('2d');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [15, 10, 75],
          borderColor: [
              'rgba(97,32,246,1)',
              'rgba(0, 247, 154, 1)',
              'rgba(0, 146, 238, 1)',
            ],
            backgroundColor: [
              'rgba(97,32,246,1)',
              'rgba(0, 247, 154, 1)',
              'rgba(0, 146, 238, 1)',
            ],
            borderWidth: 1,
        }],
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Red',
            'Yellow',
            'Blue'
        ],
      },
      options: {
        legend: {
          display: false
        },
        cutoutPercentage: 80,
        rotation: 5,
        responsive: false,
        maintainAspectRatio: true,
      }

    });
  }


  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <section className="container">
          <div className="row">
            <div className="card">
              <header className='card-header'>
                <div className="card-title">Lobo Fund</div>
                <div className="card-menu"><FA name='ellipsis-h' /></div>
              </header>

              <Fundstats />
              <hr className='card-divider' />

              <Fancycharts />
              <hr className="card-divider"/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
