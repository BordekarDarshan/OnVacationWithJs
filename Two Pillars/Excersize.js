Date.prototype.getLastYear = function () {
  return this.getFullYear() - 1;
};

let lastYearIs = new Date().getLastYear();
console.log(lastYearIs);
