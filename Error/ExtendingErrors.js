// This error is now reusable and you create this type of errors as much as you want.
// so in case if you dont want to give to much information from some error you can create such custom errors.

class variableNotDefinedError extends Error {
  constructor(message, name) {
    super(message, name);
    this.name = "Reference error";
    this.message = "variable not defined";

    // this.customProp = "This is custom Property"
  }
}
const newCustomError = new variableNotDefinedError();
// we created instances from each errors
// same as when we cretate instance of [SyntaxError,ReferenceError,Error]
// let instance = new SyntaxError()

function Test(err, errName) {
  try {
    consol.log("Pass");
  } catch {
    console.log(err, errName);
  }
}

Test(newCustomError.name, newCustomError.message);

// SyntaxError,ReferenceError are unavoidable and unhandled expression like these is like we are showing users our program is broken.
// i have to learn how to handle errors correctly.
