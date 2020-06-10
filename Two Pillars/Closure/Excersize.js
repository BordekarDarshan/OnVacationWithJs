// [1]
//Because Page Shouldn't have initialize more that 4 times.

function initialize() {
  view = "Home Page";
  console.log("Page has been initialized");
}
initialize();
initialize();

// Closure Way
const closureInitialized = () => {
  let called = 0;
  return () => {
    called > 0
      ? null
      : (called++, console.log("Page has been initialized Again"));
  };
};

let closureMethod = closureInitialized();
closureMethod();
closureMethod();

// [2]
const array = [1, 2, 3, 4];
for (var index = 0; index < array.length; index++) {
  setTimeout(() => {
    console.log("I am at index " + index);
  }, 3);
}

for (let index = 0; index < array.length; index++) {
  setTimeout(() => {
    console.log("I am at index with let " + array[index]);
  });
}

for (var index = 0; index < array.length; index++) {
  (function (closureI) {
    setTimeout(() => {
      console.log("I am at index with IIFE " + array[closureI]);
    });
  })(index);
}
