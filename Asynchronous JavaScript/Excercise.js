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
// fetch(urls[0])
//   .then((res) => res.json())
//   .then((data) => console.log(data));

Promise.resolve("WithResolve").then((data) => console.log(data));
