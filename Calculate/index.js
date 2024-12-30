console.log("Calculator Initialized");

function calculate(operator) {
    const eInput1 = document.getElementById("input1").value;
    const eInput2 = document.getElementById("input2").value;

    const num1 = parseFloat(eInput1);
    const num2 = parseFloat(eInput2);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers!");
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Division by zero is not allowed!");
                return;
            }
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            alert("Invalid operation!");
            return;
    }

    document.getElementById('output').value = result;
}

function root() {
    const eInput1 = document.getElementById("input1").value;
    const num1 = parseFloat(eInput1);

    if (isNaN(num1)) {
        alert("Please enter a valid number in the first input!");
        return;
    }

    const result = Math.sqrt(num1);
    document.getElementById('output').value = result;
}

function logarithm() {
    const eInput1 = document.getElementById("input1").value;
    const num1 = parseFloat(eInput1);

    if (isNaN(num1) || num1 <= 0) {
        alert("Please enter a valid positive number in the first input!");
        return;
    }

    const result = Math.log10(num1);
    document.getElementById('output').value = result;
}
