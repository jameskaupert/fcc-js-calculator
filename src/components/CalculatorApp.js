import React from "react";
import Display from "./Display";
import Keypad from "./Keypad";

export default class CalculatorApp extends React.Component {
  state = {
    currentCalculation: "",
    currentOutput: "0"
  };
  handleClick = e => {
    let key = e.target.innerHTML;
    if (key === 'x') {
      key = '*'
    }
    this.updateCurrentOutput(key);
    this.updateCalculation(key);
  };
  updateCurrentOutput = key => {
    const operators = ["+", "-", "*", "/", "="];
    let currentOutput;
    if (key === "AC") {
      currentOutput = "0";
    } else if (key === "=") {
      currentOutput = this.evaluateCalculation();
    } else if (this.state.currentOutput === "0") {
      if (key === ".") {
        currentOutput = "0.";
      } else {
        currentOutput = key;
      }
    } else if (!operators.includes(this.state.currentOutput)) {
      if (operators.includes(key)) {
        currentOutput = key;
      } else if (key === ".") {
        if (this.state.currentOutput.includes(".")) {
          currentOutput = this.state.currentOutput;
        } else {
          currentOutput = this.state.currentOutput + key;
        }
      } else {
        currentOutput = this.state.currentOutput + key;
      }
    } else {
      if (key === ".") {
        currentOutput = "0" + key;
      } else {
        currentOutput = key;
      }
    }
    this.setState(() => ({ currentOutput }));
  };
  updateCalculation = key => {
    const operators = ["+", "-", "*", "/", "="];
    let currentCalculation;
    if (key === "AC") {
      currentCalculation = "";
    } else if (key === '=') {
      currentCalculation = this.state.currentCalculation + '=' + this.evaluateCalculation()
    }
    else if (this.state.currentCalculation === "") {
      if (operators.includes(key) || key === ".") {
        currentCalculation = "0" + key;
      } else {
        currentCalculation = key;
      }
    } else if (
      operators.includes(
        this.state.currentCalculation[this.state.currentCalculation.length - 1]
      )
    ) {
      if (operators.includes(key)) {
        currentCalculation = this.state.currentCalculation.slice(0, -1) + key;
      } else {
        if (key === ".") {
          currentCalculation = this.state.currentCalculation + "0" + key;
        } else {
          currentCalculation = this.state.currentCalculation + key;
        }
      }
    } else if (
      this.state.currentCalculation[
        this.state.currentCalculation.length - 1
      ] === "0"
    ) {
      if (key === 0) {
        currentCalculation = this.state.currentCalculation;
      } else if (operators.includes(key) || key === ".") {
        currentCalculation = this.state.currentCalculation + key;
      } else {
        currentCalculation = this.state.currentCalculation.slice(0, -1) + key;
      }
    } else {
      if (key === ".") {
        const operands = this.state.currentCalculation.split(/[\+\-\/\*]/g);
        if (operands[operands.length - 1].indexOf(".") === -1) {
          currentCalculation = this.state.currentCalculation + key;
        } else {
          currentCalculation = this.state.currentCalculation;
        }
      } else {
        currentCalculation = this.state.currentCalculation + key;
      }
    }
    this.setState(() => ({ currentCalculation }));
  };
  evaluateCalculation = () => {
    return eval(this.state.currentCalculation);
  };
  render() {
    return (
      <div id="calculator-app" className="calculator-app">
        <div className="calculator-wrapper">
          <Display
            currentCalculation={this.state.currentCalculation}
            currentOutput={this.state.currentOutput}
          />
          <Keypad handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}
