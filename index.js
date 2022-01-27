const operator = prompt('Enter a operator ');

const operand1 = prompt('enter first operand');
const operand2 = prompt('enter second operand');

var result = 0;

if (operator === '+') {
    result = operand1 + operand2;
} else if (operator === '-') {
    result = operand1 - operand2;
} else if (operator === '*') {
    result = operand1 * operand2;
} else {
    result = operand1 / operand2;
}

console.log(result);