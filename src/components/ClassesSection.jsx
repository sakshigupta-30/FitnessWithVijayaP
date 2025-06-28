import React from 'react';
import './ClassesSection.css';
import danceImage from '../assets/class_image.png'; // Adjust path if needed

const ClassesSection = () => {
  return (
    <section className="classes-section">
      <div className="classes-container">
        <div className="classes-image">
          <img src={danceImage} alt="Dance Class" />
        </div>
        <div className="classes-content">
          <h2><span className="highlight">THE</span> CLASSES</h2>
          <p>
            All of our formats are unique to The Studio and were created by our team with the intention
            of giving you back pieces of yourself we all tend to lose as we experience different stages of life.
            Whether that missing thing is confidence, friendship, motivation, or the freedom to dance wildly,
            we are here for <strong>ALL OF IT</strong>.
          </p>
          <button className="classes-button">SEE THEM ALL</button>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
