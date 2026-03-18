# Salon Ljepote DREAM - React Aplikacija

Moderna React aplikacija za salon ljepote s potpunom funkcionalnoš\u0107u i hrvatskim jezikom.

## 🚀 Deployment na GitHub Pages

### Automatski Deployment

1. **Push kod na GitHub:**
```bash
cd nina-salon-react
git init
git add .
git commit -m "Initial React app"
git remote add origin https://github.com/Slqven/web-stranica.git
git push -u origin main
```

2. **Omogućite GitHub Pages:**
   - Idite na: https://github.com/Slqven/web-stranica
   - **Settings** → **Pages**
   - Source: **GitHub Actions**

3. **Stranica će biti dostupna na:**
   **https://slqven.github.io/web-stranica/**

### Manualni Deployment

```bash
npm run deploy
```

## 📦 Lokalni Development

```bash
# Instalacija
npm install

# Pokretanje dev servera
npm start

# Build za production
npm run build
```

## 🎨 Značajke

- ✅ Potpuno na hrvatskom jeziku
- ✅ React Router za navigaciju
- ✅ Responsive dizajn
- ✅ Moderne animacije
- ✅ Kontakt forme
- ✅ Galerija s lightbox-om
- ✅ Blog sekcija
- ✅ Tim stranica
- ✅ SEO optimizirano

## 📁 Struktura Projekta

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
└── package.json
```

## 🌐 Stranice

- **Početna** (`/`) - Hero sekcija, usluge, galerija, booking forma
- **Usluge** (`/usluge`) - Detaljan prikaz svih usluga
- **O Nama** (`/o-nama`) - Priča o salonu i vrijednosti
- **Galerija** (`/galerija`) - Prikaz radova s lightbox-om
- **Kontakt** (`/kontakt`) - Kontakt forma i informacije
- **Blog** (`/blog`) - Blog članci i savjeti
- **Tim** (`/tim`) - Prikaz članova tima

## 🔧 Tehnologije

- React 19
- React Router DOM 7
- CSS3 (Flexbox & Grid)
- GitHub Pages deployment

## 📝 Napomene

- Sve putanje su konfigurirane za GitHub Pages (`/web-stranica`)
- Slike se očekuju u `public/images/` folderu
- Forme su trenutno simulirane (dodajte backend po potrebi)

## 🎉 Live Demo

Nakon deployanja: **https://slqven.github.io/web-stranica/**

---

**Izrađeno s ❤️ za Salon Ljepote DREAM**
