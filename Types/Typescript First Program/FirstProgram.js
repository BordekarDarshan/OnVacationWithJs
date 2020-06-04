"use strict";
exports.__esModule = true;

var sum = function (a, b) {
  return a + b;
};
var result = sum(1, 5);
console.log(result);

function timeSaver(msg) {
  console.log(msg);
}
timeSaver("Now You Don't have to write [tsc 'Program name'] command everytime");
