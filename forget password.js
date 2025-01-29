function sendCode(event) {
    event.preventDefault(); 

    var email = document.getElementById("email").value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
        alert("Please enter an email address.");
    } else if (!emailPattern.test(email)) {
        alert("Please enter a valid email.");
    } else {
        alert("The code will be sent to " + email);         
        document.getElementById("step1").classList.add("hidden");
        document.getElementById("step2").classList.remove("hidden");
    } 
}

function verifyCode(event) {
    event.preventDefault(); 
    var codeInput = document.getElementById("code");
    if (!codeInput.checkValidity()) {
        alert("Please enter the code.");
        return;
    }
        var code = codeInput.value;
        if(code === "123456") { 
            document.getElementById("step2").classList.add("hidden");
            document.getElementById("step3").classList.remove("hidden");
        } else {
            alert("Invalid code, please try again.");
        }
}
function validatePhoneNumber(input) {
    input.value = input.value.replace(/[^0-9]/g, ''); 
}
function validatePassword(event) {
    event.preventDefault(); 
    const password = document.getElementById('newPassword').value; 
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    if (password.length < 7 || password.length > 16) {
        alert("Password must be between 7 and 16 characters long."); 
        return false;
    }
  
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>_-]/.test(password);
    const hasArabic = /[\u0600-\u06FF]/.test(password);
    const hasSpace = /\s/.test(password);
  
    if (!((hasLetter && hasNumber && hasSpecialChar) || (hasArabic && hasNumber && hasSpecialChar))) {
        alert("Your password must contain at least one letter, one number, and one special character.");
        return false;
    }
  
    const isEnglish = /^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>_\s]*$/.test(password);
    const isArabic = /^[\u0600-\u06FF0-9!@#$%^&*(),.?":{}|<>_\s]*$/.test(password);
  
    if (!(isEnglish || isArabic)) {
        alert("The password can contain Arabic or English characters, but not both.");
        return false; 
    }
  
    if (password !== confirmPassword) {
        alert("Passwords do not match."); 
        return false;
    }
    window.location.href ="login.html";
    return true; 
  }
  document.getElementById("step3").addEventListener("submit", validatePassword);