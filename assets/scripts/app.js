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
function add() {
  const enteredNumber = getUserumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  logEntries.push(enteredNumber);
  console.log(logEntries);
}
function subtruct() {
  const enteredNumber = getUserumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
}
function multiply() {
  const enteredNumber = getUserumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
}
function divide() {
  const enteredNumber = getUserumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
}
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtruct);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
