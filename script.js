
//new post + display

document.addEventListener('DOMContentLoaded', function () {
    displayPosts();
});
function displayPosts() {
    const blogList = document.getElementById('blog-list');
    if (!blogList) {
        console.error('blog-list element not found');
        return;
    }
    blogList.innerHTML = '';

    console.log('displayPosts function is running');

    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    if (posts.length === 0) {
        blogList.innerHTML = '<p>No posts available. Create a new one!</p>';
        return;
    }
    posts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        const titleElement = document.createElement('h3');
        titleElement.textContent = post.title;
        const contentElement = document.createElement('p');
        contentElement.textContent = post.content;

        postElement.appendChild(titleElement);
        postElement.appendChild(contentElement);

        blogList.appendChild(postElement);
    });
}

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