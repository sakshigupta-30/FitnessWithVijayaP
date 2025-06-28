// ContactDetails.jsx
import React from 'react';
import './ContactDetails.css';

const ContactDetails = () => {
  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <p>
        Have questions? Send us an email at <br />
        <a href="mailto:vijaya.tupurani@gmail.com">
          vijaya.tupurani@gmail.com
        </a>
        <br />
        or reach out via YouTube at <br />
        <a href="https://www.youtube.com/@vijayatupurani" target="_blank" rel="noreferrer">
          youtube.com/@vijayatupurani
        </a>
      </p>
      <p>
        For technical support, please email{' '}
        <a href="mailto:support@vijayatupurani.com">
          support@vijayatupurani.com
        </a>
      </p>
    </section>
  );
};

export default ContactDetails;
