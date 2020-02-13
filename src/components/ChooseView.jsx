import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

function ChooseView({ checkedTemperatures, checkedEnergies }) {
  const handleChange = option => {
    this.props.changeView(option);
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            checked={checkedTemperatures}
            onChange={() => handleChange("checkedTemperatures")}
            value="checkedTemperatures"
          />
        }
        label="Temperaturas"
      />
      <FormControlLabel
        control={
          <Switch
            checked={checkedEnergies}
            onChange={() => handleChange("checkedEnergies")}
            value="checkedEnergies"
            color="primary"
          />
        }
        label="Energías"
      />
    </FormGroup>
  );
}

export default ChooseView;
