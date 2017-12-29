# fcc-js-calculator

## Acceptance Criteria
1. Calculator should contain a clickable '=' element with id="equals"
2. Calculator should contain 10 clickable elements with the digits 0-9, with
their ids: id="zero", id="one", ... id="nine"
3. Calculator should contain 4 clickable elements each containing one of
the four primary arithmetic operators with ids: id="add", id="subtract",
id="multiply", id="divide"
4. Calculator should contain a clickable element containing a "." for decimal
points with id="decimal"
5. Calculator should contain a clickable element with id="clear"
6. Calculator should contain an element to display values with id="display"
7. Pressing the clear button at any time should clear the input and output
values and return the calculator to its initialized state with 0 displayed
in the id="display" element
8. As numbers are entered, the input should be visible in the id="display"
element
9. In any order, the user should be able to perform arithmetic operations
using numbers of any length, and when "=" is pressed, the correct result
should be displayed in the id="display" element
10. Number inputs should not be allowed to begin with multiple zeros
11. When the decimal element is clicked, a single '.' should be appended to
the current value.  Multiple '.' should not be allowed
12. Any operation should be able to be performed on decimal number inputs
13. If 2 or more operators are entered consecutively, the operation performed
should be the last operator entered
14. Pressing an operator immediately following "=" should start a new calculation
that operates on the result of the previous evaluation
15. The calculator should have several decimal places of precision with
respect to rounding
