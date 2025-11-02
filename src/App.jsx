import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Payment from './pages/Payment';
import Terms from './pages/Terms';
import Returns from './pages/Returns';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="navbar__wrapper">
            <div className="navbar__brand">
              <Link to="/">
                <img 
                  src="https://yadardageetatraders.com/wp-content/uploads/2022/12/YADARDA-300x197.jpg" 
                  alt="Yadardageeta Traders Logo" 
                  className="navbar__logo"
                />
              </Link>
            </div>
            <ul className="navbar__links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/payment">Payment</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="https://api1.vyaparapp.in/store/YADARDAGEETATRADERS" target="_blank" rel="noopener noreferrer">Online Store</a></li>
            </ul>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer__wrapper">
            <div className="footer__content">
              <div className="footer__section footer__section-logo">
                <img 
                  src="https://yadardageetatraders.com/wp-content/uploads/2022/12/YADARDA-300x197.jpg" 
                  alt="Yadardageeta Traders Logo" 
                  className="footer__logo"
                />
                <p className="footer__logo-text">Your Trusted Partner in Global Trading</p>
              </div>
              
              <div className="footer__section">
                <h3>Quick Links</h3>
                <ul className="footer__links">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/payment">Payment</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li><a href="https://api1.vyaparapp.in/store/YADARDAGEETATRADERS" target="_blank" rel="noopener noreferrer">Online Store</a></li>
                </ul>
              </div>
              
              <div className="footer__section">
                <h3>Legal</h3>
                <ul className="footer__links">
                  <li><Link to="/terms">Terms & Conditions</Link></li>
                  <li><Link to="/returns">Returns & Refunds</Link></li>
                  <li><Link to="/privacy">Privacy Policy</Link></li>
                </ul>
              </div>
              
              <div className="footer__section">
                <h3>Contact Us</h3>
                <div className="footer__contact">
                  <p>📧 <a href="mailto:sales@yadardageetatraders.com">sales@yadardageetatraders.com</a></p>
                  <p>📱 <a href="tel:+918884444852">+91 8884444852</a></p>
                  <p>📍 10-6-67/2/C, Raparthi Nagar, Khammam, Telangana</p>
                </div>
              </div>
            </div>
            
            <div className="footer__bottom">
              <p>© {new Date().getFullYear()} Yadardageeta Traders. All rights reserved.</p>
              <p>Your Trusted Partner in Global Trading</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;