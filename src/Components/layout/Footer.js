import React from 'react';
import logoWhiteImage from './assets/logo-white.png';
import './Footer.css';


const Footer = () => {
    return (
    <footer className="site-footer">
      <div className="container grid">
        <img 
          className="site-footer-logo" 
          src={logoWhiteImage} 
          alt="Little Lemon" 
        />
        <nav className="site-footer-nav">
          <h4>Sitemap</h4>
          <ul>
         
          </ul>
        </nav>
        <div className="site-footer-contact">
          <h4>Contact us</h4>
          <address>
            <p>678 Pisa Ave, Chicago, IL 60611</p>
            <p>(312) 593-2744</p>
          </address>
        </div>
        <div className="site-footer-social">
          <h4>Connect with us</h4>
            <a href="https://www.facebook.com">
                <i className="fab fa-facebook"></i>
            </a>
        </div>
      </div>
    </footer>
    );
};

export default Footer;