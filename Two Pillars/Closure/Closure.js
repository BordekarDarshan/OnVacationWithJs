function outer() {
  let outerVar = "Hey";
  return function inner(name) {
    let innerVar = name;
    console.log(`${outerVar} ${innerVar}`);
  };
}

let hey = outer();
let heyWho = hey("Darshan");

// More Complicated.

function closureWithAsync() {
  let reallyMatters = "What...";
  setTimeout(function inner() {
    console.log(reallyMatters, below);
  }, 4000);
  let below = "below setTimeout() ?";
  //It doesn't matter where you declare variable because of setTimeout, setTimeout will get transfer To WebAPI and it takes 4 seconds to execute meanwhile function "closureWithAsync" will be done with its execution.
}

closureWithAsync();
