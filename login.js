const form = document.getElementById('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        if(email && password) 
        {
            window.location.href = "home.html";
            return true;
        } 
        else 
        {
            return false;
        }
    });