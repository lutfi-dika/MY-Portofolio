import React, { useState, useEffect } from "react";
import './Hero.css';
import Lanyard from './Lanyard'; 
// Pastikan Anda mengimpor komponen Lanyard Anda dengan benar

const Hero = () => {
    
    // Teks yang akan dipecah menjadi partikel
    const heroText = "Hi, I'm Lutfi Andika"; 
    const chars = heroText.split('');
    const [visibleCharsCount, setVisibleCharsCount] = useState(0);

    // Efek untuk memicu animasi staggered
    useEffect(() => {
        if (visibleCharsCount < chars.length) {
            const timer = setTimeout(() => {
                setVisibleCharsCount(prevCount => prevCount + 1);
            }, 50); // Jeda 50ms antar huruf (Staggered effect speed)

            return () => clearTimeout(timer);
        }
    }, [visibleCharsCount, chars.length]);


    return (
        <section id="Hero" className="hero">
            
            <div className="grid-3d"></div> 
            
            {/* LANYARD 3D VISUAL */}
            <div className="lanyard-visual">
                <Lanyard 
                    position={[0, 0, 30]} 
                    gravity={[0, -40, 0]} 
                />
            </div>

            {/* KONTEN TEKS */}
            <div className="hero-content">
                
                {/* IMPLEMENTASI TEKS PARTIKEL MANUAL */}
                <h1 className="particle-text-wrapper">
                    {chars.map((char, index) => (
                        <span 
                            key={index}
                            className={`char-container ${index < visibleCharsCount ? 'is-visible' : ''}`}
                            // Atur delay transisi untuk staggered effect
                            style={{ transitionDelay: `${index * 0.03}s` }} 
                        >
                            {/* Tampilkan spasi sebagai spasi non-breaking agar layout aman */}
                            {char === ' ' ? '\u00A0' : char}
                        </span>
                    ))}
                </h1>
                {/* AKHIR IMPLEMENTASI TEKS PARTIKEL */}

                <p>I'm a Front-end Developer building awesome websites.</p>
                <a href="#projects" className="hero-btn">My Portfolio</a>
            </div>
            
            <div className="jarak"></div>
        </section>
    );
};

export default Hero;