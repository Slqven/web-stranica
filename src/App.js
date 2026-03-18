import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Team from './pages/Team';
import './App.css';

function App() {
  return (
    <Router basename="/web-stranica">
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/usluge" element={<Services />} />
            <Route path="/o-nama" element={<About />} />
            <Route path="/galerija" element={<Gallery />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/tim" element={<Team />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
