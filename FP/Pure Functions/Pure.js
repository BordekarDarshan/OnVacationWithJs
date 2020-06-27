// Function has to return the same output give the same input.
// Function cannot modify anything outside of itself. [No side - effects].

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
