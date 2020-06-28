// Way to apply partial application.

const multiply = (a, b, c) => a * b * c;

const partialMultiply = multiply.bind(null, 5);
console.log(partialMultiply);
console.log(multiply);

let result = partialMultiply(4, 5);
console.log(result);
