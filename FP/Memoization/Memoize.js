// store values so you can use them later on.
// Caching === Backpack
// Speed up program

function normalFunction(num) {
  console.log("Hell");
  return num + 80;
}
console.log(normalFunction(5));
console.log(normalFunction(5));

let cache = {};
function memoizedFunction(num) {
  if (num in cache) {
    //   num in cache means cache.num
    return cache[num];
  } else {
    console.log("Heaven");
    cache[num] = num + 80;
    return cache[num];
  }
}

console.log(memoizedFunction(5));
console.log(memoizedFunction(5));

// memoization is a specific form of caching that involves the caching the
// return value.
// Memomize means return the cache version.
