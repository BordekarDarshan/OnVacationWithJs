const random = {
  name: "billy",
  sing() {
    console.log(this);
    let another = function () {
      console.log(this);
    };
    another();
  },
};

// random.sing();

// Method "another" is bound to global world
// How do we connect method "another" to "random" ?

// [1] Arrow Function.

// [2] that = this

const arbitary = {
  name: "billy",
  sing() {
    console.log(this);
    let that = this;
    let another = function () {
      console.log(that);
      console.log(that.name);
    };
    another();
  },
};

// arbitary.sing();

// [3] Bind

const demo = {
  name: "billy",
  sing() {
    console.log(this);
    let another = function () {
      console.log(this);
    };
    // Because we are doing this ouside of inner function "another".
    // and outside "this" is bound to the object "demo"
    return another.bind(this);
  },
};
// "()()" because "sing" function return function "another", in order to execute that

demo.sing()();
