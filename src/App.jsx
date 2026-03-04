import React, { useState } from 'react';
import { newsItems } from './data';

function App() {
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-section">
          <h1>Iran War Report</h1>
          <p className="subtitle">Real-time Updates from the 2026 Conflict</p>
        </div>
        <nav className="nav">
          <a href="#" onClick={() => setSelectedNews(null)}>Frontline</a>
          <a href="#">Strategy</a>
          <a href="#">Operations</a>
          <a href="#">Global Impact</a>
          <a href="#">Analysis</a>
        </nav>
      </header>

      <main className="main-content">
        {!selectedNews ? (
          <div className="news-grid">
            <div className="breaking-news">
              <span className="breaking-tag">URGENT</span>
              <p>March 4, 2026: IRGC confirmed closure of Strait of Hormuz. US Central Command on highest alert.</p>
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
        <p>&copy; 2026 Iran War Report. Military-grade reporting from the conflict zone.</p>
        <p className="disclaimer">Independent tactical and strategic analysis.</p>
      </footer>
    </div>
  );
}

export default App;
