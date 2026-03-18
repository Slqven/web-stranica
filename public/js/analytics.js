/**
 * Analytics Integration for Nina Salon
 * Includes Google Analytics 4 and Facebook Pixel
 */

// Google Analytics 4 Configuration
const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your GA4 Measurement ID

// Facebook Pixel Configuration
const FB_PIXEL_ID = 'YOUR_PIXEL_ID'; // Replace with your Facebook Pixel ID

// Initialize Google Analytics 4
(function() {
  // Load GA4 script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', GA4_MEASUREMENT_ID);

  // Make gtag available globally
  window.gtag = gtag;
})();

// Initialize Facebook Pixel
(function() {
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  
  if (FB_PIXEL_ID && FB_PIXEL_ID !== 'YOUR_PIXEL_ID') {
    fbq('init', FB_PIXEL_ID);
    fbq('track', 'PageView');
  }
})();

// Custom Event Tracking Functions
const Analytics = {
  // Track booking attempts
  trackBooking: function(serviceName, date) {
    // Google Analytics
    if (window.gtag) {
      gtag('event', 'booking_attempt', {
        'event_category': 'Booking',
        'event_label': serviceName,
        'value': date
      });
    }
    
    // Facebook Pixel
    if (window.fbq) {
      fbq('track', 'Schedule', {
        content_name: serviceName,
        content_category: 'Booking'
      });
    }
    
    console.log('📊 Tracked booking:', serviceName, date);
  },

  // Track service views
  trackServiceView: function(serviceName) {
    if (window.gtag) {
      gtag('event', 'view_item', {
        'event_category': 'Services',
        'event_label': serviceName
      });
    }
    
    if (window.fbq) {
      fbq('track', 'ViewContent', {
        content_name: serviceName,
        content_type: 'service'
      });
    }
    
    console.log('📊 Tracked service view:', serviceName);
  },

  // Track contact form submissions
  trackContact: function(method) {
    if (window.gtag) {
      gtag('event', 'contact', {
        'event_category': 'Contact',
        'event_label': method
      });
    }
    
    if (window.fbq) {
      fbq('track', 'Contact');
    }
    
    console.log('📊 Tracked contact:', method);
  },

  // Track phone clicks
  trackPhoneClick: function(phoneNumber) {
    if (window.gtag) {
      gtag('event', 'phone_click', {
        'event_category': 'Contact',
        'event_label': phoneNumber
      });
    }
    
    if (window.fbq) {
      fbq('track', 'Contact', {
        content_name: 'Phone Call'
      });
    }
    
    console.log('📊 Tracked phone click:', phoneNumber);
  },

  // Track newsletter subscriptions
  trackNewsletterSignup: function(email) {
    if (window.gtag) {
      gtag('event', 'sign_up', {
        'event_category': 'Newsletter',
        'method': 'email'
      });
    }
    
    if (window.fbq) {
      fbq('track', 'CompleteRegistration', {
        content_name: 'Newsletter',
        status: 'subscribed'
      });
    }
    
    console.log('📊 Tracked newsletter signup');
  },

  // Track gallery views
  trackGalleryView: function(imageName) {
    if (window.gtag) {
      gtag('event', 'view_item', {
        'event_category': 'Gallery',
        'event_label': imageName
      });
    }
    
    console.log('📊 Tracked gallery view:', imageName);
  },

  // Track button clicks
  trackButtonClick: function(buttonName, location) {
    if (window.gtag) {
      gtag('event', 'click', {
        'event_category': 'Button',
        'event_label': buttonName,
        'value': location
      });
    }
    
    console.log('📊 Tracked button click:', buttonName, location);
  },

  // Track page scroll depth
  trackScrollDepth: function(percentage) {
    if (window.gtag) {
      gtag('event', 'scroll', {
        'event_category': 'Engagement',
        'event_label': `${percentage}%`,
        'value': percentage
      });
    }
    
    console.log('📊 Tracked scroll depth:', percentage + '%');
  }
};

// Auto-track phone clicks
document.addEventListener('DOMContentLoaded', function() {
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
  phoneLinks.forEach(link => {
    link.addEventListener('click', function() {
      const phoneNumber = this.href.replace('tel:', '');
      Analytics.trackPhoneClick(phoneNumber);
    });
  });
});

// Auto-track scroll depth
let scrollTracked = {
  25: false,
  50: false,
  75: false,
  100: false
};

window.addEventListener('scroll', function() {
  const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  
  Object.keys(scrollTracked).forEach(threshold => {
    if (scrollPercentage >= threshold && !scrollTracked[threshold]) {
      scrollTracked[threshold] = true;
      Analytics.trackScrollDepth(threshold);
    }
  });
});

// Make Analytics available globally
window.Analytics = Analytics;

console.log('✅ Analytics initialized (GA4 & Facebook Pixel)');
