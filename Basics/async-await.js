const paymentSuccess = false;
const marks = 70;

function enroll(){
    console.log("Course enrollment is in progress...");
    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(paymentSuccess){
                resolve("Enrollment successful");
            }
            else {
                reject("Payment Failed");
            }
        }, 2000);
    });
    return promise;
};
function progress(){
    console.log("Course is in progress...");
    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(marks >= 80){
                resolve("Course completed successfully");
            } else {
                reject("You could not get enough marks to get the certificate");
            }
        }, 2000);
    });
    return promise;
};
function getCertificate(){
    console.log("Preparing your certificate...");
    const promise = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Certificate prepared");
        }, 2000);
    });
    return promise;
};

async function course() {
    try{
        await enroll();
        await progress();
        const certificate = await getCertificate();
        console.log(certificate);
    }
    catch(err){
        console.log(err);
    }
}

course();

// enroll()
//     .then(progress)
//     .then(getCertificate)
//     .then(function(value){
//         console.log(value);
//     })
//     .catch(function(error){
//         console.log(error);
//     });