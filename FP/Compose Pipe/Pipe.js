// Gose from left to right
// (fun1,fun2,fun3) => fun3(fun2(fun1()))

const tellName = (input) => `my name is ${input}`;
const upper = (input) => input.toUpperCase();
const pipe = (oprOne, oprTwo) => (data) => oprTwo(oprOne(data));
const tellNameWithUpper = pipe(tellName, upper);
let result = tellNameWithUpper("darshan");
console.log(result);
