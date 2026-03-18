import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>Salon Ljepote DREAM</h1>
          </Link>

          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Početna
            </Link>
            <Link to="/usluge" className={location.pathname === '/usluge' ? 'active' : ''}>
              Usluge
            </Link>
            <Link to="/o-nama" className={location.pathname === '/o-nama' ? 'active' : ''}>
              O Nama
            </Link>
            <Link to="/galerija" className={location.pathname === '/galerija' ? 'active' : ''}>
              Galerija
            </Link>
            <Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>
              Blog
            </Link>
            <Link to="/tim" className={location.pathname === '/tim' ? 'active' : ''}>
              Tim
            </Link>
            <Link to="/kontakt" className={location.pathname === '/kontakt' ? 'active' : ''}>
              Kontakt
            </Link>
            <a href="tel:+385916050724" className="phone-link">
              📞 +385 91 605 0724
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
