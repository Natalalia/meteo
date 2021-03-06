import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

/**
 * Shows the two switches and invoked the method with the value of the switched has been presses
 * @param {object} props - two boolean properties that determine if the control has been switched or not and a method that gets invoked with the value of the switch has been activated
 */
function ChooseView({ checkedTemperatures, checkedEnergies, changeView }) {
  const handleChange = option => {
    changeView(option);
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            checked={checkedTemperatures}
            onChange={() => handleChange("checkedTemperatures")}
            value="checkedTemperatures"
            color="primary"
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
            color="secondary"
          />
        }
        label="Energías"
      />
    </FormGroup>
  );
}

export default ChooseView;
