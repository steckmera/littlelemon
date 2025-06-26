import './Footer.css'; 
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src="/logo.png" alt="Little Lemon Logo" className="footer-logo" />
          <p>© {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/" className="nav-item">Homepage</Link></li>
            <li><Link to="/booking" className="nav-item">Booking</Link></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="mailto:info@littlelemon.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
