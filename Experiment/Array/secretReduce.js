function genNumOne(n, m) {
  return n + m;
}

function genNumTwo(n) {
  return n + 1;
}

function genNumThree(n) {
  return n + 2;
}

const compose = (opr, oprAgain) => (...data) => opr(oprAgain(...data));

const getGetAdd = (...functions) => functions.reduce(compose);

const result = getGetAdd(genNumThree, genNumTwo, genNumOne);

const final = result(3, 5);
console.log(final);
// genNumOne. => genNumTwo. => genNumThree.
//const getGetAdd = genNumTwo(genNumOne());
