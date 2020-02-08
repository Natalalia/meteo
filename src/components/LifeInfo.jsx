import React, { Component } from "react";

class LifeInfo extends Component {
  state = {
    time: null
  };

  componentDidMount() {
    this.setState({
      time: Date.now()
    });
    this.interval = setInterval(() => {
      this.setState({
        time: Date.now()
      });
    }, 5000); // quizá luego debería ser el tiempo cada segundo
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        <span>{new Date().toLocaleTimeString("en-US", { hour12: false })}</span>
        <h2>Temperature:</h2>
        <span>temperature here</span>
        <h2>Power:</h2>
        <span>power here</span>
      </>
    );
  }
}

export default LifeInfo;
