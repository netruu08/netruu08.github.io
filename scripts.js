// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission feedback (simple alert for now)
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Display a simple message when form is submitted
    alert("Thank you for reaching out! We will get back to you soon.");
});
