import { useEffect, useRef } from 'react';
import './Page.css';

function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video plays on load
    const video = videoRef.current;
    if (video) {
      console.log('Video element found:', video);
      
      // Handle video canplay event
      const handleCanPlay = () => {
        console.log('Video can play');
        video.play().catch(error => {
          console.log('Video play error:', error);
        });
      };

      // Handle video loadedmetadata
      const handleLoadedMetadata = () => {
        console.log('Video metadata loaded, duration:', video.duration);
      };

      // Handle video loading
      const handleLoadedData = () => {
        console.log('Video data loaded, readyState:', video.readyState);
        video.play().catch(error => {
          console.log('Video autoplay prevented:', error);
        });
      };

      // Handle video errors
      const handleError = (e) => {
        console.error('Video error:', e);
        console.error('Video error code:', video.error?.code);
        console.error('Video error message:', video.error?.message);
      };

      // Handle video playing
      const handlePlaying = () => {
        console.log('Video is now playing!');
      };

      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);
      video.addEventListener('playing', handlePlaying);

      // Force load
      video.load();

      // Try to play immediately after a short delay
      setTimeout(() => {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log('Video started playing successfully');
            })
            .catch(error => {
              console.log('Video autoplay prevented:', error.name, error.message);
            });
        }
      }, 100);

      // Cleanup
      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
        video.removeEventListener('playing', handlePlaying);
      };
    }
  }, []);

  return (
    <div className="page-container">
      <div className="hero-section full-bleed">
        <video 
          ref={videoRef}
          className="hero-video" 
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          webkit-playsinline="true"
          x5-playsinline="true"
          style={{ 
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1
          }}
          poster="https://images.pexels.com/photos/4489732/pexels-photo-4489732.jpeg?auto=compress&cs=tinysrgb&w=1920"
        >
          {/* High quality automobile parts manufacturing / industry background video sources (1080p) */}
          <source src="https://videos.pexels.com/video-files/4489932/4489932-hd_1920_1080_24fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/5309396/5309396-hd_1920_1080_25fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/5309390/5309390-hd_1920_1080_25fps.mp4" type="video/mp4" />
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
