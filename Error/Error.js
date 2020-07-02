// In javascript we have an native error constructor function.
// console.log(Error);

// we can create new instances with "new"
// console.log(new Error("something is wrong"));

// when we use throw keyword means when we throw something between script
// current running script stops executing

function throwError() {
  console.log("First");
  // throw is use to define errors
  // During runtime when we run our JS and when "throw" encountered by the program the execution of the current function will stop and
  // controll will be passed to the next part of the call stack.
  throw new Error("Wrrong");
}
//throwError();

// we can throw other than Error. [boolean, string, number]

// throw "String";
// Note : If you write code after throw that code becomes "unreachable".
// throw 1;
// throw true;

// This Error has 3 built-in properties.
// [name,message,stack]

function trace() {
  const myError = new Error("what a drag!");
  const { name, message, stack } = myError;
  console.log(name, message, stack);
}

// trace();

// It will give you the output
// at trace[Function name] (D:\OnVacationWithJs\Error\Error.js:30:19)[location]
// because you use stack.

// JS has built-in constructors for errors.
// [new Error,new SyntaxError, new ReferenceError]

function refError() {
  try {
    let;
  } catch (error) {
    console.log("fail |", error.message);
  }
}
refError();

// onError() give error in red text if you didnt catch error in js file.
// then process.on("uncaughtException")
// because you didnt metion catch in your js file.
