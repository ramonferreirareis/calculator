let firstNumber = 2;
let secondNumber = 3;
let operator = "+";

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate() {
    if (operator === "+") add(firstNumber, secondNumber);
    if (operator === "-") subtract(firstNumber, secondNumber);
    if (operator === "x") multiply(firstNumber, secondNumber);
    if (operator === "÷") divide(firstNumber, secondNumber);
}

const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const clearDisplay = document.querySelector("#clear");

clearDisplay.addEventListener("click", () => display.textContent = '');

buttons.forEach(button => {
    button.addEventListener("click", () => display.textContent += button.textContent);
});

operators.forEach(operator => {
    operator.addEventListener("click", () => display.textContent += operator.textContent);
});
