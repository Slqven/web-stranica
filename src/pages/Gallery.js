import React, { useState } from 'react';
import './Pages.css';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    src: `https://picsum.photos/500/500?random=${i + 10}`,
    alt: `Galerija ${i + 1}`
  }));

  return (
    <div className="page gallery-page">
      <div className="page-header">
        <h1>Galerija</h1>
        <p>Pogledajte naše radove i transformacije</p>
      </div>

      <div className="container">
        <div className="gallery-full-grid">
          {images.map((image) => (
            <div 
              key={image.id} 
              className="gallery-full-item"
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.src} alt={image.alt} />
              <div className="gallery-full-overlay">
                <span>Klikni za uvećanje</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content">
            <button className="lightbox-close">&times;</button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
