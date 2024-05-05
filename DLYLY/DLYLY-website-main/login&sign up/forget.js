function validateForm() {
    var email = document.getElementById("email").value;
    var emailError = document.getElementById("emailError");

    emailError.innerHTML = "";

    // التحقق من صحة البريد الإلكتروني
    if (!validateEmail(email)) {
        emailError.innerHTML = "Invalid email format";
        return false;
    }

    // إرسال إشعار بنجاح إذا كان البريد الإلكتروني صحيحًا
    alert("Password reset instructions sent to " + email);
    return true;
}

// وظيفة للتحقق من صحة البريد الإلكتروني
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}