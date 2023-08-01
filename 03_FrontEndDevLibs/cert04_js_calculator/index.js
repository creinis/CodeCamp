
let tempResult = 0;
let mathOperations = ['divide', 'multiply', 'subtract', 'add'];        
let tempOperand = "";


function updateDisplay(input) {

    const display = document.getElementById("display");
    const display2 = document.getElementById("display2");

    if(display.innerHTML === "0" && mathOperations.indexOf(input) === -1) {
        if (input === "decimal") {
            display.innerHTML = "0.";
        } 
        else if (input === "negative-value" || input === "subtract" ) {
    if (display.innerHTML.indexOf("-1" === -1)) {
        display.innerHTML = "-" + display.innerHTML
    }
    else if (display.innerHTML.indexOf("-1" > -1)) {
        display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);
    }
    }
        else {
        display.innerHTML = input;
        display2.innerHTML = input + tempOperand + tempResult;
        }
    }
    else if(mathOperations.indexOf(input) >= 0) {
    
    if (tempResult === display.innerHTML) {
        //if operand has been selected twice
        tempOperand = input;
    }
    else if(tempOperand === "") {
        //without an operand
        tempOperand = input;
        tempResult = display.innerHTML;
        display.innerHTML = 0;
    } 
    else {
        //with a set of operand
        tempResult = calculate(tempResult, display.innerHTML, tempOperand);
        display2.innerHTML = tempResult;
        display.innerHTML = 0;
        tempOperand = input;
    }

    }
    else if(input === "equals") {
        display.innerHTML = calculate(tempResult, display.innerHTML, tempOperand);
        tempResult = 0;
        tempOperand = "";
    }
    else if(input === "decimal") {
        if (display.innerHTML.indexOf(".") === -1) {
            display.innerHTML += ".";
        }
    }    
    
    else {
        display.innerHTML += input;
        display2.innerHTML = display.innerHTML + input;
    }
}

function clearDisplay() {
    let display = document.getElementById("display");
    tempResult = 0;
    display.innerHTML = 0;
    display2.innerHTML = '';
}

function calculate (firstNumber, secondNumber, operation) {
    let result;
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);

    switch(operation) {
        case "add": 
        result = firstNumber + secondNumber;
        break;

        case "subtract": 
        result = firstNumber - secondNumber;
        break;

        case "multiply": 
        result = firstNumber * secondNumber;
        break;

        case "divide": 
        result = firstNumber / secondNumber;
        break;
    }
    return result.toString();
}

