function findGreatest(...bringItOn) {
  let array = [];
  let convertArray = [];
  let message = undefined;

  for (let i = 0; i < bringItOn.length; i++) {
    let uniqueValue = new Set(bringItOn);
    convertArray = Array.from(uniqueValue);

    bringItOn.length === 1 ? (message = "throw your laptop man") : null;

    bringItOn.length === 2 && bringItOn[i] === bringItOn[i + 1]
      ? (message = "Nice Try")
      : null;

    convertArray.length === 1 ? array.push(convertArray[0]) : null;

    convertArray[i] >= (convertArray[i + 1] || convertArray[i - 1])
      ? array.push(convertArray[i])
      : null;
  }

  return message || array[0];
}

let begin = findGreatest(21, 34, 35, 35);
console.log(begin);
