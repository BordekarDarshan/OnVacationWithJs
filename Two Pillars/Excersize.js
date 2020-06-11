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
