import React from "react";

const Keypad = props => {
  return (
    <div id="keypad" className="keypad">
      <button id="clear" className="clear-btn">
        AC
      </button>
      <button id="divide" className="divide-btn">
        /
      </button>
      <button id="multiply" className="multiply-btn">
        x
      </button>

      <button id="seven" className="seven-btn">
        7
      </button>
      <button id="eight" className="eight-btn">
        8
      </button>
      <button id="nine" className="nine-btn">
        9
      </button>
      <button id="subtract" className="subtract-btn">
        -
      </button>

      <button id="four" className="four-btn">
        4
      </button>
      <button id="five" className="five-btn">
        5
      </button>
      <button id="six" className="six-btn">
        6
      </button>
      <button id="add" className="add-btn">
        +
      </button>

      <div className="rows-3-4">
        <div className="cols-0-2">
          <div className="row-3">
            <button id="one" className="one-btn">
              1
            </button>
            <button id="two" className="two-btn">
              2
            </button>
            <button id="three" className="three-btn">
              3
            </button>
          </div>
          <div className="row-4">
            <button id="zero" className="zero-btn">
              0
            </button>
            <button id="decimal" className="decimal-btn">
              .
            </button>
          </div>
        </div>
        <button id="equals" className="equals-btn">
          =
        </button>
      </div>
    </div>
  );
};

export { Keypad as default };
