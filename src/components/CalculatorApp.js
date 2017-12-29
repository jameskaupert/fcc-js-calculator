import React from "react";
import Display from "./Display";
import Keypad from "./Keypad";

export default class CalculatorApp extends React.Component {
  state = {
    currentCalculation: '4x2=8',
    currentOutput: 0
  }
  render() {
    return (
      <div id="calculator-app" className="calculator-app">
        <div className="calculator-wrapper">
        <Display
          currentCalculation={this.state.currentCalculation}
          currentOutput={this.state.currentOutput}
        />
        <Keypad />
        </div>
      </div>
    );
  }
}
