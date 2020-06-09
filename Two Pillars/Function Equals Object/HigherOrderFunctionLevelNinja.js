// I think it's can be example of currying also.

function multiply(num1) {
  return function multiplyReusable(num2) {
    console.log(num1 * num2);
  };
}

let multiplyBy = multiply(2);

let byThree = multiplyBy(3);

let byTen = multiplyBy(10);

// More Cleaner Way with Arrow Function.

const additionArrow = (num1) => (num2) => console.log(num1 + num2);

let additionBy = additionArrow(4);

let ByFour = additionBy(4);
