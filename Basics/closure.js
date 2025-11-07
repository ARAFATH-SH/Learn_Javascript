function myCounter(){
    let count = 0;
    return function(){
        count += 1;
        return count;
}
};

const addCount = myCounter();

console.log(addCount()); // 1
console.log(addCount()); // 2
console.log(addCount()); // 3