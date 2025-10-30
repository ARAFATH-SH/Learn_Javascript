const number = [1, 2, 3, 2, 4, 5, 1, 6, 3];

const duplicates = number.filter(function(value, index, array){
    return array.indexOf(value) === index;
});

console.log(duplicates);