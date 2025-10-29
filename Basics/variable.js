//var is a container for storing data
var x = 5;
var y = 10;
var sum = x + y;
console.log("The sum of x and y is: " + sum);

//let is a block-scoped variable
let a = 15;

{
    let a = 20; // This 'a' is different from the one outside the block
    console.log("The value of a inside the block is: " + a);
}
console.log("The value of a outside the block is: " + a);

const x = 5;
//x=10;  This will cause an error because 'x' is a constant

const arr = [1, 2, 3];
arr[0] = 10; // This is allowed, we can change elements of the array

console.log("The modified array is: " + arr);