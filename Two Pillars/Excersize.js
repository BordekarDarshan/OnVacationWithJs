Date.prototype.getLastYear = function () {
  return this.getFullYear() - 1;
};

let lastYearIs = new Date().getLastYear();
console.log(lastYearIs);

Array.prototype.map = function () {
  let array = [];
  for (i = 0; i < this.length; i++) {
    array.push(this[i] + " Number");
  }
  return array;
};
console.log([1, 2, 3, 4].map());

Array.prototype.findGreatest = function () {
  let array = [];
  let convertArray = [];
  let message = undefined;

  for (let i = 0; i < this.length; i++) {
    let uniqueValue = new Set(this);
    convertArray = Array.from(uniqueValue);

    this.length === 1 ? (message = "throw your laptop man") : null;

    this.length === 2 && this[i] === this[i + 1]
      ? (message = "Nice Try")
      : null;

    convertArray.length === 1 ? array.push(convertArray[0]) : null;

    convertArray[i] >= (convertArray[i + 1] || convertArray[i - 1])
      ? array.push(convertArray[i])
      : null;
  }

  return message || array[0];
};

console.log([6, 6, 6, 7, 6, 6].findGreatest());

// Find last element.
// Array[Array.length - 1]
