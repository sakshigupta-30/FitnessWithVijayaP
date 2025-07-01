import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background Video (desktop only) */}
      <video
        className="hero-video"
        src="/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay Gradient */}
      <div className="hero-overlay"></div>

      {/* Hero Text Content */}
      <div className="hero-content">
        <h1>
          <span className="underline">DANCE</span> YOUR HEART OUT <br />
          WITH <span className="underline">VIJAYA</span>
        </h1>
        <p>
          Step into a space where movement meets joy! Led by Zumba expert Vijaya
          Tupurani, our sessions are not just workouts — they’re high-energy
          dance experiences that empower you to feel confident, strong, and
          unstoppable.
        </p>
        <button className="cta-button">LET’S GROOVE TOGETHER</button>
        <p className="tagline">Live · Love · Inspire</p>
      </div>
    </section>
  );
};

export default HeroSection;
