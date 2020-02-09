import React, { Component } from "react";
import * as api from "../api";
import { deciKelvinToCelsius, mWTokWh } from "../utils/changeUnit";

class LifeInfo extends Component {
  state = {
    time: null,
    temperature: null,
    power: null,
    isLoading: true
  };

  componentDidMount() {
    this.fetchLifeInfo();
    this.interval = setInterval(() => {
      this.fetchLifeInfo();
    }, 5000); // quizá luego debería ser el tiempo cada segundo
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fetchLifeInfo = () => {
    api.getLifeValues().then(lifeValues => {
      this.setState({
        time: Date.now(),
        temperature: deciKelvinToCelsius(lifeValues.temperature.value),
        power: mWTokWh(lifeValues.power.value),
        isLoading: false
      });
    });
  };

  render() {
    const { temperature, power, isLoading } = this.state;
    if (isLoading) {
      return <span>Loading ...</span>;
    }
    return (
      <>
        <span>{new Date().toLocaleTimeString("en-US", { hour12: false })}</span>
        <h2>Temperature:</h2>
        <span>{temperature} ºC</span>
        <h2>Power:</h2>
        <span>{power} kWh</span>
      </>
    );
  }
}

export default LifeInfo;
