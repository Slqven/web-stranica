import React from 'react';
import './Pages.css';

function About() {
  return (
    <div className="page about-page">
      <div className="page-header">
        <h1>O Nama</h1>
        <p>Upoznajte našu priču i tim</p>
      </div>

      <div className="container">
        <section className="about-content">
          <h2>Naša Priča</h2>
          <p>
            Salon Ljepote DREAM osnovan je s vizijom pružanja vrhunskih usluga ljepote u opuštajućem i luksuznom okruženju.
            Naša strast prema ljepoti i posvećenost izvrsnosti čine nas jednim od vodećih salona u regiji.
          </p>
          <p>
            S godinama iskustva i timom stručnjaka, pružamo personalizirane usluge koje zadovoljavaju jedinstvene potrebe svakog klijenta.
            Koristimo samo najkvalitetnije proizvode i najnovije tehnike kako bismo osigurali najbolje rezultate.
          </p>
        </section>

        <section className="values">
          <h2>Naše Vrijednosti</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>💎 Kvaliteta</h3>
              <p>Koristimo samo vrhunske proizvode i tehnike</p>
            </div>
            <div className="value-card">
              <h3>🤝 Posvećenost</h3>
              <p>Vaše zadovoljstvo je naš prioritet</p>
            </div>
            <div className="value-card">
              <h3>✨ Inovacija</h3>
              <p>Pratimo najnovije trendove u industriji</p>
            </div>
            <div className="value-card">
              <h3>❤️ Strast</h3>
              <p>Volimo ono što radimo</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
