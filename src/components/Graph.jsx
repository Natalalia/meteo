import React from "react";
import { Line } from "react-chartjs-2";

import "./graph.css";

function Graph({
  times,
  temperatures,
  energies,
  checkedTemperatures,
  checkedEnergies
}) {
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

  const data = {
    labels: times,
    datasets: []
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
          display: false,
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
          display: false,
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

  if (checkedTemperatures) {
    data.datasets.push(datasets[0]);
    options.scales.yAxes[0].display = true;
  }

  if (checkedEnergies) {
    data.datasets.push(datasets[1]);
    options.scales.yAxes[1].display = true;
  }

  return (
    <div id="graph">
      <Line data={data} options={options} />
    </div>
  );
}

export default Graph;
