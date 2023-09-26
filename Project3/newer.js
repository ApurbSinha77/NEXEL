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

function createSeeMoreButton() {
    const seeMoreButton = document.createElement('button');
    seeMoreButton.textContent = 'See More';
    seeMoreButton.classList.add('see-more'); // Add the 'see-more' class
    seeMoreButton.style.backgroundColor = '#676767'; // Button background color
    seeMoreButton.style.color = '#fff'; // Button text color
    seeMoreButton.style.border = 'none'; // Button border
    seeMoreButton.style.borderRadius = '3px'; // Button border radius
    seeMoreButton.style.padding = '1px 2px'; // Button padding
    // seeMoreButton.style.backgroundColor = '#676767';
    seeMoreButton.style.fontSize = '1rem';; // Button font size
    return seeMoreButton;
}


// Function to toggle between truncated and full post content
function toggleFullContent(event) {
    const postContentElement = event.target.previousElementSibling;
    const fullContent = postContentElement.getAttribute('data-full-content');
    const isFullContentDisplayed = postContentElement.classList.contains('full-content');

    if (!isFullContentDisplayed) {
        // Display the full content
        postContentElement.textContent = fullContent;
        event.target.textContent = 'See Less';
        postContentElement.classList.add('full-content');
        event.target.style.backgroundColor = '#676767';
        event.target.style.fontSize = '0.5rem';
        event.target.style.padding = "1px 2px" // Change button background color
    } else {
        // Display the truncated content
        const truncatedContent = postContentElement.getAttribute('data-truncated-content');
        postContentElement.textContent = truncatedContent;
        event.target.textContent = 'See More';
        postContentElement.classList.remove('full-content');
        event.target.style.backgroundColor = '#676767';
        event.target.style.fontSize = '0.5rem';
        event.target.style.padding = "1px 2px"  // Restore original button background color
    }
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
    postContentElement.setAttribute('data-truncated-content', truncatedContent);
    postContentElement.setAttribute('data-full-content', postContent);
    const seeMoreButton = createSeeMoreButton();
    // const seeMoreButton = document.createElement('button');
    seeMoreButton.textContent = 'See More';
    seeMoreButton.addEventListener('click', toggleFullContent);
    seeMoreButton.style.backgroundColor = '#3498db'; // Set the button's background color

    blogPost.appendChild(postTitleElement);
    blogPost.appendChild(postContentElement);
    blogPost.appendChild(seeMoreButton);

    blogPosts.appendChild(blogPost);

    // Clear the input fields
    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
});
