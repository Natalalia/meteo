import React from "react";

import "./selectPeriod.css";

function SelectPeriod({ changePeriod }) {
  const handleClick = period => {
    changePeriod(period);
  };

  return (
    <div id="selectPeriod">
      <label>
        Periodo de tiempo:
        <select onClick={e => handleClick(e.target.value)}>
          <option value={60}>1 hora</option>
          <option value={30}>30 minutos</option>
        </select>
      </label>
    </div>
  );
}

export default SelectPeriod;
