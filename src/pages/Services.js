import React from 'react';
import './Pages.css';

function Services() {
  const services = [
    {
      icon: '✂️',
      title: 'Šišanje i Stiliziranje',
      description: 'Profesionalno šišanje za sve tipove kose, uključujući moderne i klasične stilove.',
      price: 'Od 150 kn',
      includes: ['Konsultacije', 'Pranje kose', 'Šišanje', 'Stiliziranje', 'Savjeti za njegu']
    },
    {
      icon: '🎨',
      title: 'Bojanje Kose',
      description: 'Moderna tehnika bojanja, balayage, ombre i highlights.',
      price: 'Od 300 kn',
      includes: ['Konsultacije o boji', 'Test alergije', 'Bojanje', 'Tretman', 'Stiliziranje']
    },
    {
      icon: '💆',
      title: 'Tretmani Kose',
      description: 'Keratin tretman, botox za kosu, regeneracijski tretmani.',
      price: 'Od 250 kn',
      includes: ['Analiza kose', 'Dubinsko pranje', 'Tretman', 'Maska', 'Stiliziranje']
    },
    {
      icon: '👰',
      title: 'Vjenčane Frizure',
      description: 'Elegantne frizure za vjenčanja i posebne prilike.',
      price: 'Od 400 kn',
      includes: ['Probna frizura', 'Konsultacije', 'Frizura na dan', 'Ukrasi', 'Fiksiranje']
    },
    {
      icon: '💅',
      title: 'Manikura i Pedikura',
      description: 'Profesionalna njega noktiju, gel lak, nail art.',
      price: 'Od 100 kn',
      includes: ['Oblikovanje', 'Njega', 'Lakiranje', 'Masaža', 'Hidratacija']
    },
    {
      icon: '✨',
      title: 'Ekstenzije Kose',
      description: 'Prirodne ekstenzije vrhunske kvalitete, različite metode.',
      price: 'Od 800 kn',
      includes: ['Konsultacije', 'Odabir boje', 'Postavljanje', 'Stiliziranje', 'Upute za njegu']
    }
  ];

  return (
    <div className="page services-page">
      <div className="page-header">
        <h1>Naše Usluge</h1>
        <p>Pružamo širok spektar profesionalnih usluga ljepote</p>
      </div>

      <div className="container">
        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="service-detail-card">
              <div className="service-detail-icon">{service.icon}</div>
              <h2>{service.title}</h2>
              <p className="service-description">{service.description}</p>
              <p className="service-price">{service.price}</p>
              <div className="service-includes">
                <h4>Što je uključeno:</h4>
                <ul>
                  {service.includes.map((item, i) => (
                    <li key={i}>✓ {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
