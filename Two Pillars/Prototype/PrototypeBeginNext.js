let father = {
  name: "Babaji",
  age: 64,
  intro() {
    console.log(`My name is ${this.name} and my age is ${this.age}`);
  },
};

let son = {
  name: "Darshan",
  age: 21,
};
son.__proto__ = father;

son.intro();

let verify = father.isPrototypeOf(son);
// Prototype Chain is son => Father

console.log(verify ? `Yes` : `No`);

father.__proto__ = { propertyAddedByProto: "Hiii" };
console.log(son.__proto__);
console.log(son.__proto__.__proto__);
// son => Father => {A:'Hiii'} => Base Object

for (let prop in son) {
  // "hasOwnProperty" shows only properties that belongs to son not father Object.
  if (son.hasOwnProperty(prop)) {
    console.log(`${prop} `);
  }
}

for (let prop in father) {
  console.log(`${prop}`);
}
