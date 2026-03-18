/**
 * Live Chat Widget for Nina Salon
 * Automated chat with Croatian language support
 */

(function() {
  'use strict';

  // Chat Widget HTML
  const chatHTML = `
    <div class="chat-widget" id="chatWidget">
      <div class="chat-header" id="chatHeader">
        <div class="chat-header-content">
          <div class="chat-avatar">💬</div>
          <div class="chat-header-text">
            <h4>Nina Salon</h4>
            <p class="chat-status">Online</p>
          </div>
        </div>
        <button class="chat-close" id="chatClose">✕</button>
      </div>
      
      <div class="chat-messages" id="chatMessages">
        <div class="chat-message bot-message">
          <div class="message-avatar">🤖</div>
          <div class="message-content">
            <p>Pozdrav! 👋 Dobrodošli u Nina Salon. Kako vam mogu pomoći danas?</p>
          </div>
        </div>
      </div>
      
      <div class="chat-quick-actions" id="chatQuickActions">
        <button class="quick-action-btn" data-action="booking">📅 Rezervacija</button>
        <button class="quick-action-btn" data-action="services">💇 Usluge</button>
        <button class="quick-action-btn" data-action="prices">💰 Cijene</button>
        <button class="quick-action-btn" data-action="hours">🕐 Radno vrijeme</button>
      </div>
      
      <div class="chat-input-container">
        <input type="text" class="chat-input" id="chatInput" placeholder="Unesite poruku...">
        <button class="chat-send" id="chatSend">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 10l18-8-8 18-2-8-8-2z"/>
          </svg>
        </button>
      </div>
    </div>
    
    <button class="chat-toggle" id="chatToggle">
      <span class="chat-toggle-icon">💬</span>
      <span class="chat-notification-badge" id="chatBadge">1</span>
    </button>
  `;

  // Insert chat widget into page
  document.addEventListener('DOMContentLoaded', function() {
    document.body.insertAdjacentHTML('beforeend', chatHTML);
    initializeChat();
  });

  // Initialize chat functionality
  function initializeChat() {
    const chatWidget = document.getElementById('chatWidget');
    const chatToggle = document.getElementById('chatToggle');
    const chatClose = document.getElementById('chatClose');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');
    const chatMessages = document.getElementById('chatMessages');
    const chatBadge = document.getElementById('chatBadge');
    const quickActions = document.querySelectorAll('.quick-action-btn');

    // Toggle chat
    chatToggle.addEventListener('click', function() {
      chatWidget.classList.toggle('active');
      chatBadge.style.display = 'none';
      if (chatWidget.classList.contains('active')) {
        chatInput.focus();
      }
    });

    // Close chat
    chatClose.addEventListener('click', function() {
      chatWidget.classList.remove('active');
    });

    // Send message
    function sendMessage() {
      const message = chatInput.value.trim();
      if (message) {
        addUserMessage(message);
        chatInput.value = '';
        
        // Simulate bot response
        setTimeout(() => {
          const response = getBotResponse(message);
          addBotMessage(response);
        }, 500);
      }
    }

    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });

    // Quick actions
    quickActions.forEach(btn => {
      btn.addEventListener('click', function() {
        const action = this.dataset.action;
        handleQuickAction(action);
      });
    });

    // Add user message
    function addUserMessage(text) {
      const messageHTML = `
        <div class="chat-message user-message">
          <div class="message-content">
            <p>${text}</p>
          </div>
          <div class="message-avatar">👤</div>
        </div>
      `;
      chatMessages.insertAdjacentHTML('beforeend', messageHTML);
      scrollToBottom();
    }

    // Add bot message
    function addBotMessage(text) {
      const messageHTML = `
        <div class="chat-message bot-message">
          <div class="message-avatar">🤖</div>
          <div class="message-content">
            <p>${text}</p>
          </div>
        </div>
      `;
      chatMessages.insertAdjacentHTML('beforeend', messageHTML);
      scrollToBottom();
    }

    // Scroll to bottom
    function scrollToBottom() {
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Handle quick actions
    function handleQuickAction(action) {
      let response = '';
      
      switch(action) {
        case 'booking':
          response = 'Za rezervaciju možete:\n\n📞 Nazvati: +385 91 605 0724\n📧 Email: karolina@beautydeam.hr\n🌐 Ili popuniti formu na našoj web stranici';
          break;
        case 'services':
          response = 'Nudimo sljedeće usluge:\n\n💇 Dizajn kose\n🎨 Tretman boje\n✨ Keratin tretman\n💆 Spa tretmani\n👰 Vjenčane frizure\n\nPogledajte cijelu ponudu na stranici Usluge!';
          break;
        case 'prices':
          response = 'Naše cijene:\n\n💇 Dizajn kose: od 65 EUR\n🎨 Tretman boje: od 95 EUR\n✨ Keratin: 150 EUR\n💆 Spa tretman: 125 EUR\n\nKontaktirajte nas za detaljne informacije!';
          break;
        case 'hours':
          response = 'Radno vrijeme:\n\n📅 Ponedjeljak - Petak: 9:00 - 20:00\n📅 Subota: 10:00 - 18:00\n📅 Nedjelja: Zatvoreno\n\nRadujemo se vašoj posjeti!';
          break;
      }
      
      addBotMessage(response);
    }

    // Get bot response based on keywords
    function getBotResponse(message) {
      const msg = message.toLowerCase();
      
      // Booking related
      if (msg.includes('rezerv') || msg.includes('termin') || msg.includes('zakazat')) {
        return 'Za rezervaciju termina možete nas nazvati na +385 91 605 0724 ili poslati email na karolina@beautydeam.hr. Također možete popuniti formu za rezervaciju na našoj web stranici. 📅';
      }
      
      // Services
      if (msg.includes('uslug') || msg.includes('što nudite') || msg.includes('ponuda')) {
        return 'Nudimo širok spektar usluga: dizajn kose, tretmane boje, keratin tretmane, spa tretmane, vjenčane frizure i još mnogo toga! Pogledajte našu stranicu Usluge za detaljne informacije. 💇‍♀️';
      }
      
      // Prices
      if (msg.includes('cijen') || msg.includes('košta') || msg.includes('cijena')) {
        return 'Naše cijene variraju ovisno o usluzi. Dizajn kose počinje od 65 EUR, tretman boje od 95 EUR, keratin tretman je 150 EUR. Za točne cijene i posebne ponude, kontaktirajte nas! 💰';
      }
      
      // Hours
      if (msg.includes('radno') || msg.includes('otvoreno') || msg.includes('kada')) {
        return 'Radimo od ponedjeljka do petka 9:00-20:00, subotom 10:00-18:00. Nedjeljom smo zatvoreni. 🕐';
      }
      
      // Location
      if (msg.includes('gdje') || msg.includes('adresa') || msg.includes('lokacija')) {
        return 'Nalazimo se na adresi Ul. Braće Radića 13, 40300 Slatina. Lako nas možete pronaći! 📍';
      }
      
      // Contact
      if (msg.includes('kontakt') || msg.includes('telefon') || msg.includes('email')) {
        return 'Možete nas kontaktirati na:\n📞 +385 91 605 0724\n📧 karolina@beautydeam.hr\nRadujemo se vašem javljanju!';
      }
      
      // Greeting
      if (msg.includes('bok') || msg.includes('pozdrav') || msg.includes('zdravo') || msg.includes('dobar dan')) {
        return 'Pozdrav! 👋 Kako vam mogu pomoći danas?';
      }
      
      // Thank you
      if (msg.includes('hvala') || msg.includes('zahvalj')) {
        return 'Nema na čemu! Ako imate još pitanja, slobodno pitajte. 😊';
      }
      
      // Default response
      return 'Hvala na poruci! Za detaljnije informacije, možete nas nazvati na +385 91 605 0724 ili poslati email na karolina@beautydeam.hr. Također možete koristiti brze akcije ispod za česta pitanja. 💬';
    }
  }

  console.log('✅ Chat widget initialized');
})();
