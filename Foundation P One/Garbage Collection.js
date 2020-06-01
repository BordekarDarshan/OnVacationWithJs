let user = {
  name: "Darshan",
};

let admin = user;

user = null;

console.log(admin);

function marry(man, woman) {
  man.wife = woman;
  woman.husband = man;

  return {
    father: man,
    mother: woman,
  };
}

let family = marry(
  {
    name: "John",
  },
  {
    name: "Ann",
  }
);

console.log(family);
