const giver = {
  name: "Darshan",
  Number: 100000,
  information(spare) {
    return `My number is ${this.Number} and my other number is ${spare}`;
  },
};

const taker = {
  name: "Ani",
  Number: 300000,
};

let result = giver.information.call(taker, 123256);
// call "information" instead of using "giver" user "taker"
console.log(result);

// giver.information.call([what "this" should be bound],[parameters if any])
