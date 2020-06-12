function makeReusableAbdGeneric(name, weapon) {
  return {
    name,
    weapon,
  };
}
let centralize = {
  attack() {
    console.log(`${this.name} Attack With ${this.weapon}`);
  },
};

let firstMan = makeReusableAbdGeneric("Darshan", "Needle");
firstMan.attackBorrow = centralize.attack;
firstMan.attackBorrow();

let secondMan = makeReusableAbdGeneric("Ani", "Jutsu");
secondMan.attackBorrow = centralize.attack;
secondMan.attackBorrow();

// properties name and weapons are okay but is there any way we can cetralize "attack()" function.
// Yes
