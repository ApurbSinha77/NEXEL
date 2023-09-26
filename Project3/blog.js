/*
// JavaScript for basic blog functionality
const postButton = document.getElementById('post-button');
const blogPosts = document.getElementById('blog-posts');

// Add a new blog post when the "Post" button is clicked
postButton.addEventListener('click', () => {
    const postTitle = document.getElementById('post-title').value;
    const postContent = document.getElementById('post-content').value;

    if (postTitle.trim() === '' || postContent.trim() === '') {
        alert('Please enter both title and content.');
        return;
    }

    const blogPost = document.createElement('section');
    blogPost.classList.add('blog-post');

    const postTitleElement = document.createElement('h3');
    postTitleElement.textContent = postTitle;

    const postContentElement = document.createElement('p');
    postContentElement.textContent = postContent;

    blogPost.appendChild(postTitleElement);
    blogPost.appendChild(postContentElement);

    blogPosts.appendChild(blogPost);

    // Clear the input fields
    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
});
*/

// JavaScript for basic blog functionality
const postButton = document.getElementById('post-button');
const blogPosts = document.getElementById('blog-posts');

// Function to truncate text if it exceeds a character limit
function truncateText(text, limit) {
    if (text.length > limit) {
        return text.slice(0, limit) + '...'; // Add ellipsis for truncated text
    }
    return text;
}

// Add a new blog post when the "Post" button is clicked
postButton.addEventListener('click', () => {
    const postTitle = document.getElementById('post-title').value;
    const postContent = document.getElementById('post-content').value;

    if (postTitle.trim() === '' || postContent.trim() === '') {
        alert('Please enter both title and content.');
        return;
    }

    const blogPost = document.createElement('section');
    blogPost.classList.add('blog-post');

    const postTitleElement = document.createElement('h3');
    postTitleElement.textContent = postTitle;

    const postContentElement = document.createElement('p');
    const truncatedContent = truncateText(postContent, 150); // Limit content to 150 characters
    postContentElement.textContent = truncatedContent;

    blogPost.appendChild(postTitleElement);
    blogPost.appendChild(postContentElement);

    blogPosts.appendChild(blogPost);

    // Clear the input fields
    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
});
