// Goes from right to left.
// (fun1,fun2,fun3) => fun1(fun2(fun3()))

const multiply = (input) => input * 3;
const positive = (input) => Math.abs(input);

const compose = (oprOne, oprTwo) => (data) => oprOne(oprTwo(data));
const multiplyThenPositive = compose(multiply, positive);

let result = multiplyThenPositive(-10);
console.log(result);

// Aim is to conver negative number to positive and multiply by 3
// for this we needed 2 funtion
// one => for conversion
// two => for multiply
// first we created our main aim function "multiplyThenPositive" it saves the return of compose function.[compose function retruns function.]
// then we create "compose" function who takes 2 function as parameter [positive, multiply]. and returns function.
// which get stored in "multiplyThenPositive".
// the we call "multiplyThenPositive" by 10.
