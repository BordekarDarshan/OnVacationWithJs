export {};

const sum = (a: number, b: number) => {
  return a + b;
};
const result = sum(1, 5);
console.log(result);

function timeSaver(msg: string) {
  console.log(msg);
}
timeSaver("Now You Don't have to write [tsc 'Program name'] command everytime");
