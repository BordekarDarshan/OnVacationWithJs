const fetch = require("cross-fetch");
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/todos",
  "https://jsonplacholder.typicode.com/posts",
];

// Promise.all(
//   urls.map((url) => {
//     return fetch(url).then((res) => res.json());
//   })
// ).then((result) => console.log(result[0]));

urls.map((url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
});

// Fetch simply returns a promise
// if you don "fetch(urls[0])" something like this you will get
// Promise(<pending>)

// fetch(urls[0])
//   .then((res) => res.json())
//   .then((data) => console.log(data));

Promise.resolve("WithResolve").then((data) => console.log(data));

// Note : if you apply catch before "then" and that "then" which is after
// "catch" has some error so because of catch placed before "then" it won't
// catch any error.
// so, apply catch at the end is considered as good practice.

// promises cannot be failed or succeed twice, it can be only once.
