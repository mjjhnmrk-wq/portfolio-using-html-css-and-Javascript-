document.addEventListener('DOMContentLoaded', function() {
    // --- Mobile Navigation Toggle ---
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });

        // Optional: close menu when a link is clicked (for better UX)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('show');
            });
        });
    }

    // --- Dark Mode Toggle ---
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Check localStorage for saved preference (optional enhancement)
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️ Light Mode';
    }

    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        // Update button text and save preference
        if (body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = '☀️ Light Mode';
            localStorage.setItem('darkMode', 'enabled');
        } else {
            darkModeToggle.textContent = '🌙 Dark Mode';
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // --- Contact Form Validation ---
    const contactForm = document.getElementById('contact-form');
    const errorDiv = document.getElementById('form-error');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual submission

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();

            // Clear previous error
            errorDiv.textContent = '';

            if (name === '' || email === '') {
                errorDiv.textContent = 'Please fill in both Name and Email fields.';
                return;
            }

            // If validation passes, you could send data via fetch() or show a success message
            alert('Message sent successfully! (Demo)');
            contactForm.reset(); // Optional: clear form
        });
    }
});