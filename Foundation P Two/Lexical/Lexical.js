// Lexical is where you write the code. Where the code is defined.

function one() {
  return two();
}

function two() {
  return three();
}

function three() {
  console.log("You are in function three.");
}

one();

// Based on meaning "Function [one] [two] [three]" are in global scope.
