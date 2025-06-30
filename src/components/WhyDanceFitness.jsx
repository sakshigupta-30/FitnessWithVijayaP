import React from 'react';
import './WhyDanceFitness.css';

import heartIcon from '../assets/icons/heart.svg';
import energyIcon from '../assets/icons/energy.svg';
import musclesIcon from '../assets/icons/muscles.svg';
import danceIcon from '../assets/icons/dance.svg';

const features = [
  {
    icon: heartIcon,
    title: 'Sweat with Purpose',
    desc: 'Burn up to 800 calories/hour with high-energy routines that keep your heart pumping and your spirit soaring.',
    source: 'womenfitness.org',
  },
  {
    icon: musclesIcon,
    title: 'Tone While You Groove',
    desc: 'Build strength and definition through powerful, dance-infused moves — no equipment, just rhythm.',
  },
  {
    icon: energyIcon,
    title: 'Recharge Your Soul',
    desc: 'Let go of stress and step into joy. Every session leaves you smiling, recharged, and ready for more.',
  },
  {
    icon: danceIcon,
    title: 'Everyone Belongs',
    desc: 'From beginners to dance lovers — this is your space to move freely, fearlessly, and fabulously.',
    source: 'womenfitness.org',
  },
];

const WhyDanceFitness = () => {
  return (
    <section
      className="why-dance"
      data-aos="fade"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div className="header">
        <h2>Why Choose Dance Fitness with Vijaya?</h2>
        <p className="subtitle">
          Not just a workout — it’s a celebration of movement, energy, and self-love.
        </p>
      </div>

      <div className="features">
        {features.map((item, index) => (
          <div
            key={index}
            className="feature"
            data-aos="fade"
            data-aos-delay={index * 150}
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
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
