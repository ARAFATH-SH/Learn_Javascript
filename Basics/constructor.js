function Person(name, age) {
    this.name = name;
    this.age = age;
    this.fullname = function(){
        return this.name + " is " + this.age + " years old.";
    }
};

const person1 = new Person("Alice", 28);
const person2 = new Person("Bob", 35);

// console.log(person1.fullname());
// console.log(person2.fullname());

person2.country = "USA";
// console.log(person2);
// console.log(person1);

Person.prototype.city = "New York";
console.dir(Person.prototype);
// console.log(person2);