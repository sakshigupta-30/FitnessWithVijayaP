import React from 'react';
import './AccessibilitySection.css';

const modes = [
  {
    title: 'In-Studio',
    description: 'Weekly classes in Hyderabad (incl. gated communities), ₹3,000 per month',
  },
  {
    title: 'Online On-Demand',
    description: '500+ video sessions on YouTube and platforms, live streams saved for replay',
  },
  {
    title: 'Workshops & Corporate Events',
    description: 'Tailored programs for schools, corporates, special events',
  },
  {
    title: 'Certification & Training',
    description: 'Choreography coaching and playlist design for aspiring instructors',
  },
];

const AccessibilitySection = () => {
  return (
    <section className="access-section">
      <div className="access-container">
        <h2><span className="highlight">ACCESSIBILITY</span>: IN‑PERSON & ONLINE</h2>

        <div className="mode-grid">
          {modes.map((mode, index) => (
            <div
              className="mode-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150} // 0ms, 150ms, 300ms, 450ms
            >
              <h3>{mode.title}</h3>
              <p>{mode.description}</p>
            </div>
          ))}
        </div>

        <div className="access-buttons" data-aos="fade-up" data-aos-delay="600">
          <button className="access-btn primary">BROWSE CLASSES</button>
          <button className="access-btn">JOIN LIVE</button>
        </div>
      </div>
    </section>
  );
};

export default AccessibilitySection;
