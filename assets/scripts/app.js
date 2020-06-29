const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// GET input from input field
function getUserumberInput() {
  return parseInt(userInput.value);
}
// Generates and writes calculaton log
function createAndWriteOutput(operator, beforeCalc, calcNumber) {
  const calcDescription = `${beforeCalc} ${operator} ${calcNumber}`;
  //   function calling from vender.js
  outputResult(currentResult, calcDescription);
}
function logEntry(
  operationIdentifier,
  initialResult,
  enteredNumber,
  currentResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}
function calculateResult(calculationType) {
  const enteredNumber = getUserumberInput();

  if (
    (calculationType !== "ADD" &&
      calculationType !== "SUBTRUCT" &&
      calculationType !== "MULTIPLY" &&
      calculationType !== "DIVIDE") ||
    !enteredNumber
  ) {
    return;
  }

  const initialResult = currentResult;
  let mathOperator;

  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRUCT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  logEntry(calculationType, initialResult, enteredNumber, currentResult);
}
// Arrow Function
add = () => calculateResult("ADD");
// function add() {
//   calculateResult("ADD");
// }
subtruct = () => calculateResult("SUBTRUCT");
// function subtruct() {
//   calculateResult("SUBTRUCT");
// }

multiply = () => calculateResult("MULTIPLY");
// function multiply() {
//   calculateResult("MULTIPLY");
// }

divide = () => calculateResult("DIVIDE");
// function divide() {
//   calculateResult("DIVIDE");
// }

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtruct);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
