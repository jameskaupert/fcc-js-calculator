import React from "react";

const Display = props => {
  return (
    <div id="display-wrapper" className="display-wrapper">
      <div id="calc-display" className="calc-display">
        <p>{props.currentCalculation}</p>
      </div>
      <div id="display" className="display">
        {props.currentOutput}
      </div>
    </div>
  );
};

export { Display as default };
