// Way to apply partial application.

const multiply = (a, b, c) => a * b * c;

const partialMultiply = multiply.bind(this, 5);

console.log(partialMultiply, "Bound Multiply");

let result = partialMultiply(4, 5);
console.log(result);

// Bind is very usefull.
// Because with bind we created new function "partialMultiply". bind returns new function.
// with first parameter 5.
// what to give in first parameter of bind [this,null] depend on condition.

// we made multiply reusable.
// Note partial application is little different than currying.
// Because unlike currying we ain't giving one parameter at a time (a)=>(b)=>(c). we are giving all parameters at once (a,b,c)

// In Partial application we expect all arguments in second call.
// Currying we expect one parameter at a time.

// Watch "Foundation Part Two" 22 episode.
