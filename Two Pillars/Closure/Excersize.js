let view = undefined;
function initialize() {
  view = "Home Page";
  console.log("Page has been initialized");
}
initialize();
initialize();
console.log(view);

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
