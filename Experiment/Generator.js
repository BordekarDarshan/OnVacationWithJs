function* gen(i) {
  yield i;
  yield i + 10;
  return 10;
}

// When we invoke the generator function it returns an object.
const result = gen(5);

// To resume the execution.
// Object contains 2 prop value and done.

let again = result.next();
// { value: 5, done: false }
let oneMore = result.next();
console.log(oneMore);
// { value: 15, done: false }
let oneMoreAgain = result.next();
console.log(oneMoreAgain);
// { value: 10 , done: true }
