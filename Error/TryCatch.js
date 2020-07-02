// 3 ways to catch error
// catch block.
// try-catch block.
// catch() method

const { log } = require("console");

function fail() {
  try {
    // error ocuured so it will jump to catch block
    consol.log("pass");
    throw new Error("error occured");
  } catch (error) {
    // catch block accepts parameter. an error object.
    console.log(error.message);
  } finally {
    // no matter what happens in try-catch block finally execute its code  .
    console.log("I dont't care about try and catch");
  }
  let variable = "Darshan";
  console.log(variable);
}

fail();

// we can do try-catch nesting
try {
  try {
    a();
  } catch (error) {
    throw new Error(error);
  }
} catch (error) {
  console.log("phew, ", error.message);
}

// Above code is synchronous but what happens when we write async code.
// for that we have asunc error handling.

try {
  setTimeout(function () {
    varWhichIsNotDefined;
  }, 2000);
} catch (error) {
  console.log("Got it", error.message);
}

// it will give output 1/2 but it will work in browser's console,
// not here becasue this is node js runtime it will handle error differently.
