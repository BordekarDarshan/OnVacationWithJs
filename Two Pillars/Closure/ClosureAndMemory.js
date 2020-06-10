// Closure
function enhanced() {
  let randomArray = new Array(300);
  randomArray.fill("Darshan");
  console.log("created !");
  return function (index) {
    console.log(randomArray[index]);
  };
}

let display = enhanced();
display(23);
display(23);
display(23);

// Normal Function.
function normalFun(index) {
  let randomArray = new Array(300);
  randomArray.fill("Ani");
  console.log("created Again !");
  console.log(randomArray[index]);
}

normalFun(23);
normalFun(23);
normalFun(23);

// In Normal Way, each time we invoked function, array will create each time. which is not so performance friendly.
