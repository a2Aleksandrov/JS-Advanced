function MathOperations(num1, num2, operator) {
    let result = 0;
    if (operator == '+') {
        result = num1 + num2;
    } else if (operator == '-') {
        result = num1 - num2;
    } else if (operator == '*') {
        result = num1 * num2;
    } else if (operator == '/') {
        result = num1 / num2;
    } else if (operator == '%') {
        result = num1 % num2;
    } else if (operator == '**') {
        result = num1 ** num2;
    }
    console.log(result);
}
MathOperations(5, 6, '+');
MathOperations(3, 5.5, '*');