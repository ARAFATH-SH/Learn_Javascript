// new Set()
// add()
// clear()
// delete()
// entries()
// forEach()
// has()
// keys()
// values()

const letters = new Set(['a', 'b', 'c']);

letters.add('d');
letters.add('e');
console.log(letters);

letters.delete('c');
console.log(letters);

letters.forEach(function(value){
    console.log(value); 
})

for(let letter of letters.values()){
    console.log(letter);
}