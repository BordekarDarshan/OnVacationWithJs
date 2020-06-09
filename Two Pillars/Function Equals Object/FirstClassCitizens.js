// Function has a great power in javascript.
// Function is a first class citizen.
// It has some superpowers.\

function firstClass(arg) {
  console.log(`Class A ${arg}`);
}
// First Power. function expression... assign function to a variable.
let objectDemo = {
  storeFunction: firstClass("Hii"),
};

objectDemo.storeFunction;

// Second Power. Pass function as an argument.
function HOF(funPara) {
  funPara("Hello");
}
HOF(firstClass);
HOF(() => console.log("Arrow Function"));

// Third Power. Can return functions as values from other functions.

function any() {
  return firstClass("We can return Function also");
}
any();

function oneMore() {
  return function innerOne() {
    console.log("Third power of return functions as values");
  };
}
oneMore()();
