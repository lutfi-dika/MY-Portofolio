import React from "react";
import './Hero.css';

const Hero = () => {
  return (
    <section id="Hero" className="hero">
      <h1>Hi, I'm Lutfi Andika</h1>
      <p>'m a Front Developer building awesome websites.</p>
      <a href="#projects" className="hero-btn">My Portfolio</a>

      {/* Background Grid 3D */}
      <div className="grid-3d"></div>
      <div className="jarak"></div>
    </section>
    
  );
};

export default Hero;
