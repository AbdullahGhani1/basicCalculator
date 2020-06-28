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
function add() {
  const enteredNumber = getUserumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  logEntry("Add", initialResult, enteredNumber, currentResult);
}
function subtruct() {
  const enteredNumber = getUserumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
  logEntry("Subtruct", initialResult, enteredNumber, currentResult);
}
function multiply() {
  const enteredNumber = getUserumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
  logEntry("Multiply", initialResult, enteredNumber, currentResult);
}
function divide() {
  const enteredNumber = getUserumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
  logEntry("Division", initialResult, enteredNumber, currentResult);
}
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtruct);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
