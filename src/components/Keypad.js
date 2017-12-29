import React from "react";

const Keypad = props => {
  return (
    <div id="keypad" className="keypad">
      <button id="clear" className="clear-btn" onClick={props.handleClick}>
        AC
      </button>
      <button id="divide" className="divide-btn" onClick={props.handleClick}>
        /
      </button>
      <button
        id="multiply"
        className="multiply-btn"
        onClick={props.handleClick}
      >
        x
      </button>

      <button id="seven" className="seven-btn" onClick={props.handleClick}>
        7
      </button>
      <button id="eight" className="eight-btn" onClick={props.handleClick}>
        8
      </button>
      <button id="nine" className="nine-btn" onClick={props.handleClick}>
        9
      </button>
      <button
        id="subtract"
        className="subtract-btn"
        onClick={props.handleClick}
      >
        -
      </button>

      <button id="four" className="four-btn" onClick={props.handleClick}>
        4
      </button>
      <button id="five" className="five-btn" onClick={props.handleClick}>
        5
      </button>
      <button id="six" className="six-btn" onClick={props.handleClick}>
        6
      </button>
      <button id="add" className="add-btn" onClick={props.handleClick}>
        +
      </button>

      <div className="rows-3-4">
        <div className="cols-0-2">
          <div className="row-3">
            <button id="one" className="one-btn" onClick={props.handleClick}>
              1
            </button>
            <button id="two" className="two-btn" onClick={props.handleClick}>
              2
            </button>
            <button
              id="three"
              className="three-btn"
              onClick={props.handleClick}
            >
              3
            </button>
          </div>
          <div className="row-4">
            <button id="zero" className="zero-btn" onClick={props.handleClick}>
              0
            </button>
            <button
              id="decimal"
              className="decimal-btn"
              onClick={props.handleClick}
            >
              .
            </button>
          </div>
        </div>
        <button id="equals" className="equals-btn" onClick={props.handleClick}>
          =
        </button>
      </div>
    </div>
  );
};

export { Keypad as default };
