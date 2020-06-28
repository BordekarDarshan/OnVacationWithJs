const giver = {
  name: "Darshan",
  Number: 100000,
  information(spare, other) {
    return `My number is ${this.Number} and my other numbers are ${spare} and ${other}`;
  },
};

const taker = {
  name: "Ani",
  Number: 300000,
};

let result = giver.information.bind(taker, 343);
let other = result(34);
console.log(other);

// giver.information.bind([what "this" should be bound],parameters)
// bind returns a new function with certain ["context" and "parameters"] => [important]

// bind is usually used when we want a function to be called later on
// with certain type of context.

// bind allow us to store "this" keyword or the function borrowing for
// later use.

// see line 14 we call bind "information" to "taker"and we called only
// First parameter "343". so now we call "result" anytime we want with
// "remaining Parameters"
// this concept is known as "partial Application"
