// Stack OverFlow

let bigData = [];

for (let index = 2; 1 < index; index++) {
  bigData.push(index);
}

// Browser Will Crash.
// When the data collection reaches its maximum level and there is no place to store further data called memory leak.
// Filled Memory Heap With more and more and more data until website gets crashed
