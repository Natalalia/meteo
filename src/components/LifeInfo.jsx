import React, { Component } from "react";
import * as api from "../api";
import { deciKelvinToCelsius, mWTokW } from "../utils/changeUnit";
import "./lifeInfo.css";

/**
 * Represents the temperature and the power values every 5 seconds
 */
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
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fetchLifeInfo = () => {
    api.getLifeValues().then(lifeValues => {
      this.setState({
        time: Date.now(),
        temperature: deciKelvinToCelsius(lifeValues.temperature.value),
        power: mWTokW(lifeValues.power.value),
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
      <div id="lifeInfo">
        <div className="lifeTime">
          <span>Última actualización:</span>
          <span id="currentTime">
            {new Date().toLocaleTimeString("en-US", { hour12: false })}
          </span>
        </div>
        <div>
          <span>Temperatura:</span>
          <span id="currentTemperature">{temperature} ºC</span>
        </div>
        <div>
          <span>Potencia:</span>
          <span id="currentPower">{power} kW</span>
        </div>
      </div>
    );
  }
}

export default LifeInfo;
