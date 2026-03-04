import React, { useState, useMemo } from 'react';
import { newsItems, timelineEvents } from './data';

function App() {
  const [selectedNews, setSelectedNews] = useState(null);
  const [currentCategory, setCurrentCategory] = useState('全部');

  const categories = ['全部', '前线', '战略', '行动', '全球影响', '深度分析', '时间轴'];

  const filteredNews = useMemo(() => {
    if (currentCategory === '全部') return newsItems;
    if (currentCategory === '时间轴') return [];
    return newsItems.filter(item => item.category === currentCategory);
  }, [currentCategory]);

  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
    setSelectedNews(null);
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-section">
          <h1>伊朗战争简报</h1>
          <p className="subtitle">2026年冲突实时更新</p>
        </div>
        <nav className="nav">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`nav-btn ${currentCategory === cat ? 'active' : ''}`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>
      </header>

      <main className="main-content">
        {!selectedNews ? (
          <div className="news-grid">
            <div className="breaking-news">
              <span className="breaking-tag">紧急</span>
              <p>2026年3月4日：伊朗伊斯兰革命卫队确认关闭霍尔木兹海峡。多国联合部队发起“史诗狂怒行动”。</p>
            </div>
            <div className="category-title-container">
               <h2 className="current-category-title">{currentCategory}</h2>
            </div>
            {currentCategory === '时间轴' ? (
              <div className="timeline-container">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <span className="timeline-time">{event.time}</span>
                      <h3 className="timeline-event">{event.event}</h3>
                      <span className={`impact-badge impact-${event.impact === '极高' ? 'critical' : event.impact === '高' ? 'high' : 'medium'}`}>
                        影响评估: {event.impact}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              filteredNews.length > 0 ? (
                filteredNews.map((item) => (
                  <article key={item.id} className="news-card no-image" onClick={() => setSelectedNews(item)}>
                    <div className="news-content">
                      <span className="category">{item.category}</span>
                      <h2 className="title">{item.title}</h2>
                      <p className="summary">{item.summary}</p>
                      <span className="date">{item.date}</span>
                    </div>
                  </article>
                ))
              ) : (
                <p className="no-news">该分类下暂无最新情报。</p>
              )
            )}
          </div>
        ) : (
          <article className="full-article">
            <button className="back-btn" onClick={() => setSelectedNews(null)}>← 返回</button>
            <div className="article-header">
              <span className="category">{selectedNews.category}</span>
              <h1>{selectedNews.title}</h1>
              <p className="date">发布于 {selectedNews.date}</p>
            </div>
            <div className="article-body">
              <p className="lead">{selectedNews.summary}</p>
              <div className="article-text">
                {selectedNews.content.split('\n').map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>
              <div className="field-report-tag">
                <p>注：本报道基于前线实时情报，内容可能随局势发展而更新。</p>
              </div>
            </div>
          </article>
        )}
      </main>

      <footer className="footer">
        <p>&copy; 2026 伊朗战争简报。独立军事与战略情报分析中心。</p>
        <p className="disclaimer">数据源：卫星遥感、开源情报及战地特约通讯员。</p>
      </footer>
    </div>
  );
}

export default App;
