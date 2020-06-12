let methodStore = {
  welcome() {
    console.log(`Welocome ${this.personName} Your room is ${this.roomNo}`);
  },
};

function residentHotelFactory(personName, roomNo) {
  let newObjectHereToHelp = Object.create(methodStore);
  (newObjectHereToHelp.personName = personName),
    (newObjectHereToHelp.roomNo = roomNo);
  return newObjectHereToHelp;
  //console.log(newObjectHereToHelp.__proto__);
  //console.log(methodStore.isPrototypeOf(newObjectHereToHelp));
}

let person = residentHotelFactory("Darshan", "901");
person.welcome();
