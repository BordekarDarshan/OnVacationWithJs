// async error handling => catch()

// short hand syntax for promise.
// in order to get a value that promise return we use then.

// Promise.resolve("Async Fail")
//   .then((data) => {
//     console.log(data);
// something fails without knowing in async code called as "silent fail"
// throw new Error() here you write error messages.
//     throw new Error("Fails");
//     return data;
//   })
//   .then((data) => console.log(data))
//   .catch((error) => {
//     return error;
//   })
// you can apply "then-catch" chain even after a catch to print error
//   .then((error) => console.log(error, error.name, error.message, error.stack));

// watch 4.async error handling 04:53, 6:00, 9:20.

// If we have nested promise

// Promise.resolve("Async Fail")
//   .then((data) => {
//     Promise.resolve()
//       .then(() => {
//         throw new Error("Nested Promise Error");
//       })
// remember if your promise is here then you must apply here only not outside
//   .catch((error) => console.log(error.message));
//     return data;
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error, error.name, error.message, error.stack));

// remember try{} catch{} block is more suitable for synchronous code
// for asychronus code we often use .catch() method as we see above.

// but if we use async-await, you may know async-await makes asynchronous code to behave like synchronous.
// so now we can use async-await.

async function asynxAwaitTryCatch() {
  try {
    await Promise.resolve("Resolve").then((data) => console.log(data));
    await Promise.reject("relax we have catch");
    await Promise.reject("second Error");
  } catch (error) {
    console.log(error);
  }
  console.log("Holy Moly");
}

asynxAwaitTryCatch();

// we can do here all we want nested try catch,more than one reject,finally keyword

// Note : if you encountered "unhandledPromiseRejection" give catch block to appropriate then or promise
