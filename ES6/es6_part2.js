const number = [1, 2, 3, 4, 5];

const newArray  = number.map(num=> num+1); //map returns a new array
console.log(newArray); // Outputs: [2, 3, 4, 5, 6]

//for each and filter
const products = [
    {name: 'Laptop', price: 1000},
    {name: 'Phone', price: 500},
    {name: 'Tablet', price: 300},
];

products.forEach(product=>{ //for each does not return anything
    if(product.price > 400){
        console.log(product.name); // Outputs: Laptop, Phone
    }
})
const expensiveProducts = products.filter(product=> product.price > 400); //filter returns a new array
console.log(...expensiveProducts); 

const findProduct = products.find(product=> product.name === 'Tablet'); //find returns the first matching element
console.log(findProduct); // Outputs: {name: 'Tablet', price: 300}

//Classes in ES6

class Animal {
    constructor(name, species){
        this.name = name;
        this.species = species;
    }
    makeSound(){
        console.log(
            `${this.name} makes a sound.Species: ${this.species}`
        );
    }
}

const dog = new Animal('Buddy', 'Dog');
dog.makeSound(); // Outputs: Buddy makes a sound.

//inheritance
class Vehicle {
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }
    start(){
        console.log(`The ${this.brand} ${this.model} is starting.`);
    }  
}
class Car extends Vehicle {
    constructor(brand,model,doors){
        super(brand,model);
        this.doors = doors;
    }
    honk(){
        console.log(`The ${this.brand} ${this.model} goes honk!`);
    }
}

const myCar = new Car('Honda', 'Civic', 4);
myCar.start();
myCar.honk();

