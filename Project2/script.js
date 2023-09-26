/* function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');

    // Reset error messages
    usernameError.style.display = 'none';
    passwordError.style.display = 'none';

    if (!username) {
        usernameError.style.display = 'block';
        return;
    }

    if (!password) {
        passwordError.style.display = 'block';
        return;
    }

    // Form is valid; you can add your login logic here
    alert('Login successful!');
} */

function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const phoneError = document.getElementById('phone-error');

    // Reset error messages
    emailError.style.display = 'none';
    passwordError.style.display = 'none';
    phoneError.style.display = 'none';

    // Email validation
    if (!email) {
        emailError.style.display = 'block';
        return;
    }

    // Password validation (at least 8 characters)
    if (password.length < 8) {
        passwordError.style.display = 'block';
        return;
    }

    // Phone number validation
    if (!phone) {
        phoneError.style.display = 'block';
        return;
    }

    // Form is valid; you can add your login logic here
    alert('Login successful!');
}