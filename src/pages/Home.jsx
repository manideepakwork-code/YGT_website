import { useEffect, useRef } from 'react';
import './Page.css';

function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video plays on load
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay prevented:', error);
      });
    }
  }, []);

  return (
    <div className="page-container">
      <div className="hero-section full-bleed">
        <video 
          ref={videoRef}
          className="hero-video" 
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          preload="auto"
        >
          <source src="https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_25fps.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-industrial-factory-with-smokestacks-4181-large.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/2491284/2491284-hd_1920_1080_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <div className="content-section">
          <h1 className="hero-title">Welcome to YGT Group</h1>
          <p className="hero-subtitle">Your Trusted Partner in Global Trading</p>
          <p className="hero-description">
            We specialize in delivering exceptional trading solutions with reliability, 
            integrity, and innovation. With years of expertise in the industry, we connect 
            businesses worldwide with quality products and services.
          </p>
        </div>
      </div>
      
      <div className="content-section">
      
      <div className="features-grid">
        <div className="feature-card feature-card-global">
          <div className="feature-content">
            <h3>Global Reach</h3>
            <p>Expanding markets across continents with strategic partnerships and efficient supply chains.</p>
          </div>
        </div>
        
        <div className="feature-card feature-card-delivery">
          <div className="feature-content">
            <h3>Fast Delivery</h3>
            <p>Optimized logistics ensuring timely delivery of goods to your doorstep.</p>
          </div>
        </div>
        
        <div className="feature-card feature-card-partners">
          <div className="feature-content">
            <h3>Trusted Partners</h3>
            <p>Building long-term relationships with clients based on transparency and quality.</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Home;
