const { default: fetch } = require("cross-fetch");

const promiseHandle = new Promise((res) =>
  res(fetch("https://jsonplaceholder.typicode.com/users"))
);

async function asyncAwait() {
  const usepromiseHandle = await promiseHandle
    .then((data) => data.json())
    .then((data) => data.map((data) => data.name))
    .catch((err) => err)
    .finally(() => console.log("Finally Triggered"));

  return usepromiseHandle;
}

// async await return promise but in some cases you will need values from that function
// for that you can call promise value just after invokation
// see line "20"
let result = asyncAwait().then((data) => console.log(data));
// "console.log(result)" will give you "Promise { <pending> }"
// because asyncAwait() takes time to fetch data by that time
// "console.log(result)" will execute already because
// "console.log(result)" is synchronous.

// For temporary solution you can do this
// setTimeout(() => console.log(result), 5000);

// But you can do this also
console.log(result);
