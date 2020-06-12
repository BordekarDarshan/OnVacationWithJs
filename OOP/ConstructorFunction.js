function constructorFunction(name, room) {
  this.name = name;
  this.room = room;
}
constructorFunction.prototype.canAddMethodBecauseConstructorFunction = function () {
  console.log(`Welcome ${this.name} Your room is ${this.room}`);
};
let firstInstance = new constructorFunction("Darshan", 901);
firstInstance.canAddMethodBecauseConstructorFunction();
