import React, { Component } from "react";
import Graph from "./Graph";
import ChooseView from "./ChooseView";

import * as api from "../api";

import { storeValues } from "../utils/storeValues";

class GraphEnvironment extends Component {
  state = {
    times: [],
    temperatures: [],
    energies: [],
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

  render() {
    const {
      times,
      temperatures,
      energies,
      checkedTemperatures,
      checkedEnergies,
      isLoading
    } = this.state;

    if (isLoading) return <span>Loading...</span>;
    return (
      <div>
        <ChooseView changeView={this.changeView} />
        <Graph
          times={times}
          temperatures={temperatures}
          energies={energies}
          checkedTemperatures={checkedTemperatures}
          checkedEnergies={checkedEnergies}
        />
      </div>
    );
  }
}

export default GraphEnvironment;
