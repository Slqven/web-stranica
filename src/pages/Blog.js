import React from 'react';
import './Pages.css';

function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Top 5 Trendova u Bojanju Kose za 2024',
      excerpt: 'Otkrijte najnovije trendove u bojanju kose koji će dominirati ove godine...',
      date: '15. Ožujak 2024',
      image: 'https://picsum.photos/600/400?random=30'
    },
    {
      id: 2,
      title: 'Kako Održavati Zdravu Kosu Zimi',
      excerpt: 'Savjeti za njegu kose tijekom hladnih zimskih mjeseci...',
      date: '10. Ožujak 2024',
      image: 'https://picsum.photos/600/400?random=31'
    },
    {
      id: 3,
      title: 'Keratin Tretman: Sve Što Trebate Znati',
      excerpt: 'Kompletni vodič kroz keratin tretman i njegove prednosti...',
      date: '5. Ožujak 2024',
      image: 'https://picsum.photos/600/400?random=32'
    }
  ];

  return (
    <div className="page blog-page">
      <div className="page-header">
        <h1>Blog</h1>
        <p>Savjeti, trendovi i novosti iz svijeta ljepote</p>
      </div>

      <div className="container">
        <div className="blog-grid">
          {posts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-content">
                <span className="blog-date">{post.date}</span>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <button className="btn btn-secondary">Pročitaj Više</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
