function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function remainder(a, b) {
    return a % b;
}

let num1 = '';
let num2 = '';
let operator = null;

function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        case '%':
            return remainder(num1, num2);
        default:
            return null;
    }
}

const userInputElement = document.querySelector('.user-input');
const resultElement = document.querySelector('.result');

document.querySelectorAll(".buttons button").forEach(button => {
    button.addEventListener('click', () => handleButtonClick(button))
});

document.addEventListener('keydown', handleKeyPress);

function updateInputDisplay(input) {
    userInputElement.textContent = input;
}

function clearWholeInputDisplay() {
    userInputElement.textContent = '0';
}

function clearWholeResultDisplay() {
    resultElement.textContent = '';
}

function clearInputCharacter() {
    let userInputText = userInputElement.textContent;
    userInputText = userInputText.slice(0, -1);
    userInputElement.textContent = userInputText || '0';

    if (userInputElement.textContent === '0') {
        num1 = '';
        num2 = '';
        operator = null;
    } else {
        let inputs = userInputElement.textContent.split(' ');
        if (inputs.length === 1) {
            num1 = inputs[0];
            num2 = '';
            operator = null;
        } else if (inputs.length === 2) {
            num1 = inputs[0];
            operator = inputs[1];
            num2 = '';
        } else if (inputs.length === 3) {
            num1 = inputs[0];
            operator = inputs[1];
            num2 = inputs[2];
        }
    }
}

function updateResultDisplay(input) {
    resultElement.textContent = input;
}

function convertOperatorToUnicode(operator) {
    switch (operator) {
        case '×':
            return '*';
        case '÷':
            return '/';
        default:
            return operator;
    }
}

function handleButtonClick(button) {
    const buttonContent = button.textContent;

    if (button.className.includes('digits')) {
        handleDigit(buttonContent);
    }

    if (button.className.includes('operator')) {
        handleOperator(buttonContent);
    }

    if (button.id === 'all-clear') {
        clearAll();
    }

    if (button.id === 'clear') {
        clearInputCharacter();
    }

    if (button.id === 'equals') {
        handleEquals();
    }

    if (button.id === 'decimal') {
        handleDecimal();
    }
}

function handleDigit(digit) {
    if (operator === null) {
        num1 += digit;
        updateInputDisplay(num1);
        updateResultDisplay(num1);
    } else {
        num2 += digit;
        updateResultDisplay(num2);
    }
}

function handleOperator(op) {
    if (num1 !== '' && num2 !== '') {
        let result = operate(Number(num1), Number(num2), operator);
        updateResultDisplay(result);
        num1 = result.toString();
        num2 = '';
    }
    if (operator !== null) {
        userInputElement.textContent = userInputElement.textContent.slice(0, -3);
    }
    operator = convertOperatorToUnicode(op);
    updateInputDisplay(`${num1} ${op}`);
}

function clearAll() {
    num1 = '';
    num2 = '';
    operator = null;
    clearWholeInputDisplay();
    clearWholeResultDisplay();
}

function handleEquals() {
    if (operator !== null && num2 !== '') {
        let result = operate(Number(num1), Number(num2), operator);
        updateResultDisplay(result);
        updateInputDisplay(`${num1} ${operator} ${num2} =`);
        num1 = result.toString();
        num2 = '';
        operator = null;
    } else {
        updateResultDisplay('Error');
    }
}

function handleDecimal() {
    if (operator === null) {
        if (!num1.includes('.')) {
            num1 += '.';
            updateInputDisplay(num1);
            updateResultDisplay(num1);
        }
    } else {
        if (!num2.includes('.')) {
            num2 += '.';
            updateResultDisplay(num2);
        }
    }
}

function handleKeyPress(event) {
    const key = event.key;
    if (!isNaN(key)) {
        handleDigit(key);
    } else if (['+', '-', '*', '/', '%'].includes(key)) {
        handleOperator(key);
    } else if (key === 'Enter') {
        handleEquals();
    } else if (key === 'Escape') {
        clearAll();
    } else if (key === 'Backspace') {
        clearInputCharacter();
    } else if (key === '.') {
        handleDecimal();
    }
}
