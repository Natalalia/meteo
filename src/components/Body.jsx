import React from "react";
import LifeInfo from "./LifeInfo";
import GraphEnvironment from "./GraphEnvironment";

/**
 * Involves the components of the app that render information
 */
function Body() {
  return (
    <div id="body">
      <LifeInfo />
      <GraphEnvironment />
    </div>
  );
}

export default Body;
