// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        e.preventDefault();
        
        // Offset for sticky nav if needed (currently absolute)
        const headerOffset = 0;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Basic Form Submission Simulation
  window.submitForm = function() {
    const nameInput = document.getElementById('name').value;
    const phoneInput = document.getElementById('phone').value;
    const submitBtn = document.querySelector('.form-submit');
    const responseMsg = document.getElementById('formResponse');

    // Basic validation
    if (!nameInput.trim() || !phoneInput.trim()) {
      alert("Please fill in both name and phone number.");
      return;
    }

    // Simulate sending state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Simulate network delay
    setTimeout(() => {
      responseMsg.classList.remove('hidden');
      submitBtn.textContent = 'Send Inquiry';
      submitBtn.disabled = false;
      document.getElementById('contactForm').reset();
    }, 1200);
  };
});
