import React from 'react';
import './ClassesSection.css';
import danceImage from '../assets/class_image.png';

const ClassesSection = () => {
  return (
    <section
      className="classes-section"
      data-aos="fade"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div className="classes-container">
        <div className="classes-image" data-aos="fade" data-aos-delay="200">
          <img src={danceImage} alt="Zumba Class with Vijaya" />
        </div>

        <div className="classes-content" data-aos="fade" data-aos-delay="400">
          <h2>
            <span className="highlight">FIND</span> YOUR BEAT
          </h2>
          <p>
            From high-energy Zumba sessions to soulful stretches, Vijaya’s classes are crafted
            to reconnect you with your rhythm, strength, and joy. Whether you're dancing off stress,
            building confidence, or simply having fun — you're exactly where you belong.
          </p>
          <button className="classes-button">EXPLORE CLASSES</button>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
