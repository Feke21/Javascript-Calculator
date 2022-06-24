const operator = prompt('Enter operator ( either +, -, * or / ):');

let number1 = parseInt(prompt('Enter first number:'));
let number2 = parseInt(prompt('Enter second number:'));

let result;

// using if...else if... else
if (operator == '+') {
    z = number1 + number2;
	alert(z);
}
else if (operator == '-') {
    a = number1 - number2;
	alert(a);
}
else if (operator == '*') {
    b = number1 * number2;
	alert(b);
}
else {
    c = number1 / number2;
	alert(c);
}


