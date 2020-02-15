import React from "react";

/**
 * This component shows a dropdown with two options of time and invokes the function passed in with the option that has been clicked
 * @param {object} props - a method that determines the period of time shown is passed from props
 */

function SelectPeriod({ changePeriod }) {
  const handleChange = period => {
    changePeriod(period);
  };

  return (
    <div id="selectPeriod">
      <label>
        Periodo de tiempo:
        <select onChange={e => handleChange(e.target.value)}>
          <option value={60}>1 hora</option>
          <option value={30}>30 minutos</option>
        </select>
      </label>
    </div>
  );
}

export default SelectPeriod;
