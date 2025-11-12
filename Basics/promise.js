const taskStatus = true;
console.log("task 1");

const promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        if(taskStatus){
            resolve("task 2 completed");
        } else {    
            reject("task 2 failed");
        }
    }, 2000);
});

promise
     .then(function(value){
            console.log(value);
     })
     .catch(function(error){
            console.log(error);
     });