import React, { Component } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

class ChooseView extends Component {
  state = {
    checkedTemperatures: true,
    checkedEnergies: true
  };

  handleChange = option => {
    this.setState(currentState => {
      return { [option]: !currentState[option] };
    });
    this.props.changeView(option);
  };

  render() {
    return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              checked={this.state.checkedTemperatures}
              onChange={() => this.handleChange("checkedTemperatures")}
              value="checkedTemperatures"
            />
          }
          label="Temperaturas"
        />
        <FormControlLabel
          control={
            <Switch
              checked={this.state.checkedEnergies}
              onChange={() => this.handleChange("checkedEnergies")}
              value="checkedEnergies"
              color="primary"
            />
          }
          label="Energías"
        />
      </FormGroup>
    );
  }
}

export default ChooseView;
