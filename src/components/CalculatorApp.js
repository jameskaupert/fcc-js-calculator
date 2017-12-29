import React from "react";
import Display from "./Display";
import Keypad from "./Keypad";

export default class CalculatorApp extends React.Component {
  state = {
    currentCalculation: 'This will be a calculation',
    currentOutput: 0
  }
  render() {
    return (
      <div id="calculator-app" className="calculator-app">
        <Display
          currentCalculation={this.state.currentCalculation}
          currentOutput={this.state.currentOutput}
        />
        <Keypad />
      </div>
    );
  }
}
