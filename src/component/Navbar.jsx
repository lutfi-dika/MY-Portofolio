import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="logo">Lutfi</div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#Hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#Experience">Experience</a></li>
          <li><a href="#Karier">Karier</a></li>
          <li><a href="#Contact">Contact</a></li>

        </ul>
        {/* Experience */}

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="navbar-blob"></div>
    </nav>
  );
};

export default Navbar;
