// ES8 feature.
// It is built on top of promises.
// The goal with async await is to make code look synchronous.
// a code that looks synchronous but it is asynchronous

// Remember: promise is like IOU[I owe you]. i promise to return something to you in future.

// async-await code are just promises.
// async-await are just a syntactic sugar, which does the same thing.

// What await keyword says, hey pause this function until "i have somthing for you"
// (untill it gets resolved)

const { default: fetch } = require("cross-fetch");

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => data.json())
//   .then((data) => data.map((item) => console.log(item.name)));

// async function getName() {
//   const reponse = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await reponse.json();
//   const result = data.map((item) => console.log(item.name));
//   return result;
// }
// getName();

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/todos",
  "https://jsonplaceholder.typicode.com/posts",
];

// async function getUser() {
//   const [user, post, todo] = await Promise.all(
//     urls.map((url) => fetch(url).then((res) => res.json()))
//   );

//   console.log(user, post, todo);
// }

// getUser()

function getUserWihoutAll() {
  try {
    let [user, todo, post] = urls.map(
      async (data) => await fetch(data).then((data) => data.json())
    );
    // console.log(user, "user");
    // Ways to return a promise.
    // 1[In object]
    return { user: user.then((data) => console.log(data)) };
    // retun Directly
    // return user;
  } catch (error) {
    console.log(error);
  }
}

let result = getUserWihoutAll();
console.log(result.user);
// result.then((user) => console.log(user));
