function handlepostJson(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response=>response.json())
    .then(data=>allPosts(data));
}

const postData = document.getElementById('postContainer');

function allPosts(post){
    
    for(const posts of post){
        const creatediv = document.createElement('div');
        creatediv.classList.add('post-style');
        creatediv.innerHTML = `
        <h3>UserId: ${posts.userId}</h3>
        <h4>Id: ${posts.id}</h4>
        <h2>Title: ${posts.title}</h2>
        <p>Body: ${posts.body}</p>
        <hr>
        `;
        postData.appendChild(creatediv);
    }
}