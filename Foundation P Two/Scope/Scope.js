// Sope is current context of execution.
// Where variables are accessible.

// Example.
function scope() {
  let hello = "hello";
}

scope();
// Now, if we try to access the "hello" variable we can't, because it is in different execution context means "Funtion execution context" and we are in global execution context

// Example.
function first() {
  var handle = "Darshan";
  console.log(handle);
}

function second() {
  var handle = "Ani";
  console.log(handle);
}

console.log(handle);

first();
second();

var handle = "uday"; // If we write "let" or "const" instead of "var" it won't hoist. It will give you an error.
console.log(handle);

// So, what if the variable is not available locally like, "hadle" in the current execution context.
// For that go to the scopeChain.
