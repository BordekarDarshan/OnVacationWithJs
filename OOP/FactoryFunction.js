let methodStore = {
  welcome() {
    console.log(`Welocome ${this.personName} Your room is ${this.roomNo}`);
  },
};

function residentHotelFactory(personName, roomNo) {
  return {
    personName,
    roomNo,
  };
}

let person = residentHotelFactory("Darshan", "901");
person.welcomeMethod = methodStore.welcome;
person.welcomeMethod();

// properties name and weapons are okay but is there any way we can cetralize "attack()" function.
// Yes
