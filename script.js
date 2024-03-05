//Password Verification logic
document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const errorElement = document.getElementById("error");
    const confirmedElement = document.getElementById("confirmed");

    // Add input event listeners to both password fields
    passwordInput.addEventListener("input", checkPasswordsMatch);
    confirmPasswordInput.addEventListener("input", checkPasswordsMatch);

    function checkPasswordsMatch() {
        const passwordValue = passwordInput.value;
        const confirmPasswordValue = confirmPasswordInput.value;

        // Reset the error messages
        errorElement.style.display = "none";
        confirmedElement.style.display = "none";

        // Check if the passwords match
        if (passwordValue !== confirmPasswordValue) {
            errorElement.style.display = "block";
            errorElement.textContent = "* Passwords do not match";
        } else if (passwordValue !== "" && confirmPasswordValue !== "") {
            confirmedElement.style.display = "block";
            confirmedElement.textContent = "Confirmed!";
        }
    }
});
