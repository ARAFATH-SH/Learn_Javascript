const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

numbers[0] = 10;  // Modify the first element
console.log(numbers);https://www.youtube.com/

console.log(Array.isArray(numbers));  // Check if 'numbers' is an array
console.log(numbers instanceof Array);  // Another way to check if 'numbers' is an array

console.log(numbers.join(" * "));

numbers.shift();  // Remove the first element
console.log(numbers);
numbers.unshift(10);  // Add a new element at the beginning
console.log(numbers);

numbers.splice(2, 0, 25);  // Add 25 at index 2
console.log(numbers);
numbers.splice(3, 1, 30);  // Remove 1 element at index 3
console.log(numbers);

const newNumbers = [93, 238, 485];
const combined = numbers.concat(newNumbers);  // Combine two arrays
console.log(combined);

combined.slice(1, 4);  // Extract elements from index 1 to 3
console.log(combined);

combined.sort(function(a, b) {
  return a - b;  // Sort in ascending order
});
console.log(combined);
combined.reverse();  // Reverse the array
console.log(combined);