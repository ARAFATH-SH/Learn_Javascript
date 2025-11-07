const letters = new Set(['a', 'b', 'c', 'c']);
console.log(letters);

letters.add('d');
letters.add('a');
console.log(letters);

letters.forEach(function(value){
    console.log(value);
});

// get iterators
const iterator = letters.values();

for(const letter of iterator){
    console.log(letter);
}