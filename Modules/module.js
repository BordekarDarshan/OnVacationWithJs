// programs => way for us to modify data and variables.
// modules give us a better way to organize these variables and functions so that we can group these variables and functions that make sense together in terms of organizing things in JS.
// many thing defined in global scopr generates "tight coupling issue.
// polluting global namespaces cause possible memory leaks [maybe window object will ran out of space].

// use case
// we have 1000 lines of JS file and we are polluting global namespaces
// and global variables. because of this now they are tightly coupled.

// [3 Ways] we can organize and create modules
// module pattern
// commonJS, amd, umd
// es modules

// 4 scope.
// global
// module
// function
// block

// we can create module scope with module pattern.
// with the help of closure and encapsulation.

// IIFE
// declaring module "fightmodule".
// we can now export fightmodule with export keyword.
// in this we are revealing on on variable to global namespace instead of whole code.

let fightmodule = (function () {
  let harry = "harry";
  let voldemort = "he who must not ne named";

  function fight(oponent1, oponent2) {
    let attack1 = Math.floor(Math.random() * oponent1.length);
    let attack2 = Math.floor(Math.random() * oponent2.length);

    return attack1 > attack2 ? `${oponent1} wins` : `${oponent2} wins`;
  }
  // this phase of return called revealing module pattern
  // think this "return" as a public entity that we want to provide other modules.
  return {
    // the things you want to give access to other modules mention here.
    fight: fight,
  };
  // here we created closure
  // closures are created when nested function are there
  // fight is inner function.

  // so fight will create closure scope. so even after IIFE done executing
  // we still have access to outer scope variables[harry,voldemort].

  // from this pattern we can create private varibles, also we can reveal or return or provide some
  // methods or variables for other modules that we want.

  // so from this pattern, what things we want to keep public or private, we can decide that also
})();

// Now because of IIFE variables harry, voldmort and function fight
// are not polluting global world.

// module saves you from polluting global namespace.
// Try this to make sure your module is working properly or not.
// remove IIFE open index page in browser, now harry, voldemort, fight you can access in console
// but when you wrap harry, voldemort, fight with IIFE these wont be accessible.

// 4.pros and cons 01:39 | 2:36 |

// cons module pattern.
// Technically we are still polluting the global namespace [fightmodule variable]
// order of <script></script> is one issue.
// if we call the jquery script after supportScript, script won't work.
