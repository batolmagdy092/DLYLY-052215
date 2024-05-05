 var allowedUsers = {
    "user1@example.com": "password1",
    "user2@example.com": "password2",
    "user3@example.com": "password3"
};

function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");

    emailError.innerHTML = "";
    passwordError.innerHTML = "";

   
    if (!allowedUsers.hasOwnProperty(email)) {
        emailError.innerHTML = "Email not found";
        return false;
    }


    if (password !== allowedUsers[email]) {
        passwordError.innerHTML = "Incorrect password";
        return false;
    }

    return true;
}