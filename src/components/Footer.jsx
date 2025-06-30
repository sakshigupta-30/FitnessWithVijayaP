import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#">Redeem a gift card</a>
        <a href="#">Buy a gift card</a>
        <a href="#">Privacy Policy & Terms of Service</a>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© Vijaya Tupurani</p>

        {/* Removed app buttons completely */}
        <div className="social-icons">
          <a href="https://www.instagram.com/vijaya.tupurani/?hl=en" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://www.facebook.com/vijayatupurani" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://www.youtube.com/@vijayatupurani" target="_blank" rel="noreferrer"><FaYoutube /></a>
          <a href="https://twitter.com/VijayaTupurani" target="_blank" rel="noreferrer"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
