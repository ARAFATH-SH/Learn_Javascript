//closure example
function sum(){
    let a = 10;
    return function(){
        a++;
        console.log(a);
    }
}

const result = sum();
result();
result();
result();

//callback example

function greet(callback, name){
    console.log("Hello User");
    callback(name);
}

const firstInvite = function(name){
    console.log("Welcome " + name);
}
const secondInvite = function(name){
    console.log("Good to see you " + name);
}

greet(firstInvite, "Alice");
greet(secondInvite, "Bob");

