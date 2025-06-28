import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <video
        className="hero-video"
        src="/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Purple Overlay */}
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>IGNITE THE FIRE WITHIN</h1>
        <p>
          with daily fitness parties you’ll find yourself looking forward to rather than
          dreading. Find freedom through movement with Jamie, her team of amazing instructors,
          and our supportive and inclusive community.
        </p>
        <button className="cta-button">BEGIN YOUR JOURNEY</button>
      </div>
    </section>
  );
};

export default HeroSection;
