// Math.E        // returns Euler's number
// Math.PI       // returns PI
// Math.SQRT2    // returns the square root of 2
// Math.SQRT1_2  // returns the square root of 1/2
// Math.LN2      // returns the natural logarithm of 2
// Math.LN10     // returns the natural logarithm of 10
// Math.LOG2E    // returns base 2 logarithm of E
// Math.LOG10E   // returns base 10 logarithm of E

console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);
console.log(Math.SQRT1_2);
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.LOG2E);
console.log(Math.LOG10E);

console.log(Math.sqrt(16));
console.log(Math.pow(4, 3)); // 4^3 = 64
console.log(Math.abs(-7.25));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.7));
console.log(Math.round(4.5));
console.log(Math.sin(30 * Math.PI / 180));
console.log(Math.random());

function getRandomIntExcluded(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomIntIncluded(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRandomIntExcluded(1, 10)); // includes 10
console.log(getRandomIntIncluded(1, 10)); // excludes 10
