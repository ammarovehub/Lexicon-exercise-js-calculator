alert("Welcome to your brand new calculator!")

// Ask about the first number
let fNumber = parseFloat(prompt("Enter the first number."));

// Ask about the second number
let sNumber = parseFloat(prompt("Enter another number."));

// Ask about an operator 
let operator = prompt("please select one of the following operators (+, -, *, /).");

// Creating a new result variable
let result;

// The mathematical operation
if (operator === "+") {
    result = fNumber + sNumber;
    alert(`The result of ${fNumber} + ${sNumber} is ${result}`);
}
else if (operator === "-") {
    result = fNumber - sNumber;
    alert(`The result of ${fNumber} - ${sNumber} is ${result}`)
}

else if (
    alert("Please use the correct operator.")
)

alert("Take care")