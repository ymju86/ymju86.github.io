---
title: "Contact Me"
layout: single
author_profile: false
permalink: /contact/
---

<div class="contact-container">
  <h1 class="page-title">Contact Me</h1>

  <div class="contact-grid">
    <!-- Contact Form -->
    <div class="contact-form-section">
      <div class="form-card">
        <div class="card-header">
          <h2 class="card-title">Get in Touch</h2>
          <p class="card-description">Fill out the form below and I'll get back to you as soon as possible.</p>
        </div>
        
        <form class="contact-form" id="contact-form">
          <div class="form-grid">
            <div class="form-group">
              <label for="name" class="form-label">Name</label>
              <input type="text" id="name" name="name" class="form-input" placeholder="Your name" required>
            </div>
            <div class="form-group">
              <label for="email" class="form-label">Email</label>
              <input type="email" id="email" name="email" class="form-input" placeholder="Your email" required>
            </div>
          </div>
          
          <div class="form-group">
            <label for="subject" class="form-label">Subject</label>
            <input type="text" id="subject" name="subject" class="form-input" placeholder="Subject" required>
          </div>
          
          <div class="form-group">
            <label for="message" class="form-label">Message</label>
            <textarea id="message" name="message" class="form-textarea" rows="5" placeholder="Your message" required></textarea>
          </div>
          
          <button type="submit" class="submit-btn" id="submit-btn">
            <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22,2 15,22 11,13 2,9 22,2"></polygon>
            </svg>
            Send Message
          </button>
          
          <div class="success-message" id="success-message">
            Thank you for your message! I'll get back to you soon.
          </div>
        </form>
      </div>
    </div>

    <!-- Contact Information and Map -->
    <div class="contact-info-section">
      <!-- Contact Information Card -->
      <div class="info-card">
        <div class="card-header">
          <h2 class="card-title">Contact Information</h2>
          <p class="card-description">Feel free to reach out through any of these channels.</p>
        </div>
        
        <div class="contact-details">
          <div class="contact-item">
            <div class="contact-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div class="contact-content">
              <h3 class="contact-label">Email</h3>
              <p class="contact-value">contactme@youngminju.com</p>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div class="contact-content">
              <h3 class="contact-label">Phone</h3>
              <p class="contact-value">+1-213-378-8372</p>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div class="contact-content">
              <h3 class="contact-label">Address</h3>
              <p class="contact-value">3855 W 7th St, Los Angeles, CA 90005</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Office Location Card -->
      <div class="location-card">
        <div class="card-header">
          <h2 class="card-title">Office Location</h2>
        </div>
        
        <div class="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7837534829834!2d-118.30894448478456!3d34.062194980601644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b8a0a7f7a7a7%3A0x1234567890abcdef!2s3855%20W%207th%20St%2C%20Los%20Angeles%2C%20CA%2090005!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%" 
            height="200" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            class="map-iframe">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 20px;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 48px;
  letter-spacing: -0.025em;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
}

@media (min-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr 1fr;
    gap: 64px;
  }
}

/* Card Styles */
.form-card,
.info-card,
.location-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  margin-bottom: 32px;
}

.form-card:hover,
.info-card:hover,
.location-card:hover {
  border-color: #d1d5db;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.card-header {
  margin-bottom: 24px;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 8px;
}

.card-description {
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}

/* Form Styles */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

@media (min-width: 640px) {
  .form-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
}

.form-input,
.form-textarea {
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
  color: #1a1a1a;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.submit-btn:hover {
  background: #2563eb;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.submit-btn:disabled {
  background: #9ca3af;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.btn-icon {
  transition: transform 0.3s ease;
}

.submit-btn:hover .btn-icon {
  transform: translateX(2px);
}

.success-message {
  display: none;
  background: #dcfce7;
  color: #166534;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 0.875rem;
  border: 1px solid #bbf7d0;
}

.success-message.show {
  display: block;
}

/* Contact Information Styles */
.contact-details {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 8px;
  color: #3b82f6;
  flex-shrink: 0;
}

.contact-content {
  flex: 1;
}

.contact-label {
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 4px;
}

.contact-value {
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
}

/* Map Styles */
.map-container {
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
}

.map-iframe {
  width: 100%;
  height: 200px;
  border: none;
  display: block;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .contact-container {
    padding: 32px 16px;
  }
  
  .page-title {
    font-size: 2rem;
    margin-bottom: 32px;
  }
  
  .form-card,
  .info-card,
  .location-card {
    padding: 24px;
  }
  
  .contact-grid {
    gap: 32px;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
  }
}

/* Dark mode styles */
body.dark-mode .page-title,
body.dark-mode .card-title,
body.dark-mode .contact-label,
body.dark-mode .form-label {
  color: #f9fafb;
}

body.dark-mode .card-description,
body.dark-mode .contact-value {
  color: #9ca3af;
}

body.dark-mode .form-card,
body.dark-mode .info-card,
body.dark-mode .location-card {
  background: #1f2937;
  border-color: #374151;
}

body.dark-mode .form-card:hover,
body.dark-mode .info-card:hover,
body.dark-mode .location-card:hover {
  border-color: #4b5563;
}

body.dark-mode .form-input,
body.dark-mode .form-textarea {
  background: #374151;
  border-color: #4b5563;
  color: #f9fafb;
}

body.dark-mode .form-input:focus,
body.dark-mode .form-textarea:focus {
  border-color: #60a5fa;
  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
}

body.dark-mode .form-input::placeholder,
body.dark-mode .form-textarea::placeholder {
  color: #9ca3af;
}

body.dark-mode .contact-icon {
  background: rgba(96, 165, 250, 0.1);
  color: #60a5fa;
}

body.dark-mode .map-container {
  border-color: #374151;
}

body.dark-mode .success-message {
  background: #065f46;
  color: #34d399;
  border-color: #047857;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const successMessage = document.getElementById('success-message');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Disable submit button and show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3 4-3 9-3 9 1.34 9 3Z"></path>
        <path d="M21 5c0 1.66-4 3-9 3S3 6.66 3 5s4-3 9-3 9 1.34 9 3Z"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
      Sending...
    `;
    
    // Simulate form submission
    setTimeout(function() {
      // Reset form
      form.reset();
      
      // Reset submit button
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22,2 15,22 11,13 2,9 22,2"></polygon>
        </svg>
        Send Message
      `;
      
      // Show success message
      successMessage.classList.add('show');
      
      // Hide success message after 5 seconds
      setTimeout(function() {
        successMessage.classList.remove('show');
      }, 5000);
      
    }, 1500);
  });
  
  // Form validation
  const inputs = form.querySelectorAll('input[required], textarea[required]');
  inputs.forEach(input => {
    input.addEventListener('blur', function() {
      if (this.value.trim() === '') {
        this.style.borderColor = '#ef4444';
      } else {
        this.style.borderColor = '#d1d5db';
      }
    });
    
    input.addEventListener('input', function() {
      if (this.value.trim() !== '') {
        this.style.borderColor = '#d1d5db';
      }
    });
  });
});
</script> 