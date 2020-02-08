import React, { Component } from "react";
import * as api from "../api";

class LifeInfo extends Component {
  state = {
    time: null,
    temperature: null,
    power: null
  };

  componentDidMount() {
    let lifeTemperature;
    let lifePower;

    this.fetchLifeInfo().then(data => {
      lifeTemperature = data.temperature;
      lifePower = data.power;
    });

    this.setState({
      time: Date.now(),
      temperature: lifeTemperature,
      power: lifePower
    });
    this.interval = setInterval(() => {
      this.setState({
        time: Date.now(),
        temperature: lifeTemperature,
        power: lifePower
      });
    }, 5000); // quizá luego debería ser el tiempo cada segundo
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fetchLifeInfo = () => {
    return api.getLifeValues().then(data => data);
  };

  render() {
    const { temperature, power } = this.state;
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
