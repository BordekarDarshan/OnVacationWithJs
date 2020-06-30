// For promises js has Job Queue insted of regular web Api callBack Queue/Task Queue.
// Job queue has higher priority.
// Event loop is going to check the job queue first and make sure there is nothing in that queue.
// after that event loop starts looking at callback queue

// 1 callback queue [after Job queue gets empty]
setTimeout(() => console.log(1), 0);

// 2 job queue [Higher priority]
Promise.resolve(2).then((data) => console.log(data));

// 3 synchronous code
console.log(3);
