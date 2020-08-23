let array = [1, 2, 3, 4, 5];
let cursor = 0;

function moveNext() {
  cursor = cursor + 1;
  cursor = cursor % array.length;
  return array[cursor];
}

function movePrev() {
  if (cursor === 0) {
    cursor = array.length - 1;
    return array[cursor];
  }
  cursor = cursor - 1;
  return array[cursor];
}

document.getElementById("prev").addEventListener("click", () => {
  document.getElementById("output").innerHTML = movePrev();
});

document.getElementById("next").addEventListener("click", () => {
  document.getElementById("output").innerHTML = moveNext();
});

document.getElementById("output").innerHTML = array[0];

// Class can be multiple thats why we don't get addEventListener on "getElementsByClassName"
