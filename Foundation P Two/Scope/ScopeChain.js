let variableDefineInGlobalExecutionContext = "Global";

function functionExecutionContext() {
  console.log(variableDefineInGlobalExecutionContext);
}

functionExecutionContext();

// After searching in it's own execution context, functionExecutionContext doesn't find any variable named "variableDefineInGlobalExecutionContext".
// So, it's going to look to it's closest parent element.
// in this case global execution context is the closest parent of "functionExecutionContext".
// It will find "variableDefineInGlobalExecutionContext" variable in global execution context.

function innerA() {
  console.log("First");
  function innerB() {
    console.log("Second");
    function innerC() {
      console.log("Third");
    }
    innerC();
  }
  innerB();
}
innerA();
