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

let certificate = marry({ husband: "John" }, { woman: "Ann" });
console.log(certificate);
