import './Page.css';

function About() {
  return (
    <div className="page-container">
      <div className="content-section">
        <h1 className="page-title">About Yadardageeta Traders</h1>
        
        <div className="about-content">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Founded with a vision to revolutionize global trading, Yadardageeta Traders 
              has established itself as a leading name in international commerce. We began 
              our journey with a simple yet powerful mission: to connect businesses worldwide 
              with seamless trading solutions.
            </p>
            
            <h2>Our Mission</h2>
            <p>
              To provide exceptional trading services that foster growth, create opportunities, 
              and build lasting partnerships. We are committed to delivering value through 
              innovation, efficiency, and unwavering dedication to our clients' success.
            </p>
            
            <h2>Our Values</h2>
            <ul className="values-list">
              <li><strong>Integrity:</strong> We conduct business with the highest ethical standards</li>
              <li><strong>Innovation:</strong> Continuously adapting to market needs and technology</li>
              <li><strong>Quality:</strong> Ensuring excellence in every transaction</li>
              <li><strong>Partnership:</strong> Building trust-based relationships with all stakeholders</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
