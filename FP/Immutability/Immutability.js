// Immutability is vary important.Not Changing the data or state.
// In FP, we can change things inside of our function but we don't want to affect the outside world [code].

const obj = { name: "Darshan" };

function clone(obj) {
  // Destructure.
  return { ...obj };
}

// mutate the state.
// obj.name = "Ani"

let result = clone(obj);

// Here if we want to udate the property then we can create new function
// so in this way we are not messing with outside world.

function updateproperty(obj) {
  let newObj = clone(obj);
  // here we get cloned object with function "clone"
  newObj.name = "Ani";
  return newObj;
}

let immutable = updateproperty(obj);
console.log(immutable, obj);

// This is how you can maintain immutabillity.

// Important => structural sharing.
