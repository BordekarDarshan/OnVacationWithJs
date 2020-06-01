function reusableData() {
  console.log(this.candidate);
}

let Personal = {
  candidate: "Ani",
  reusableData,
};

Personal.reusableData();
