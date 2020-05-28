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
