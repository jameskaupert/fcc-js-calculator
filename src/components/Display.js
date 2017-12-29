import React from "react";

const Display = props => {
  return (
    <div id="display" className="display">
      <div id="calc-display" className="calc-display">
        {props.currentCalculation}
      </div>
      <div id="output-display" className="output-display">
        {props.currentOutput}
      </div>
    </div>
  );
};

export { Display as default };
