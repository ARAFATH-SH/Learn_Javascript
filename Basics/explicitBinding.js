const person1 = {
    fullname: function() {
        return this.firstName + " " + this.lastName;
    },
}
const person2 = {
    firstName: "John",
    lastName: "Doe",
}

console.log(person1.fullname.call(person2));