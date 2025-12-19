const btns = document.querySelectorAll(".blue")[1];

// btns.onclick = function() {
//     alert('you clicked the button');
// };

btns.addEventListener('click', alertFunction=()=>{
    alert('you clicked the button');
});