function stepFive() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Loading......");
      resolve(
        "Complier takes that code and optimize that code into machine code and replace particular section with machine code."
      );
    }, 2000);
  });
}

function stepFour() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Loading......");
      resolve(
        "Profiler in JS engine continuously checks if there is any optimization we can do.\nif some optimization is there like,\nSome Section of the code is being repeated so profiler notes down that changes and interpreter gives that section to compiler.\n"
      );
    }, 2000);
  });
}

function stepThree() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        "AST is passed to the Interpreter. Interpreter process that AST and spit out Byte Code.\n"
      );
    }, 3000);
  });
}

function stepTwo() {
  return new Promise((resolve) => {
    resolve("Creates the AST.\n");
  });
}

function stepOne() {
  return new Promise((resolve) => {
    resolve("Parse The JS File.\n");
  });
}

stepOne().then((promiseData) => {
  console.log(promiseData);
  stepTwo().then((Data) => {
    console.log(Data);
    stepThree().then((Item) => {
      console.log(Item);
      stepFour().then((Info) => {
        console.log(Info);
        stepFive().then((Content) => {
          console.log(Content);
        });
      });
    });
  });
});
