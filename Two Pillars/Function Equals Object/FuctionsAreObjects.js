// Ways To call Functions

//[1]
const callFromObject = {
  name: "Trying Something Different",
  actualFunction() {
    console.log(`Function is method in object. ${this.name}`);
  },
};

callFromObject.actualFunction();

// [2]
function intoTheNight(anotherMessage, name = "") {
  console.log("Season One");
  console.log(anotherMessage);
  console.log(name);
}

intoTheNight("Shorthand Property");
intoTheNight.call(this, "Season Two will be out soon!!");
intoTheNight.call(
  this,
  callFromObject.name,
  "name Parameter While Calling This And Name From Object"
);

// [3]
let otherWay = new Function("num", "return num");
let displayNum = otherWay(4);
console.log(displayNum);

// [4] Callable Object.

function callableObject() {
  console.log("random");
}

callableObject.weCanAddProperty = "weAddedPropertyToAFunction";
callableObject();
console.log(callableObject.weCanAddProperty);
