// we want user inputs that's why we created function otherwise we could
// have just created normal promise [const promisify=new Promise()]

const promisify = (item, timer) =>
  new Promise((res) => setTimeout(() => res(item), timer));

// here we invoked multiple parametered promise
const a = promisify("a", 1000);
const b = promisify("b", 3000);
const c = promisify("c", 5000);

async function parallel() {
  const promises = [a, b, c];
  const [op1, op2, op3] = await Promise.all(promises);
  return `parallel is done ${op1} ${op2} ${op3}`;
}

parallel().then(console.log);

async function race() {
  const promises = [a, b, c];
  const op1 = await Promise.race(promises);
  return `race has finished winner is ${op1}`;
}

race().then(console.log);

async function sequence() {
  const op1 = await a;
  const op2 = await b;
  const op3 = await c;
  return `sequence is done ${op1} ${op2} ${op3}`;
}

sequence().then(console.log);
