// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a nav link
    const navItems = document.querySelectorAll('.nav-links a');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Countdown Timer
    const countdownElement = document.getElementById('countdown');
    
    if (countdownElement) {
        // Set the event date (November 15, 2023)
        const eventDate = new Date('November 15, 2023 09:00:00').getTime();
        
        // Update the countdown every second
        const countdownTimer = setInterval(function() {
            // Get current date and time
            const now = new Date().getTime();
            
            // Calculate the time remaining
            const timeRemaining = eventDate - now;
            
            // Calculate days, hours, minutes, and seconds
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
            
            // Display the countdown
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
            
            // If the countdown is over
            if (timeRemaining < 0) {
                clearInterval(countdownTimer);
                document.getElementById('countdown').innerHTML = '<h3>The Event Has Started!</h3>';
            }
        }, 1000);
    }
    
    // Schedule Tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    const scheduleDays = document.querySelectorAll('.schedule-day');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get the day to show
            const day = this.getAttribute('data-day');
            
            // Hide all schedule days
            scheduleDays.forEach(scheduleDay => {
                scheduleDay.classList.remove('active');
            });
            
            // Show the selected day
            document.getElementById(day).classList.add('active');
        });
    });
    
    // Play Button Click (Video Modal)
    const playBtn = document.querySelector('.play-btn');
    
    if (playBtn) {
        playBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // In a real application, you would show a video modal
            // For this example, we'll just show an alert
            alert('Video would play in a modal here.');
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinksAnchors = document.querySelectorAll('a[href^="#"]');
    
    navLinksAnchors.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Skip if it's just "#" or empty
            if (targetId === '#' || !targetId) {
                return;
            }
            
            e.preventDefault();
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real application, you would send the form data to a server
            // For this example, we'll just show a success message
            
            const formData = new FormData(contactForm);
            let formValues = {};
            
            formData.forEach((value, key) => {
                formValues[key] = value;
            });
            
            console.log('Form submitted:', formValues);
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = '<h3>Thank you for your message!</h3><p>We\'ll get back to you as soon as possible.</p>';
            successMessage.style.textAlign = 'center';
            successMessage.style.padding = '2rem';
            
            contactForm.innerHTML = '';
            contactForm.appendChild(successMessage);
        });
    }
    
    // Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real application, you would send the form data to a server
            // For this example, we'll just show a success message
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            console.log('Newsletter subscription:', email);
            
            // Clear the input
            emailInput.value = '';
            
            // Show success message
            alert('Thank you for subscribing to our newsletter!');
        });
    }
    
    // Add active class to navigation links based on scroll position
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
});
