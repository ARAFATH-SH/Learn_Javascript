const handle = document.getElementById('myButton');
const title = document.getElementById('title-text');

handle.addEventListener('click', buttonClicked=()=>{
    console.log("Button clicked");
    title.innerText = "Title updated";
});