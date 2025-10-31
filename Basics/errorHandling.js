// try{
//     adddlert("Welcome guest!");
// }
// catch(err){
//     console.log(err.message);
// }

//throw custom error message

let x = 11;
try{
    if(x > 10) throw {
        name: 'TooHigh',
        message: 'The value is too high'
    };
    if(x < 5) throw "Too low";  
} 
catch(err){
    console.log(err);
}
finally{
    console.log("The try-catch is finished");
}