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

function reset() {
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
    display.textContent = '0';
    noOperator = true;
}

const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const clearDisplay = document.querySelector("#clear");
const result = document.querySelector("#result");
const backspace = document.querySelector("#delete");
const dotDecimal = document.querySelector("#dot");

backspace.addEventListener("click", () => {
    if (display.textContent === '0' || display.textContent === '') {
        display.textContent = '0';
    } else {
        display.textContent = display.textContent.substring(0, display.textContent.length - 1)
    }
});

clearDisplay.addEventListener("click", reset);

dotDecimal.addEventListener("click", () => {
    if (display.textContent === "") {
        display.textContent = "";
    } else {
        display.textContent += dotDecimal.textContent;
    }
});

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (display.textContent === '0' && button.textContent === '0') {
            display.textContent = '0';
        } else if (display.textContent === '0' && button.textContent !== '0') {
            display.textContent = '';
            display.textContent += button.textContent;
        } else {
            display.textContent += button.textContent;
        }
    });
});

operators.forEach(buttonOperator => {
    buttonOperator.addEventListener('click', () => {
        if (display.textContent === "") {
            display.textContent = "";
        } else if (noOperator) {
            operator = buttonOperator.textContent;
            display.textContent += buttonOperator.textContent;
            return noOperator = false;
        } else {
            operation();
            operator = buttonOperator.textContent;
            display.textContent += buttonOperator.textContent;
            return noOperator = false;
        }
    });
});

function operation() {
    [firstNumber, secondNumber] = display.textContent.split(`${operator}`);
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    if (isNaN(secondNumber)) {
        secondNumber = 0;
    }

    if (operator === "÷" && secondNumber === 0) {
        alert("This doesn't work");
        secondNumber = 1;
    }

    operate();
    noOperator = true;
}

result.addEventListener("click", operation);

