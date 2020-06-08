// Ways To call Functions

const callFromObject = {
  name: "Trying Something Different",
  actualFunction() {
    console.log(`Function is method in object. ${this.name}`);
  },
};

callFromObject.actualFunction();

function intoTheNight(anotherMessage, name = "") {
  console.log("Season One");
  console.log(anotherMessage);
  console.log(name);
}

intoTheNight("Shorthand Property");
intoTheNight.call(this, "Season Two will be out soon!!");
intoTheNight.call("Hello", callFromObject.name);
