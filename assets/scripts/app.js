const defaultResult = 0;
let currentResult = defaultResult;
function getUserumberInput() {
  return +userInput.value;
}
function createAndWriteOutput(operator, beforeCalc, calcNumber) {
  const calcDescription = `${resultB} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}
function add() {
  const enteredNumber = getUserumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
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
