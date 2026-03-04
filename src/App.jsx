import React, { useState } from 'react';
import { newsItems } from './data';

function App() {
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-section">
          <h1>Iran Times</h1>
          <p className="subtitle">Breaking News & Independent Analysis</p>
        </div>
        <nav className="nav">
          <a href="#" onClick={() => setSelectedNews(null)}>Home</a>
          <a href="#">Politics</a>
          <a href="#">War</a>
          <a href="#">Economy</a>
          <a href="#">Opinion</a>
        </nav>
      </header>

      <main className="main-content">
        {!selectedNews ? (
          <div className="news-grid">
            <div className="breaking-news">
              <span className="breaking-tag">Breaking News</span>
              <p>March 4, 2026: Regional conflict enters fifth day. U.S. and Israeli strikes continue on Tehran.</p>
            </div>
            {newsItems.map((item) => (
              <article key={item.id} className="news-card" onClick={() => setSelectedNews(item)}>
                <img src={item.image} alt={item.title} className="news-image" />
                <div className="news-content">
                  <span className="category">{item.category}</span>
                  <h2 className="title">{item.title}</h2>
                  <p className="summary">{item.summary}</p>
                  <span className="date">{item.date}</span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <article className="full-article">
            <button className="back-btn" onClick={() => setSelectedNews(null)}>← Back to Home</button>
            <img src={selectedNews.image} alt={selectedNews.title} className="hero-image" />
            <div className="article-header">
              <span className="category">{selectedNews.category}</span>
              <h1>{selectedNews.title}</h1>
              <p className="date">Published on {selectedNews.date}</p>
            </div>
            <div className="article-body">
              <p className="lead">{selectedNews.summary}</p>
              <p>{selectedNews.content}</p>
              <p>Reports are still coming in from various sources across the region. Local authorities have urged civilians to remain in shelters as the situation evolves rapidly.</p>
            </div>
          </article>
        )}
      </main>

      <footer className="footer">
        <p>&copy; 2026 Iran Times News. All rights reserved.</p>
        <p className="disclaimer">Independent news coverage from the region.</p>
      </footer>
    </div>
  );
}

export default App;
