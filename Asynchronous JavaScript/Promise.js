// ES6 feature of javascript.
// promise is an object that may produce a single value, some time in the future.
// Either a resolve value or reject

// promise may be in one of three possible states.
// fullfilled
// rejected
// pending

const promiseOne = new Promise((res) => res("Heyy"));

const promiseTwo = (data) => new Promise((res) => res(`${data} Brother`));

const promiseThree = (data) =>
  new Promise((res) => setTimeout(res, 5000, `${data}!!!!`));

promiseOne.then((value) => {
  promiseTwo(value).then((value) =>
    promiseThree(value).then((Data) => console.log(Data))
  );
});

Promise.all([promiseOne, promiseTwo("hii"), promiseThree("!")]).then((Data) => {
  const [promiseOne, promiseTwo, promiseThree] = Data;
  console.log(promiseOne, promiseTwo, promiseThree);
});
