document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Autofill default date input with today's formatted date
    const dateInput = document.getElementById('dateInput');
    if (dateInput) {
        const options = { month: 'short', day: 'numeric', year: 'numeric' };
        const today = new Date().toLocaleDateString('en-US', options);
        dateInput.value = today;
    }

    // 2. Reservation Form Interactive Submission Handler
    const reservationForm = document.getElementById('reservationForm');
    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const dateVal = document.getElementById('dateInput').value;
            const guestVal = document.getElementById('guests').value;
            
            // Create a custom alert modal simulation
            alert(`Thank you! Your table request for ${guestVal} on ${dateVal} has been successfully registered. Our team will contact you shortly to confirm.`);
            reservationForm.reset();
            if (dateInput) dateInput.value = today;
        });
    }

    // 3. Newsletter Subscription Interactive Action
    const newsletterBtn = document.getElementById('newsletterBtn');
    const newsletterEmail = document.getElementById('newsletterEmail');
    if (newsletterBtn && newsletterEmail) {
        newsletterBtn.addEventListener('click', () => {
            const email = newsletterEmail.value.trim();
            if(email && email.includes('@')) {
                alert(`Success! ${email} has been added to our private club list.`);
                newsletterEmail.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

    // 4. Smooth scrolling behavior for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetID = this.getAttribute('href');
            if (targetID !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetID);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

});