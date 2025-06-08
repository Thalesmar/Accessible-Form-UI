const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
const password = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

function isValidEmail() {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex

    if (!emailRegex.test(email)) {
        emailInput.classList.add('error'); // Add red border
        emailError.textContent = "Please enter a valid email (e.g., user@example.com)";
        return false;
    } else {
        emailInput.classList.remove('error'); // Remove red border if valid
        emailError.textContent = "";
        return true;
    }
}

emailInput.addEventListener('blur', isValidEmail);


emailInput.addEventListener('input', function() {
    if (emailInput.value.trim() === "") {
        emailInput.classList.remove('error');
        emailError.textContent = "";
    } else {
        isValidEmail();
    }


});
