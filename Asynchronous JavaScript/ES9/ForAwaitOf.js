const { default: fetch } = require("cross-fetch");

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/todos",
  "https://jsonplaceholder.typicode.com/posts",
];

// Normal Way
const normal = async () => {
  try {
    const [user, todo, post] = await Promise.all(
      urls.map(async (data) => {
        const response = await fetch(data);
        return response.json();
      })
    );
    console.log(user);
  } catch (error) {
    console.log("Error", error);
  }
};

// normal();

// with For Await Of
// it loop through the multiple promises
const withForAwaitOf = async () => {
  const arrayOfPromises = urls.map((data) => fetch(data));
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }
};

withForAwaitOf();
