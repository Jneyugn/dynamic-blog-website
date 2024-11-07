
//display the posts

document.addEventListener('DOMContentLoaded', function () {
    displayPosts();
});

//function for displaying the posts from the localstorage

function displayPosts() {
    const blogList = document.getElementById('blog-list');
    if (!blogList) {
        console.error('blog-list element not found');
        return;
    }
    blogList.innerHTML = '';

    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    if (posts.length === 0) {
        blogList.innerHTML = '<p>No posts available. Create a new one!</p>';
        return;
    }

    //looping and adding them to the page
    posts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        const titleElement = document.createElement('h3');
        titleElement.textContent = post.title;
        const contentElement = document.createElement('p');
        contentElement.textContent = post.content;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function() {
            editPost(index);
        });
        postElement.appendChild(titleElement);
        postElement.appendChild(contentElement);
        postElement.appendChild(editButton);

        blogList.appendChild(postElement);
    });
}


//edit post function
function editPost(index) {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const postToEdit = posts[index];

    //getting post data to edit
    document.getElementById('title').value = postToEdit.title;
    document.getElementById('content').value = postToEdit.content;
    document.getElementById('image-url').value = postToEdit.imageUrl || '';

    document.getElementById('new-post-form').style.display = 'block';
    document.getElementById('submit-post').textContent = 'Save Changes';

    document.getElementById('new-post-form').addEventListener('submit', function (event) {
        event.preventDefault();

        posts[index] = {
            title: document.getElementById('title').value,
            content: document.getElementById('content').value,
            imageUrl: document.getElementById('image-url').value
        };

        localStorage.setItem('posts', JSON.stringify(posts));
        displayPosts();

        document.getElementById('new-post-form').reset();
        document.getElementById('new-post-form').style.display = 'none';

        displayPosts();

        setTimeout(function () {
            window.location.href = 'index.html';
        }, 100);
    });
}


//new posts
document.addEventListener('DOMContentLoaded', function () {
    displayPosts();

document.getElementById('new-post-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const imageUrl = document.getElementById('image-url').value;

    const newPost = {
        title: title,
        content: content,
        imageUrl: imageUrl
    };

    const posts = JSON.parse(localStorage.getItem('posts')) || [];

 posts.push(newPost);

 localStorage.setItem('posts', JSON.stringify(posts));

 document.getElementById('new-post-form').reset();
 setTimeout(function () {
    window.location.href = 'index.html'; 
}, 100);
});
});

function createPost() {
    window.location.href = 'new-post.html';
}