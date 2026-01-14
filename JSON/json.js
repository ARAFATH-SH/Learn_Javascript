const person = {
  name: "Alice",
  age: 30,
  city: "New York"
};

// Convert the person object to a JSON string

const newPerson = JSON.stringify(person);
console.log(newPerson);

// Parse the JSON string back to a JavaScript object
const parsedPerson = JSON.parse(newPerson);
console.log(parsedPerson);