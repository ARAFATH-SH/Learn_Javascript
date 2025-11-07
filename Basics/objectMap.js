const fruits = new Map(
    [['Orange' , { color: 'orange', taste: 'citrus' }]
]);
fruits.set('apple', { color: 'red', taste: 'sweet' });
fruits.set('banana', { color: 'yellow', taste: 'sweet' });
fruits.set('lemon', { color: 'yellow', taste: 'sour' });


console.log(fruits);
fruits.delete('banana');
console.log(fruits);
console.log(fruits.has('banana'));

for(const [key,value] of fruits){
    console.log(key + ' - ' + JSON.stringify(value));
}