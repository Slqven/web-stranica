import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [formData, setFormData] = useState({
    ime: '',
    email: '',
    telefon: '',
    datum: '',
    usluga: '',
    poruka: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Šaljem...');
    
    // Simulacija slanja forme
    setTimeout(() => {
      setFormStatus('Hvala! Vaša rezervacija je primljena. Kontaktirat ćemo vas uskoro.');
      setFormData({
        ime: '',
        email: '',
        telefon: '',
        datum: '',
        usluga: '',
        poruka: ''
      });
      
      setTimeout(() => setFormStatus(''), 5000);
    }, 1000);
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Dobrodošli u Salon Ljepote DREAM</h1>
          <p className="hero-subtitle">Vaša ljepota je naša strast</p>
          <p className="hero-description">
            Doživite luksuznu njegu kose i spa tretmane u našem modernom salonu. 
            Naš tim stručnjaka posvećen je pružanju vrhunskih usluga.
          </p>
          <div className="hero-buttons">
            <Link to="/kontakt" className="btn btn-primary">Zakažite Termin</Link>
            <Link to="/usluge" className="btn btn-secondary">Naše Usluge</Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <h2 className="section-title">Naše Usluge</h2>
          <p className="section-subtitle">Pružamo širok spektar profesionalnih usluga</p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">✂️</div>
              <h3>Šišanje i Stiliziranje</h3>
              <p>Profesionalno šišanje i stiliziranje za sve tipove kose</p>
              <p className="price">Od 150 kn</p>
            </div>

            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>Bojanje Kose</h3>
              <p>Moderna tehnika bojanja i balayage</p>
              <p className="price">Od 300 kn</p>
            </div>

            <div className="service-card">
              <div className="service-icon">💆</div>
              <h3>Tretmani Kose</h3>
              <p>Keratin, botox i regeneracijski tretmani</p>
              <p className="price">Od 250 kn</p>
            </div>

            <div className="service-card">
              <div className="service-icon">👰</div>
              <h3>Vjenčane Frizure</h3>
              <p>Elegantne frizure za posebne prilike</p>
              <p className="price">Od 400 kn</p>
            </div>

            <div className="service-card">
              <div className="service-icon">💅</div>
              <h3>Manikura i Pedikura</h3>
              <p>Profesionalna njega noktiju</p>
              <p className="price">Od 100 kn</p>
            </div>

            <div className="service-card">
              <div className="service-icon">✨</div>
              <h3>Ekstenzije Kose</h3>
              <p>Prirodne ekstenzije vrhunske kvalitete</p>
              <p className="price">Od 800 kn</p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/usluge" className="btn btn-primary">Sve Usluge</Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="gallery-preview">
        <div className="container">
          <h2 className="section-title">Galerija</h2>
          <p className="section-subtitle">Pogledajte naše radove</p>
          
          <div className="gallery-grid">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="gallery-item">
                <img 
                  src={`https://picsum.photos/400/400?random=${num}`} 
                  alt={`Galerija ${num}`} 
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <span>Pogledaj više</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/galerija" className="btn btn-primary">Cijela Galerija</Link>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="booking-section">
        <div className="container">
          <h2 className="section-title">Zakažite Termin</h2>
          <p className="section-subtitle">Popunite formu i kontaktirat ćemo vas</p>
          
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="ime">Ime i Prezime *</label>
                <input
                  type="text"
                  id="ime"
                  name="ime"
                  value={formData.ime}
                  onChange={handleChange}
                  required
                  placeholder="Vaše ime"
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
                  placeholder="vas@email.com"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="telefon">Telefon *</label>
                <input
                  type="tel"
                  id="telefon"
                  name="telefon"
                  value={formData.telefon}
                  onChange={handleChange}
                  required
                  placeholder="+385 91 234 5678"
                />
              </div>

              <div className="form-group">
                <label htmlFor="datum">Željeni Datum *</label>
                <input
                  type="date"
                  id="datum"
                  name="datum"
                  value={formData.datum}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="usluga">Odaberite Uslugu *</label>
              <select
                id="usluga"
                name="usluga"
                value={formData.usluga}
                onChange={handleChange}
                required
              >
                <option value="">-- Odaberite uslugu --</option>
                <option value="sisanje">Šišanje i Stiliziranje</option>
                <option value="bojanje">Bojanje Kose</option>
                <option value="tretmani">Tretmani Kose</option>
                <option value="vjencane">Vjenčane Frizure</option>
                <option value="manikura">Manikura i Pedikura</option>
                <option value="ekstenzije">Ekstenzije Kose</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="poruka">Dodatna Poruka</label>
              <textarea
                id="poruka"
                name="poruka"
                value={formData.poruka}
                onChange={handleChange}
                rows="4"
                placeholder="Imate li posebne zahtjeve ili pitanja?"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-large">
              Pošalji Rezervaciju
            </button>

            {formStatus && (
              <div className={`form-status ${formStatus.includes('Hvala') ? 'success' : ''}`}>
                {formStatus}
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <div className="container">
          <h2 className="section-title">Zašto Odabrati Nas?</h2>
          
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">👨‍🎨</div>
              <h3>Stručni Tim</h3>
              <p>Naš tim čine certificirani stručnjaci s godinama iskustva</p>
            </div>

            <div className="feature">
              <div className="feature-icon">⭐</div>
              <h3>Vrhunska Kvaliteta</h3>
              <p>Koristimo samo najkvalitetnije proizvode renomiranih brendova</p>
            </div>

            <div className="feature">
              <div className="feature-icon">🏆</div>
              <h3>Moderne Tehnike</h3>
              <p>Pratimo najnovije trendove i tehnike u industriji ljepote</p>
            </div>

            <div className="feature">
              <div className="feature-icon">💎</div>
              <h3>Luksuzno Okruženje</h3>
              <p>Uživajte u opuštajućoj atmosferi našeg modernog salona</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
