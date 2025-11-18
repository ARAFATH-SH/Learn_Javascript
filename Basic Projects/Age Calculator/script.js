const btnElement = document.getElementById("btn");
let dateOfBirthElement = document.getElementById("date_of_birth");

btnElement.addEventListener("click", calculateAge);

function calculateAge(){
    const dateofbirthValue = dateOfBirthElement.value;
    if(dateofbirthValue === ""){
        alert("Please enter your date of birth");
    }
    else{
        const age = getAge(dateofbirthValue);
        const resultElement = document.getElementById("result");
        resultElement.innerText = `Your age is ${age} ${age>1 ? "years" : "year"} old.`;
    }
}
function getAge(dateString){
    const todaysDate = new Date();
    const birthDate = new Date(dateString);
    let age = todaysDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = todaysDate.getMonth() - birthDate.getMonth();  
    if(monthDiff < 0 || (monthDiff === 0 && todaysDate.getDate() < birthDate.getDate())){
        age--;
    }
    return age;
}
