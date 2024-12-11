let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let noOperator = true;

function add(num1, num2) {
    display.textContent = num1 + num2;
}

function subtract(num1, num2) {
    display.textContent = num1 - num2;
}

function multiply(num1, num2) {
    display.textContent = num1 * num2;
}

function divide(num1, num2) {
    display.textContent = num1 / num2;
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
const result = document.querySelector("#result");

clearDisplay.addEventListener("click", () => display.textContent = '');

buttons.forEach(button => {
    button.addEventListener("click", () => display.textContent += button.textContent);
});

operators.forEach(buttonOperator => {
    buttonOperator.addEventListener('click', () => {
        operator = buttonOperator.textContent;
        if (noOperator) {
            display.textContent += buttonOperator.textContent;
            return noOperator = false;
        }
    });
});

result.addEventListener("click", () => {
    [firstNumber, secondNumber] = display.textContent.split(`${operator}`);
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    operate();
    noOperator = true;
});

