const contactForm = document.getElementById('contactForm');
const modal = document.getElementById('thankYouModal');
const closeModalBtn = document.getElementById('closeModal');

// Add a submit event listener to the form
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Show the modal
    modal.style.display = 'block';

    // Clear the input fields after showing the modal
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
});

// Close the modal when the user clicks the "Close" button
closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Also close the modal when the user clicks outside of the modal content
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
ScrollReveal().reveal('.heading, .box, .content, .ht', {
    origin: 'bottom',
    distance: '50px',
    duration: 800,
    delay: 200,
    opacity: 0,
    reset: true 
});

// Smooth scroll for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});