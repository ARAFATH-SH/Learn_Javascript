const person = {
    fullname: function(city, country) {
        return this.firstName + " " + this.lastName + ", " + city + ", " + country;
    }
};

const person1 = {
    firstName: "John",
    lastName: "Doe"
};
const person2 = {
    firstName: "Jane",
    lastName: "Smith"
};

console.log(person.fullname.call(person1, "New York", "USA")); // John Doe, New York, USA
console.log(person.fullname.call(person2, "Los Angeles", "USA")); // Jane Smith, Los Angeles, USA