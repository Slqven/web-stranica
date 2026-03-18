/**
 * Main JavaScript for Nina Salon Website
 * Core functionality and feature initialization
 */

document.addEventListener('DOMContentLoaded', function() {
  console.log('✨ Nina Salon website initialized successfully');
  
  // Initialize all features
  initFAQ();
  initNewsletter();
  initLazyLoading();
  initSmoothScroll();
  initScrollAnimations();
  initPhoneTracking();
  initBackToTop();
  initMobileMenu();
  initFormValidation();
  initAccessibility();
  initPerformanceMonitoring();
  registerServiceWorker();
});

// FAQ Accordion
function initFAQ() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const faqItem = this.parentElement;
      const isActive = faqItem.classList.contains('active');
      
      // Close all FAQ items
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
      });
      
      // Toggle current item
      if (!isActive) {
        faqItem.classList.add('active');
      }
    });
  });
}

// Newsletter Subscription
function initNewsletter() {
  const newsletterForm = document.getElementById('newsletterForm');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value;
      const submitBtn = this.querySelector('button[type="submit"]');
      
      // Disable button
      submitBtn.disabled = true;
      submitBtn.textContent = 'Slanje...';
      
      try {
        const response = await fetch('/newsletter/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email })
        });
        
        const data = await response.json();
        
        if (response.ok) {
          showToast('✅ Uspješno ste se pretplatili! Provjerite email.', 'success');
          emailInput.value = '';
          
          // Track newsletter signup
          if (window.Analytics) {
            Analytics.trackNewsletterSignup(email);
          }
        } else {
          showToast(data.message || '❌ Greška pri pretplati. Pokušajte ponovno.', 'error');
        }
      } catch (error) {
        showToast('❌ Greška pri slanju. Pokušajte ponovno kasnije.', 'error');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Pretplatite se';
      }
    });
  }
}

// Lazy Loading for Images
function initLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '#!') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// Scroll Animations
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.fade-in, .fade-in-delay, .slide-in-left, .slide-in-right');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  animatedElements.forEach(el => observer.observe(el));
}

// Phone Click Tracking
function initPhoneTracking() {
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
  
  phoneLinks.forEach(link => {
    link.addEventListener('click', function() {
      const phoneNumber = this.href.replace('tel:', '');
      if (window.Analytics) {
        Analytics.trackPhoneClick(phoneNumber);
      }
    });
  });
}

// Back to Top Button
function initBackToTop() {
  const backToTopBtn = document.createElement('button');
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.innerHTML = '↑';
  backToTopBtn.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(backToTopBtn);
  
  // Show/hide on scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });
  
  // Scroll to top on click
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Mobile Menu Toggle
function initMobileMenu() {
  const mobileMenuBtn = document.createElement('button');
  mobileMenuBtn.className = 'mobile-menu-toggle';
  mobileMenuBtn.innerHTML = '☰';
  mobileMenuBtn.setAttribute('aria-label', 'Toggle menu');
  
  const header = document.querySelector('.site-header');
  if (header) {
    header.appendChild(mobileMenuBtn);
    
    mobileMenuBtn.addEventListener('click', function() {
      const navMenu = document.querySelector('.nav-menu');
      if (navMenu) {
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
        this.innerHTML = this.classList.contains('active') ? '✕' : '☰';
      }
    });
  }
}

// Enhanced Form Validation
function initFormValidation() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    const inputs = form.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
      input.addEventListener('blur', function() {
        validateField(this);
      });
      
      input.addEventListener('input', function() {
        if (this.classList.contains('error')) {
          validateField(this);
        }
      });
    });
  });
}

function validateField(field) {
  const value = field.value.trim();
  let isValid = true;
  let errorMessage = '';
  
  // Required field check
  if (field.hasAttribute('required') && !value) {
    isValid = false;
    errorMessage = 'Ovo polje je obavezno';
  }
  
  // Email validation
  if (field.type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      isValid = false;
      errorMessage = 'Unesite valjanu email adresu';
    }
  }
  
  // Phone validation
  if (field.type === 'tel' && value) {
    const phoneRegex = /^[\d\s\+\-\(\)]+$/;
    if (!phoneRegex.test(value)) {
      isValid = false;
      errorMessage = 'Unesite valjan broj telefona';
    }
  }
  
  // Update field state
  if (isValid) {
    field.classList.remove('error');
    removeErrorMessage(field);
  } else {
    field.classList.add('error');
    showErrorMessage(field, errorMessage);
  }
  
  return isValid;
}

function showErrorMessage(field, message) {
  removeErrorMessage(field);
  
  const errorDiv = document.createElement('div');
  errorDiv.className = 'field-error';
  errorDiv.textContent = message;
  field.parentNode.insertBefore(errorDiv, field.nextSibling);
}

function removeErrorMessage(field) {
  const existingError = field.parentNode.querySelector('.field-error');
  if (existingError) {
    existingError.remove();
  }
}

// Toast Notifications
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('show');
  }, 100);
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

// Accessibility Features
function initAccessibility() {
  // Skip to main content link
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.className = 'skip-link';
  skipLink.textContent = 'Skip to main content';
  document.body.insertBefore(skipLink, document.body.firstChild);
  
  // Add main content ID if not exists
  const mainContent = document.querySelector('main, .hero, section');
  if (mainContent && !mainContent.id) {
    mainContent.id = 'main-content';
  }
  
  // Keyboard navigation for interactive elements
  document.querySelectorAll('.service-card, .gallery-item, .testimonial-card').forEach(el => {
    if (!el.hasAttribute('tabindex')) {
      el.setAttribute('tabindex', '0');
    }
    
    el.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });
}

// Performance Monitoring
function initPerformanceMonitoring() {
  // Monitor Largest Contentful Paint (LCP)
  if ('PerformanceObserver' in window) {
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      // Observer not supported
    }
    
    // Monitor First Input Delay (FID)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          console.log('FID:', entry.processingStart - entry.startTime);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      // Observer not supported
    }
  }
}

// Service Worker Registration
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('✅ Service Worker registered:', registration.scope);
      })
      .catch(error => {
        console.log('❌ Service Worker registration failed:', error);
      });
  }
}

// Cookie Consent
function initCookieConsent() {
  const consent = localStorage.getItem('cookieConsent');
  
  if (!consent) {
    const banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.innerHTML = `
      <div class="cookie-content">
        <p>Koristimo kolačiće kako bismo poboljšali vaše iskustvo. Nastavljanjem pregledavanja, pristajete na našu upotrebu kolačića.</p>
        <div class="cookie-actions">
          <button class="cookie-accept" onclick="acceptCookies()">Prihvati</button>
          <button class="cookie-decline" onclick="declineCookies()">Odbij</button>
        </div>
      </div>
    `;
    document.body.appendChild(banner);
  }
}

window.acceptCookies = function() {
  localStorage.setItem('cookieConsent', 'accepted');
  document.querySelector('.cookie-banner').remove();
};

window.declineCookies = function() {
  localStorage.setItem('cookieConsent', 'declined');
  document.querySelector('.cookie-banner').remove();
};

// Initialize cookie consent
initCookieConsent();

// Utility Functions
window.showToast = showToast;
window.validateField = validateField;
