import React, { Component } from "react";
import * as api from "../api";
import { deciKelvinToCelsius, mWTokWh } from "../utils/changeUnit";
import "./lifeInfo.css";

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
      <div id="lifeInfo">
        <div className="lifeTime">
          <span>Última actualización:</span>
          <span>
            {new Date().toLocaleTimeString("en-US", { hour12: false })}
          </span>
        </div>
        <div className="wrapperInfo">
          <div className="singleInfo">
            <span>Temperatura:</span>
            <span>{temperature} ºC</span>
          </div>
          <div className="singleInfo">
            <span>Potencia:</span>
            <span>{power} kW</span>
          </div>
        </div>
      </div>
    );
  }
}

export default LifeInfo;
