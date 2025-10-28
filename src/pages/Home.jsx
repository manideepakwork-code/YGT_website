import './Page.css';

function Home() {
  return (
    <div className="page-container">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to YGT Group</h1>
        <p className="hero-subtitle">Your Trusted Partner in Global Trading</p>
        <p className="hero-description">
          We specialize in delivering exceptional trading solutions with reliability, 
          integrity, and innovation. With years of expertise in the industry, we connect 
          businesses worldwide with quality products and services.
        </p>
      </div>
      
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">🌍</div>
          <h3>Global Reach</h3>
          <p>Expanding markets across continents with strategic partnerships and efficient supply chains.</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Fast Delivery</h3>
          <p>Optimized logistics ensuring timely delivery of goods to your doorstep.</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">🤝</div>
          <h3>Trusted Partners</h3>
          <p>Building long-term relationships with clients based on transparency and quality.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
