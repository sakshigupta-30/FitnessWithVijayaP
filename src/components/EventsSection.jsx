import React from 'react';
import './EventsSection.css';

const events = [
  {
    title: 'Bollywood DanceFitness Workshop',
    description: '“Leke Prabhu Ka Naam” choreography session',
  },
  {
    title: 'Aqua Zumba Pool Party',
    description: 'Splash into a high-energy, low-impact workout set to Latin beats!',
  },
  {
    title: 'Weekend Dance Detox Retreat',
    description: 'Recharge with dance, mindfulness, and nature in an all-inclusive getaway.',
  },
  {
    title: 'Bollywood Fusion Fiesta',
    description: 'Blend traditional Bollywood with western cardio dance styles.',
  },
];

const EventsSection = () => {
  return (
    <section className="events-section">
      <div className="events-container">
        <h2><span className="highlight">EVENTS</span> & RETREATS</h2>
        <p className="events-intro" data-aos="fade-up" data-aos-delay="100">
          Join us for high-energy weekends, pool parties, and themed dance getaways!
        </p>
        <div className="events-grid">
          {events.map((event, index) => (
            <div
              className="event-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
