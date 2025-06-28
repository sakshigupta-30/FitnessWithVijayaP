// Footer.jsx
import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="/logo.svg" alt="Vijaya Tupurani Logo" />
      </div>

      <div className="footer-links">
        <a href="#">Redeem a gift card</a>
        <a href="#">Buy a gift card</a>
        <a href="#">Privacy Policy & Terms of Service</a>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© Vijaya Tupurani</p>

        <div className="app-buttons">
          <a href="#"><img src="/appstore.png" alt="Download on App Store" /></a>
          <a href="#"><img src="/googleplay.png" alt="Get it on Google Play" /></a>
        </div>

        <div className="social-icons">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaTiktok /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
