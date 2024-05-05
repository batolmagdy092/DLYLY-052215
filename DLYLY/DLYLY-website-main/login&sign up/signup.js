function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var phoneNumber = document.getElementById("phonenumber").value;
    var email = document.getElementById("email").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var usernameError = document.getElementById("usernameError");
    var passwordError = document.getElementById("passwordError");
    var confirmPasswordError = document.getElementById("confirmPasswordError");


    usernameError.innerHTML = "";
    passwordError.innerHTML = "";
    confirmPasswordError.innerHTML = "";

    if (username === "") {
        usernameError.innerHTML = "Username is required";
        return false;
    }

    if (password === "") {
        passwordError.innerHTML = "Password is required";
        return false;
    }

    if (confirmPassword === "") {
        confirmPasswordError.innerHTML = "Please confirm your password";
        return false;
    }

    if (password !== confirmPassword) {
        confirmPasswordError.innerHTML = "Passwords do not match";
        return false;
    }

    return true;
    function validatePhone() {
        var phone = document.getElementById("phone").value;
        var phoneError = document.getElementById("phoneError");

        if (phone.length !== 11 || isNaN(phone)) {
            phoneError.innerHTML = "Phone number must be 11 digits";
            return false;
        }

        return true;
    }

    function validatePassword() {
        var password = document.getElementById("password").value;
        var passwordError = document.getElementById("passwordError");

        var hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);
        var hasNumber = /\d/.test(password);
        var hasUpperCase = /[A-Z]/.test(password);
        var hasLowerCase = /[a-z]/.test(password);

        if (!hasSpecialChar || !hasNumber || !hasUpperCase || !hasLowerCase) {
            passwordError.innerHTML = "Password must contain at least one special character, one number, one uppercase letter, and one lowercase letter";
            return false;
        }

        return true;
    }
}