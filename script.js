function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

console.log(add(5,5));
console.log(subtract(5,5));
console.log(multiply(5,5));
console.log(divide(5,5));

let num1;
let num2;
let operator;

function operate(num1, num2, operator){
    switch(operator){
        case '+':
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
            break;
        case '*':
            multiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
            break;
    }
}