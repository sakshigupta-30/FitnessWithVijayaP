import React from 'react';
import './MeetVijaya.css';
import vijayaImage from '../assets/VijayaTupurani.png'; // Rename uploaded file to vijaya.png and place in src/assets

const MeetVijaya = () => {
  return (
    <section className="vijaya-section">
      <div className="vijaya-container">
        <div className="vijaya-text">
          <h2><span className="highlight">MEET</span> VIJAYA TUPURANI</h2>
          <ul>
            <li>Trained in classical dance since age 3; certified Zumba instructor since 2012</li>
            <li>Army officer’s wife, mother of twins — balances family & fitness with grace</li>
            <li>Founder of FiVa Revolution, delivering fitness with joy across Hyderabad and Pune</li>
            <li>YouTube community of over 700k subscribers—India’s largest dance-fitness channel by an instructor</li>
          </ul>
          <button className="vijaya-button">WATCH ON YOUTUBE</button>
        </div>
        <div className="vijaya-image">
          <img src={vijayaImage} alt="Vijaya Tupurani" />
        </div>
      </div>
    </section>
  );
};

export default MeetVijaya;
