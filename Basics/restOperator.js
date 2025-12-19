var numbers = [1, 2, 3, 4, 5];
function sum(x, ...y) {
    return x.concat(y);
}

console.log(sum(numbers,6,7,8)); // Output: 15 using rest operator