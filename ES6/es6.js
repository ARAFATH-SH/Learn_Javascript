const name = "ES6";
let version = 4;
version = 6;
console.log(`Welcome to ${name} version ${version}`);

const friends = ['Alice', 'Bob', 'Charlie'];

for(let i = 0; i < friends.length; i++) {  
    console.log(`Hello, ${friends[i]}!`);
}

const person = {
    firstName: 'John',
}

// function in ES6
function add(num1 = 0, num2=0) {
    console.log(num1 + num2);
}
add(5); // Outputs: 5
add(5, 10); // Outputs: 15

//arrow function
const sum = (a,b)=> a+b;
console.log(sum(4,4)); // Outputs: 7

//Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // Outputs: [1, 2, 3, 4, 5, 6]

const friend = ['Alice', 'Bob', 'Charlie'];
const newArray = ['David', ...friend, 'Eve'];
console.log(...newArray); // Outputs: ['David', 'Alice', 'Bob', 'Charlie', 'Eve']

//Destructuring
const student = {
    Name: 'Emma',
    age: 20,
    major: 'Computer Science'
};

const {Name, age, major} = student;
console.log(Name); // Outputs: Emma
console.log(age);  
console.log(major);

const Person = ['John', {Age: 25, profession: 'Engineer'}, 'USA'];

const [personName, {Age, profession}, country] = Person;

console.log(personName); // Outputs: John
console.log(Age);  // Outputs: 25
console.log(profession); // Outputs: Engineer       
console.log(country); // Outputs: USA

//Key Values Entries Delete Seal Freeze
const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020
};
console.log(Object.keys(car)); // Outputs: ['brand', 'model', 'year']
console.log(Object.values(car));
console.log(Object.entries(car));
delete car.year;
console.log(car); // year property is deleted
Object.seal(car);
car.model = 'Corolla'; // Modifying existing property works
console.log(car);
Object.freeze(car);
car.brand = 'Honda';
console.log(car); // brand property remains 'Toyota'

for(let [key, value] of Object.entries(car)) {
    console.log(`key : ${key} value : ${value}`);
}

// for(let key in Person) {
//     console.log(`key: ${key} value: ${Person[key]}`);
// }