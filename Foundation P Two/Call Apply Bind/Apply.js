const giver = {
  name: "Darshan",
  Number: 100000,
  information(...spare) {
    return `My number is ${this.Number} and my other numbers are ${spare}`;
  },
};

const taker = {
  name: "Ani",
  Number: 300000,
};

let result = giver.information.call(taker, [123256, 565432, 876504]);
console.log(result);

// The only difference between call and apply is instead of taking parameters individually
// it takes parameter in array
