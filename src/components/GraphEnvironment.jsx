import React, { Component } from "react";
import Graph from "./Graph";
import ChooseView from "./ChooseView";
import SelectPeriod from "./SelectPeriod";

import "./graphEnvironment.css";

import * as api from "../api";

import { storeValues } from "../utils/storeValues";

class GraphEnvironment extends Component {
  state = {
    times: [],
    temperatures: [],
    energies: [],
    checkedTemperatures: true,
    checkedEnergies: true,
    period: 60,
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
      this.setState({
        times,
        temperatures,
        energies,
        isLoading: false
      });
    });
  };

  changeView = option => {
    this.setState(currentState => {
      return { [option]: !currentState[option] };
    });
  };

  changePeriod = period => {
    this.setState({ period });
  };

  render() {
    const {
      times,
      temperatures,
      energies,
      checkedTemperatures,
      checkedEnergies,
      period,
      isLoading
    } = this.state;

    if (isLoading) return <span>Loading...</span>;
    return (
      <div>
        <div id="chooseOption">
          <ChooseView
            checkedTemperatures={checkedTemperatures}
            checkedEnergies={checkedEnergies}
            changeView={this.changeView}
          />
          <SelectPeriod changePeriod={this.changePeriod} />
        </div>
        <Graph
          times={times}
          temperatures={temperatures}
          energies={energies}
          checkedTemperatures={checkedTemperatures}
          checkedEnergies={checkedEnergies}
          period={period}
        />
      </div>
    );
  }
}

export default GraphEnvironment;
