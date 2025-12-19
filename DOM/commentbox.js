const btn = document.getElementById('btn-post');

btn.addEventListener('click',function(){
   
    const commentBox = document.getElementById('comment-text-box');
    const commentText = commentBox.value;

    const parentComment = document.getElementById('parrent-comment');
    const newComment = document.createElement('p');
    newComment.classList.add('comment')
    newComment.innerText = commentText;
    parentComment.appendChild(newComment);

    commentBox.value = "";
})