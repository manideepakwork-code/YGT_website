import './Page.css';

function Services() {
  return (
    <div className="page-container">
      <div className="content-section">
        <h1 className="page-title">Our Services</h1>
        <p className="page-subtitle">Comprehensive Trading Solutions for Your Business</p>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🚢</div>
            <h3>Logistics</h3>
            <p>
              End-to-end logistics solutions ensuring efficient transportation 
              and storage of goods across global networks with real-time tracking.
            </p>
            <ul>
              <li>Warehouse management</li>
              <li>Transport coordination</li>
              <li>Supply chain optimization</li>
            </ul>
          </div>
          
          <a 
            href="https://api1.vyaparapp.in/store/YADARDAGEETATRADERS" 
            target="_blank" 
            rel="noopener noreferrer"
            className="service-card-clickable"
          >
            <div className="service-card">
              <div className="service-icon">🚗</div>
              <h3>Auto Mobile Parts</h3>
              <p>
                Premium automotive parts and accessories with competitive pricing 
                and fast delivery for all your vehicle maintenance needs.
              </p>
              <ul>
                <li>Original & aftermarket parts</li>
                <li>Engine components</li>
                <li>Accessories & upgrades</li>
              </ul>
              <div className="service-link-text">Visit Online Store →</div>
            </div>
          </a>
          
          <div className="service-card">
            <div className="service-icon">📦</div>
            <h3>Import & Export</h3>
            <p>
              Expert handling of import and export operations with comprehensive 
              documentation and customs clearance services worldwide.
            </p>
            <ul>
              <li>Customs documentation</li>
              <li>Freight forwarding</li>
              <li>Regulatory compliance</li>
            </ul>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🍽️</div>
            <h3>Food & Beverages</h3>
            <p>
              Quality food and beverage products sourced from trusted suppliers 
              to meet diverse culinary and hospitality needs.
            </p>
            <ul>
              <li>Premium food products</li>
              <li>Beverage selection</li>
              <li>Bulk supply solutions</li>
            </ul>
          </div>
          
          <div className="service-card">
            <div className="service-icon">💻</div>
            <h3>Web Development</h3>
            <p>
              Professional web development services to create stunning and 
              functional websites that enhance your online presence and business growth.
            </p>
            <ul>
              <li>Responsive web design</li>
              <li>Custom web applications</li>
              <li>E-commerce solutions</li>
            </ul>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🏗️</div>
            <h3>YGT Build Works</h3>
            <p>
              Complete construction solutions for residential and commercial projects 
              with expert craftsmanship and quality materials.
            </p>
            <ul>
              <li>Residential construction</li>
              <li>Commercial projects</li>
              <li>Renovation & remodeling</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
