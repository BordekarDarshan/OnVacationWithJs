// Chrome developer tools will be better.

let arrayRandom = [];

console.log(arrayRandom.__proto__);
console.log(arrayRandom.__proto__.__proto__);

function functionRandom() {}

console.log(functionRandom.__proto__);
console.log(functionRandom.__proto__.__proto__);

// Base Object    <=   Object  <=    Own or Local object [Created By Developer].
// log(anyObject.__proto__.__proto__) <= log(anyObject.__proto__) <= Let anyObject = {}

// Base Array - Array - Own or Local Array [Created By Developer].
// Base Function - Function - Own or Local Function [Created By Developer].
