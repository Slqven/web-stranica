import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Salon Ljepote DREAM</h3>
            <p>Vaša ljepota je naša strast. Pružamo vrhunske usluge njege kose i ljepote u luksuznom okruženju.</p>
          </div>

          <div className="footer-section">
            <h4>Brzi Linkovi</h4>
            <ul>
              <li><Link to="/">Početna</Link></li>
              <li><Link to="/usluge">Usluge</Link></li>
              <li><Link to="/o-nama">O Nama</Link></li>
              <li><Link to="/galerija">Galerija</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/tim">Tim</Link></li>
              <li><Link to="/kontakt">Kontakt</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Radno Vrijeme</h4>
            <ul className="hours">
              <li><span>Ponedjeljak - Petak:</span> 09:00 - 20:00</li>
              <li><span>Subota:</span> 09:00 - 18:00</li>
              <li><span>Nedjelja:</span> Zatvoreno</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Kontakt</h4>
            <ul className="contact-info">
              <li>
                <i className="icon">📍</i>
                <span>Ul. Braće Radića 13<br />Slatina, 40300</span>
              </li>
              <li>
                <i className="icon">📞</i>
                <a href="tel:+385916050724">+385 91 605 0724</a>
              </li>
              <li>
                <i className="icon">✉️</i>
                <a href="mailto:slqven123@gmail.com">slqven123@gmail.com</a>
              </li>
            </ul>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Salon Ljepote DREAM. Sva prava pridržana.</p>
          <p>Izrađeno s ❤️ za ljepotu</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
