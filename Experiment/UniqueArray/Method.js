const demoArr = [1, 2];
function forEachMethod(array) {
  array.forEach((element) => {
    array.push(44);
  });
}
forEachMethod(demoArr);
console.log(demoArr);
