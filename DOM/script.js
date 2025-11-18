// document.getElementById('demo').innerHTML = "Hello JavaScript!"; 
// document.getElementsByClassName('anchor').innerHTML;
// document.querySelector('.anchor').innerHTML;

// const x = document.forms["frm1"];
// let text = "";
// for (let i = 0; i < x.length ;i++) {
//   text += x.elements[i].value + "<br>";
// }
// document.getElementById("demo").innerHTML = text;

// const elements = document.getElementById('myImage');
// elements.src = "pic_bulbon.gif";

// function validateForm() {
//     const form = document.forms["myForm"];
//     const value = form['fname'].value;
//     if (value === "") {
//         alert("Name must be filled out");
//         return false;
//     }
// }

// function myFunction() {
//     let x = document.getElementById("numb").value;

//     let text = "";
//     if(isNaN(x) || x < 1 || x > 10) {
//     }
//     else {
//         text = "Input OK";
//     }
//     document.getElementById("demo").innerHTML = text;
// }

// const p = document.querySelector("#demo");
// p.style.color = "red";
// p.style.fontSize = "24px";
// p.style.fontFamily = "Arial";

//Animations

function myMove(){
    const elem = document.getElementById("animate");

    let pos = 0;
    const instance = setInterval(frame, 5);

    function frame(){
        if(pos == 350){
            clearInterval(instance);
        }
        else{
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}
//myMove();

const p = document.getElementById("demo");

const way1 = p.innerHTML;
const way2 = p.firstChild.nodeValue;
const way3 = p.childNodes[0].nodeValue;

console.log(way1);
console.log(way2);
console.log(way3);

