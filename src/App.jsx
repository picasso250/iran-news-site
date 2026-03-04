import React, { useState } from 'react';
import { newsItems } from './data';

function App() {
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-section">
          <h1>伊朗战争简报</h1>
          <p className="subtitle">2026年冲突实时更新</p>
        </div>
        <nav className="nav">
          <a href="#" onClick={() => setSelectedNews(null)}>前线</a>
          <a href="#">战略</a>
          <a href="#">行动</a>
          <a href="#">全球影响</a>
          <a href="#">深度分析</a>
        </nav>
      </header>

      <main className="main-content">
        {!selectedNews ? (
          <div className="news-grid">
            <div className="breaking-news">
              <span className="breaking-tag">紧急</span>
              <p>2026年3月4日：伊朗伊斯兰革命卫队确认关闭霍尔木兹海峡。美国中央司令部进入最高戒备状态。</p>
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
            <button className="back-btn" onClick={() => setSelectedNews(null)}>← 返回首页</button>
            <img src={selectedNews.image} alt={selectedNews.title} className="hero-image" />
            <div className="article-header">
              <span className="category">{selectedNews.category}</span>
              <h1>{selectedNews.title}</h1>
              <p className="date">发布于 {selectedNews.date}</p>
            </div>
            <div className="article-body">
              <p className="lead">{selectedNews.summary}</p>
              <p>{selectedNews.content}</p>
              <p>该地区各方消息仍在不断传回。由于局势迅速变化，当地政府敦促平民留在避难所中。</p>
            </div>
          </article>
        )}
      </main>

      <footer className="footer">
        <p>&copy; 2026 伊朗战争简报。来自冲突前线的军事情报级报道。</p>
        <p className="disclaimer">独立战术与战略分析。</p>
      </footer>
    </div>
  );
}

export default App;
