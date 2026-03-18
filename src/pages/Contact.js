import React, { useState } from 'react';
import './Pages.css';

function Contact() {
  const [formData, setFormData] = useState({
    ime: '',
    email: '',
    telefon: '',
    poruka: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Hvala! Vaša poruka je poslana. Kontaktirat ćemo vas uskoro.');
    setFormData({ ime: '', email: '', telefon: '', poruka: '' });
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <div className="page contact-page">
      <div className="page-header">
        <h1>Kontakt</h1>
        <p>Javite nam se - rado ćemo odgovoriti na sva vaša pitanja</p>
      </div>

      <div className="container">
        {/* Google Maps */}
        <div className="map-container">
          <iframe
            title="Salon Ljepote DREAM Lokacija"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.8!2d17.7!3d45.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDQyJzAwLjAiTiAxN8KwNDInMDAuMCJF!5e0!3m2!1shr!2shr!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '15px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="contact-grid">
          <div className="contact-info-section">
            <h2>Kontakt Informacije</h2>
            
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h3>Adresa</h3>
                <p>Ul. Braće Radića 13<br />Slatina, 40300<br />Hrvatska</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h3>Telefon</h3>
                <p><a href="tel:+385916050724">+385 91 605 0724</a></p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h3>Email</h3>
                <p><a href="mailto:slqven123@gmail.com">slqven123@gmail.com</a></p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">🕐</div>
              <div>
                <h3>Radno Vrijeme</h3>
                <p>
                  Pon - Pet: 09:00 - 20:00<br />
                  Subota: 09:00 - 18:00<br />
                  Nedjelja: Zatvoreno
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Pošaljite Poruku</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="ime">Ime i Prezime *</label>
                <input
                  type="text"
                  id="ime"
                  name="ime"
                  value={formData.ime}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefon">Telefon</label>
                <input
                  type="tel"
                  id="telefon"
                  name="telefon"
                  value={formData.telefon}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="poruka">Poruka *</label>
                <textarea
                  id="poruka"
                  name="poruka"
                  value={formData.poruka}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-large">
                Pošalji Poruku
              </button>

              {status && <div className="form-status success">{status}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
