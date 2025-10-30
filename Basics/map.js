// new Map()	Creates a new Map object
// clear()	Removes all the elements from a Map
// delete()	Removes a Map element specified by a key
// entries()	Returns an iterator object with the [key, value] pairs in a Map
// forEach()	Invokes a callback for each key/value pair in a Map
// get()	Gets the value for a key in a Map
// groupBy()	Groups object elements according to returned callback values
// has()	Returns true if a key exists in a Map
// keys()	Returns an iterator object with the keys in a Map
// set()	Sets the value for a key in a Map
// size	Returns the number of Map elements
// values()	Returns an iterator object of the values in a Map

const fruits = new Map([
    ['apple', 500],
    ['banana', 300],
    ['mango', 400]
]);

fruits.set('orange', 250);
console.log(fruits);

fruits.delete('banana');
console.log(fruits);

console.log(fruits.has('mango')); // true

fruits.forEach(function(value, key){
    console.log(key + ': ' + value);
});

for(let [key, value] of fruits.entries()){
    console.log(key + ': ' + value);
}
