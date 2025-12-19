const item = document.getElementById('item-2');
item.addEventListener('click', function(event){
    console.log('Item 2 clicked');
    event.stopPropagation();
});
const itemList = document.getElementById('list');  
itemList.addEventListener('click', function(){
    console.log('List clicked');
});