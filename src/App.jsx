import { useEffect, useState } from 'react';
import logoDark from './assets/ygt-logo-dark.png';
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
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    const stored = window.localStorage.getItem('ygt-theme');
    if (stored === 'light' || stored === 'dark') return stored;
    // fall back to system preference
    return window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('ygt-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const isDark = theme === 'dark';

  const primaryLogoSrc =
    'https://yadardageetatraders.com/wp-content/uploads/2022/12/YADARDA-300x197.jpg';

  // Navbar uses different logo per theme, footer always uses the dark logo.
  // Place your provided logo file at: my-react-app/src/assets/ygt-logo-dark.png
  const navbarLogoSrc = isDark ? logoDark : primaryLogoSrc;
  const footerLogoSrc = logoDark;

  const handleLogoError = (event) => {
    // If dark logo file is missing or fails to load, fall back to primary logo
    if (event.currentTarget.src !== primaryLogoSrc) {
      event.currentTarget.src = primaryLogoSrc;
    }
  };

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="navbar__wrapper">
            <div className="navbar__brand">
              <Link to="/">
                <img
                  src={navbarLogoSrc}
                  alt="Yadardageeta Traders Logo"
                  className="navbar__logo"
                  onError={handleLogoError}
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

            <button
              type="button"
              className={`theme-toggle ${isDark ? 'theme-toggle--dark' : 'theme-toggle--light'}`}
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <span className="theme-toggle__track">
                <span className="theme-toggle__thumb" />
                <span className="theme-toggle__icon theme-toggle__icon--sun">☀️</span>
                <span className="theme-toggle__icon theme-toggle__icon--moon">🌙</span>
              </span>
            </button>
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
                  src={footerLogoSrc}
                  alt="Yadardageeta Traders Logo"
                  className="footer__logo"
                  onError={handleLogoError}
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