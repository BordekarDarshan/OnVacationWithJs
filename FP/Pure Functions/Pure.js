// Function has to return the same output give the same input.
// Function cannot modify anything outside of itself. [No side - effects].

// [1] input === output

function add(numOne, numTwo) {
  return numOne + numTwo;
}
add(2, 4);

function multiply(num) {
  return num * 2;
}
// Referential Transparancy

let result = multiply(add(2, 4));
let output = multiply(6);

console.log("result", result, "output", output);
// Referential Transparancy says that if i change add(2, 4) in  multiply(add(2, 4)) to "6",
// will it have any effect on the program ?
// No, because of this "input === output" no matter what is input if they
// are the same its always going to give me the same output.

// [2] No Side Effects.

const globalArray = [1, 2, 3];

function modifyArrayPure(arr) {
  const array = [].concat(arr);
  array.forEach((item) => array.push(42));
  return array;
}

function multiplyPure(arr) {
  return arr.map((item) => item * 2);
}

const modifyArrayOne = modifyArrayPure(globalArray);
const modifyArrayTwo = multiplyPure(globalArray);

console.log(globalArray, modifyArrayOne, modifyArrayTwo);

// functions "add", "multiply" are pure functions because they are not
// touching any of the outside world. No Side Effects.
// plus input === output.

// Note : The goal of the "F.P." is not to make everything pure functions.
// The is to minimize the side effects.

// Use Case :
// Organize your code with there is a specific part that has side effects,
// but when you have bug you know right away to go to that spot because
// that's where the side effects are happening.
// Rest of your code is just a pure functions.

// Goal : isolate side-effects => DB and API calls. so your code becomes predictable
// and easier to find bug
// You can't make your project 100% pure.
