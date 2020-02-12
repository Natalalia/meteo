import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import * as api from "../api";
import { deciKelvinToCelsius } from "../utils/changeUnit";

class Graph extends Component {
  state = {
    times: [],
    temperatures: []
  };

  componentDidMount() {
    this.fetchTemperatures();
  }

  fetchTemperatures = () => {
    api.getTemperatures().then(temperatureValues => {
      const times = [];
      const temperatures = [];
      for (let i = 1; i < temperatureValues.length; i++) {
        times.push(temperatureValues[i].time);
        temperatures.push(deciKelvinToCelsius(temperatureValues[i].average));
      }
      this.setState({
        times,
        temperatures
      });
    });
  };

  render() {
    const { times, temperatures } = this.state;
    const data = {
      labels: times,
      datasets: [
        {
          label: "Temperatura",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: temperatures,
          yAxisID: "y-axis-1"
        },

        {
          label: "Energía",
          fill: false,
          lineTension: 0.5,
          backgroundColor: "rgba(255,0,0,6)",
          borderColor: "rgba(255,0,0,6)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(255,0,0,0.6)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(255,0,0,0.6)",
          pointHoverBorderColor: "rgba(255,0,0,0.6)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [10, 35, 53, 26, 37],
          yAxisID: "y-axis-2"
        }
      ]
    };

    const options = {
      responsive: true,

      tooltips: {
        mode: "label"
      },

      elements: {
        line: {
          fill: false
        }
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              display: true
            }
            /*
            labels: {
              show: false
            }
            */
          }
        ],
        yAxes: [
          {
            type: "linear",
            display: true,
            position: "left",
            id: "y-axis-1",
            gridLines: {
              display: true
            },

            labels: {
              show: true
            }
          },
          {
            type: "linear",
            display: true,
            position: "right",
            id: "y-axis-2",
            gridLines: {
              display: true
            },
            labels: {
              show: true
            }
          }
        ]
      }
    };

    return <Line data={data} options={options} />;
  }
}

export default Graph;
