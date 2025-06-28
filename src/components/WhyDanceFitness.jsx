import React from 'react';
import './WhyDanceFitness.css';

import heartIcon from '../assets/icons/heart.svg';
import energyIcon from '../assets/icons/energy.svg';
import musclesIcon from '../assets/icons/muscles.svg';
import danceIcon from '../assets/icons/dance.svg';

const features = [
  {
    icon: heartIcon,
    title: 'Cardio, Flexibility & Burn',
    desc: 'Boosts cardio health, flexibility, and endurance — 500–800 cal/hr burn',
    source: 'womenfitness.org',
  },
  {
    icon: musclesIcon,
    title: 'Muscle Toning',
    desc: 'Tone muscles through functional choreography',
  },
  {
    icon: energyIcon,
    title: 'Stress & Mood Benefits',
    desc: 'Reduces stress, elevates mood, and builds confidence',
  },
  {
    icon: danceIcon,
    title: 'Fun & Accessible',
    desc: 'Dance-led fitness — accessible to all, even with “two left feet”',
    source: 'womenfitness.org',
  },
];

const WhyDanceFitness = () => {
  return (
    <section className="why-dance">
      <div className="header">
        <h2>💡 Why DanceFitness with Vijaya?</h2>
        <p className="subtitle">Transformative Benefits</p>
      </div>
      <div className="features">
        {features.map((item, index) => (
          <div key={index} className="feature">
            <div className="icon-wrapper">
              <img src={item.icon} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            {item.source && <span className="ref">— {item.source}</span>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyDanceFitness;
