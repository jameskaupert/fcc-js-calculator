import React from "react";

const Display = props => {
  return (
    <div id="display" className="display">
      <div id="calc-display" className="calc-display">
        <p>{props.currentCalculation}</p>
      </div>
      <div id="output-display" className="output-display">
        <p>{props.currentOutput}</p>
      </div>
    </div>
  );
};

export { Display as default };
