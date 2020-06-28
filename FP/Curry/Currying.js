function normalFunction(a, b) {
  return a * b;
}
normalFunction(5, 4);

// Curried Function [Takes one parameter at a time.]
const makeCurry = (a) => (b) => a * b;

let reusableCurry = makeCurry(5);
let addThingsInCurry = reusableCurry(4);

// Note we run "makeCurry" Only once
let addThingsInCurryAgain = reusableCurry(5);
console.log(addThingsInCurry, addThingsInCurryAgain);

// currying remind you those methods on prototype that were shared amongst object.
// In this we made function "makeCurry" sharable.
// Memory Saved.
