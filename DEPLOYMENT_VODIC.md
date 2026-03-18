# 🚀 Vodič za Deployment - Salon Ljepote DREAM

## ✅ ŠTO JE URAĐENO

Kreirana je potpuna React aplikacija za Salon Ljepote DREAM sa sljedećim značajkama:

### 📱 Stranice (sve na hrvatskom jeziku):
- **Početna** - Hero sekcija, pregled usluga, galerija, booking forma
- **Usluge** - Detaljan prikaz svih usluga s cijenama
- **O Nama** - Priča o salonu i vrijednosti
- **Galerija** - Prikaz radova s lightbox funkcijom
- **Kontakt** - Kontakt forma i informacije
- **Blog** - Blog članci i savjeti
- **Tim** - Prikaz članova tima

### 🎨 Komponente:
- **Header** - Navigacija s mobilnim menijem
- **Footer** - Kontakt info, linkovi, radno vrijeme
- **Responsive dizajn** - Radi na svim uređajima

### ⚙️ Tehnologije:
- React 19
- React Router DOM 7
- CSS3 (Flexbox & Grid)
- GitHub Pages deployment

## 🌐 STRANICA JE VEĆ DEPLOYANA!

Vaša stranica je uspješno deployana i dostupna na:

### **https://slqven.github.io/web-stranica/**

## 📋 KAKO AŽURIRATI STRANICU

### Metoda 1: Automatski (GitHub Actions)

1. Napravite izmjene u kodu
2. Commitajte i pushajte:
```bash
cd nina-salon-react
git add .
git commit -m "Ažuriranje sadržaja"
git push origin main
```
3. GitHub Actions će automatski build-ati i deployati

### Metoda 2: Manualni Deployment

```bash
cd nina-salon-react
npm run deploy
```

## 🔧 LOKALNI DEVELOPMENT

```bash
# Instalacija paketa
cd nina-salon-react
npm install

# Pokretanje dev servera (port 3001 ako je 3000 zauzet)
PORT=3001 npm start

# Build za production
npm run build
```

## 📝 KAKO PROMIJENITI SADRŽAJ

### Promijeniti Tekst na Stranicama:

1. **Početna stranica**: `src/pages/Home.js`
2. **Usluge**: `src/pages/Services.js`
3. **O Nama**: `src/pages/About.js`
4. **Galerija**: `src/pages/Gallery.js`
5. **Kontakt**: `src/pages/Contact.js`
6. **Blog**: `src/pages/Blog.js`
7. **Tim**: `src/pages/Team.js`

### Promijeniti Header/Footer:

- **Header**: `src/components/Header.js`
- **Footer**: `src/components/Footer.js`

### Promijeniti Stilove:

- **Globalni stilovi**: `src/App.css`
- **Header stilovi**: `src/components/Header.css`
- **Footer stilovi**: `src/components/Footer.css`
- **Početna stranica**: `src/pages/Home.css`
- **Ostale stranice**: `src/pages/Pages.css`

### Dodati Slike:

1. Stavite slike u `public/images/` folder
2. Referencira\u0107ite ih kao `/images/ime-slike.jpg`

## 🎨 PRILAGODBA BOJA

Glavne boje su definirane u CSS fajlovima:

- **Zlatna**: `#d4af37`
- **Svijetla zlatna**: `#f4e5c3`
- **Tamna**: `#2c3e50`

Promijenite ih u CSS fajlovima po želji.

## 📞 KONTAKT INFORMACIJE

Trenutne kontakt informacije u aplikaciji:

- **Adresa**: Ul. Braće Radića 13, Slatina, 40300
- **Telefon**: +385 91 605 0724
- **Email**: slqven123@gmail.com

Za promjenu, ažurirajte:
- `src/components/Footer.js`
- `src/pages/Contact.js`

## 🔄 RADNO VRIJEME

Trenutno radno vrijeme:
- Pon - Pet: 09:00 - 20:00
- Subota: 09:00 - 18:00
- Nedjelja: Zatvoreno

Za promjenu, ažurirajte `src/components/Footer.js`

## 📧 KONTAKT FORME

Forme su trenutno simulirane (prikazuju poruku uspjeha bez slanja).

Za pravo slanje emailova, možete koristiti:
- **Formspree** - https://formspree.io/
- **EmailJS** - https://www.emailjs.com/
- **Web3Forms** - https://web3forms.com/

## 🐛 TROUBLESHOOTING

### Stranica se ne učitava:
1. Provjerite da li je GitHub Pages omogućen
2. Sačekajte 2-3 minute nakon deployanja
3. Očistite browser cache

### Promjene se ne vide:
1. Napravite novi deployment: `npm run deploy`
2. Očistite browser cache (Ctrl + Shift + R)
3. Provjerite da li ste commitali promjene

### Build greške:
1. Provjerite da li su sve putanje ispravne
2. Pokrenite `npm install` ponovo
3. Provjerite konzolu za greške

## 📚 STRUKTURA PROJEKTA

```
nina-salon-react/
├── public/
│   ├── images/          # Slike
│   ├── css/             # Dodatni CSS
│   └── js/              # Dodatni JS
├── src/
│   ├── components/      # React komponente
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── pages/           # Stranice
│   │   ├── Home.js
│   │   ├── Services.js
│   │   ├── About.js
│   │   ├── Gallery.js
│   │   ├── Contact.js
│   │   ├── Blog.js
│   │   ├── Team.js
│   │   ├── Home.css
│   │   └── Pages.css
│   ├── App.js           # Glavni App
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## 🎉 GOTOVO!

Vaša React aplikacija je uspješno kreirana i deployana!

**Live URL**: https://slqven.github.io/web-stranica/

---

**Izrađeno s ❤️ za Salon Ljepote DREAM**

Za dodatnu pomoć ili pitanja, kontaktirajte developera.
