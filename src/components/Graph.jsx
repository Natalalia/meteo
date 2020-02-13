import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import ChooseView from "./ChooseView";
import * as api from "../api";

import "./graph.css";

import { storeValues } from "../utils/storeValues";

class Graph extends Component {
  state = {
    times: [],
    temperatures: [],
    energies: [],
    datasets: [],
    checkedTemperatures: true,
    checkedEnergies: true,
    isLoading: true
  };

  componentDidMount() {
    this.fetchValues();
    this.interval = setInterval(() => {
      this.fetchValues();
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fetchValues = () => {
    return Promise.all([
      api.getValues("temperatures"),
      api.getValues("power")
    ]).then(([temperatureValues, powerValues]) => {
      const { times } = storeValues(temperatureValues);
      const temperatures = storeValues(temperatureValues, "temperatures")
        .valuesToRender;
      const energies = storeValues(powerValues, "power").valuesToRender;
      const datasets = [
        {
          label: "Temperatura (ºC)",
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
          label: "Energía (kWh)",
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
          data: energies,
          yAxisID: "y-axis-2"
        }
      ];
      this.setState({
        times,
        temperatures,
        energies,
        datasets,
        isLoading: false
      });
    });
  };

  changeView = option => {
    console.log("Hi there!", option);
    this.setState(currentState => {
      return { [option]: !currentState[option] };
    });
  };

  render() {
    const {
      times,
      datasets,
      checkedTemperatures,
      checkedEnergies,
      isLoading
    } = this.state;

    if (isLoading) return <span>Loading...</span>;

    const data = {
      labels: times,
      datasets: []
    };

    if (checkedTemperatures) {
      data.datasets.push(datasets[0]);
    }

    if (checkedEnergies) {
      data.datasets.push(datasets[1]);
    }

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
            display: true, //false
            position: "right",
            id: "y-axis-2",
            gridLines: {
              display: true //false
            },
            labels: {
              show: true
            }
          }
        ]
      }
    };

    return (
      <div id="graph">
        <ChooseView changeView={this.changeView} />
        <Line data={data} options={options} />
      </div>
    );
  }
}

export default Graph;
