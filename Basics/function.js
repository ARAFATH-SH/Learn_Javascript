function sleep(){
    console.log("Sleeping...");
}
sleep();
function eat(item){
    console.log("Eating " + item);
}
eat("apple");
function add(a, b){
    return a + b;
}
console.log("The sum is: " + add(5, 10));

(function(){
    console.log("This is an IIFE (Immediately Invoked Function Expression)");
})(); //self-invoking function