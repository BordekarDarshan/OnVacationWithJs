function memoizedFunction() {
  let cache = {};
  return function (num) {
    if (num in cache) {
      //   num in cache means cache.num
      return cache[num];
    } else {
      console.log("Heaven");
      cache[num] = num + 80;
      return cache[num];
    }
  };
}
let memoize = memoizedFunction();
console.log(memoize(5));
console.log(memoize(5));

// Earlier we have cache eas in global scope which is not better
// so we creted closure scope.
// inner function have now access to cache variable.
