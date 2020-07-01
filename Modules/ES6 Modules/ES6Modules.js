let harry = "harry";
let voldemort = "he who must not ne named";

export function fightWithEs(oponent1, oponent2) {
  let attack1 = Math.floor(Math.random() * oponent1.length);
  let attack2 = Math.floor(Math.random() * oponent2.length);

  return attack1 > attack2 ? `${oponent1} wins` : `${oponent2} wins`;
}

// Because of modules we have now reusable functions and code.
// code becomes maintainable because of that.
// we are able to separate concerns and divide up our program into smaller chunks.
// avoided global namespace pollution.
// we can now compose different modules to create new modules or functionality to programs.
// now can use 3rd party packages [npm].
