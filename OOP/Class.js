// Inheritance.
class random {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Welcome ${this.name}`;
  }
}
let instance = new random("Darshan");
instance.greet();

class other extends random {
  constructor(empId, name) {
    super(name);
    this.empId = empId;
  }

  infoEmp() {
    console.log(this);
    return `${this.greet()} your employee id is ${this.empId}`;
  }
}

let instanceOther = new other(101, "Ani");
let result = instanceOther.infoEmp();
console.log(result);
