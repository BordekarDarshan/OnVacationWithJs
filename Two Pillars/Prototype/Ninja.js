let animal = {
  name: "Leo",
  energy: 10,
  eat() {
    console.log(`${this.name} is eating`);
    return true;
  },
};

animal.eat();

// In case we want to crete multiple animals.
// Factory Function.

function animalFactory(name, energy) {
  let animal = {};

  animal.name = name;
  animal.energy = energy;
  animal.eat = function () {
    console.log(`${this.name} is eating`);
  };
  return animal;
}

let animalFactoryFunction = animalFactory("Leo", 100);
animalFactoryFunction.eat();
