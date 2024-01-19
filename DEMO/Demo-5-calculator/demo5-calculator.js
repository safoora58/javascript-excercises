const display = document.querySelector('.display-box');
const clear = document.querySelector('.button-clear');
const clearLastAction = document.querySelector('.button-clear-last-action');
const backspace = document.querySelector('.button-backspace');
const Percent = document.querySelector('.button-percent');
const divide = document.querySelector('.button-divide');
const multipl = document.querySelector('.button-multipl');
const minus = document.querySelector('.button-minus');
const plus = document.querySelector('.button-plus');
const equal = document.querySelector('.button-equal');
const decimal = document.querySelector('.button-decimal');
const plusMinus = document.querySelector('.button-pm');
const Power = document.querySelector('.button-power');
const Radical = document.querySelector('.button-radical');
const divideOne = document.querySelector('.button-divideone');
const operationBox = document.querySelector('#operation-box');

let operation = false;
let point = false;
let equal2 = false;

const btnNumbers = document.querySelectorAll('.button-num');



//clear button
clear.addEventListener('click', function (e) {
    display.textContent = "0";
    point = false;
    operationBox.textContent = "";

})

//clearLastAction button
clearLastAction.addEventListener('click', function (e) {
    display.textContent = "0";
})


//backspace button
backspace.addEventListener('click', function (e) {

    let len = display.textContent.length;
    let lastDigit = display.textContent.substr(len - 1, len);
    if (lastDigit == ".") {
        point = false;
    }

    if (len > 1) {
        display.textContent = display.textContent.substr(0, len - 1);
    }
    else {
        display.textContent = "0";
    }


})

//decimal button
decimal.addEventListener('click', function (e) {

    if (point == false) {
        display.textContent += ".";
        point = true;
    }
})

//numbers buttons
btnNumbers.forEach(function (item) {
    item.addEventListener('click', function (e) {
        if (operation == true) {
            display.textContent = "";
            operation = false;
        }
        if (equal2== true) {
            operationBox.textContent = "";
            equal2=false;
        }

        if (display.textContent == "0") {
            display.textContent = e.target.textContent;
        }
        else {
            display.textContent += e.target.textContent;
        }

    })

})


//operator 
let number1, number2, result;

//for  (+) , (-) , (/) , (*)
let operator = "";

//for x2
let operatorPower = number1 * number1;

//for ٪
let operatorPercent = number1 / 100;

//for 1/x
operatordivideOne = 1 / number1;

//divideOne button
divideOne.addEventListener('click', function (e) {
    number1 = Number(display.textContent);
    display.textContent = 1 / number1;
    operator = operatordivideOne;
    operationBox.textContent = "1÷(" + number1 + ")";
})

//Radical button
Radical.addEventListener('click', function (e) {
    number1 = Number(display.textContent);
    display.textContent = Math.sqrt(number1);
    let MyContent = "&#8730;";
    operationBox.innerHTML = MyContent + "(" + number1 + ")"


})

//Percent button
Percent.addEventListener('click', function (e) {
    number1 = Number(display.textContent);
    display.textContent = number1 / 100;
    operator = operatorPercent;
    operationBox.textContent = number1 + "÷100";
})

//Power button
Power.addEventListener('click', function (e) {
    number1 = Number(display.textContent);
    display.textContent = number1 * number1;
    operator = operatorPower;
    operationBox.textContent = "sqr(" + number1 + ")";
})


plus.addEventListener('click', function (e) {
    number1 = Number(display.textContent);
    display.textContent = display.textContent;
    operator = "+";
    operation = true;
    operationBox.textContent = display.textContent + "+";

})


minus.addEventListener('click', function (e) {
    number1 = Number(display.textContent);
    display.textContent = display.textContent;
    operator = "-";
    operation = true;
    operationBox.textContent = display.textContent + "-";
})

multipl.addEventListener('click', function (e) {
    number1 = Number(display.textContent);
    display.textContent = display.textContent;
    operator = "*";
    operation = true;
    operationBox.textContent = display.textContent + "*";
})

divide.addEventListener('click', function (e) {
    number1 = Number(display.textContent);
    display.textContent = display.textContent;
    operator = "÷";
    operation = true;
    operationBox.textContent = display.textContent + "÷";
})


equal.addEventListener('click', function (e) {
    number2 = Number(display.textContent);
    operationBox.textContent = number1 + operator + number2 + "=";


    switch (operator) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "÷":
            result = number1 / number2;
            break;
        case "%":
            result = number1 / 100 * number2;
            break;
    }
    display.textContent = result;
    operation = true;
    equal2 = true;
})




