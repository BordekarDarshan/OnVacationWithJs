// HOF is like we get the superpower of both function() and function with parameter function(a,b)

// HOF is function which either takes a function as an argument or returns a new function.

function giveAccessTo(person) {
  console.log(`Gave access To ${person}`);
}

function showPersonInfo(personName, Role, Postion, password) {
  console.log(
    `Personal Information: Name ${personName} | Role ${Role} | Position ${Postion} | password ${password}`
  );
}

function verifyPerson(roleOfPerson, personName, fn) {
  if (roleOfPerson === "user") {
    console.log(`Welcome ${personName}`);
    fn(personName, roleOfPerson, "React Developer", "dexter@18");
  }
  if (roleOfPerson === "admin") {
    console.log(`Welcome ${personName}`);
    fn(personName, roleOfPerson, "React Developer", "dexter@18");
  }
  return giveAccessTo(personName);
}

verifyPerson("admin", "Darshan", showPersonInfo);
