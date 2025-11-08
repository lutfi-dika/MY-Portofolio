import React from "react";
import "./About.css";

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-text">
                    <h2>About Me</h2>
                    <p>
                        Hai! Saya Lutfi Andika, seorang Pengembang Front-End & Desainer UI/UX yang bersemangat dan gemar mewujudkan ide-ide melalui pengalaman digital yang kreatif.
                        Saya spesialis dalam pengembangan web modern, desain antarmuka pengguna, dan pembuatan poster digital—memadukan fungsionalitas dengan estetika visual untuk menghasilkan hasil yang berdampak.
                    </p>
                    <p>
                        Dengan fokus yang kuat pada desain yang bersih, tata letak responsif, dan pengalaman pengguna yang mulus, saya berupaya menciptakan proyek yang menarik secara visual sekaligus bermakna.
                        Saya terus belajar dan mengeksplorasi teknologi baru untuk meningkatkan kualitas setiap produk yang saya buat.
                    </p>
                    <a href="#projects" className="btn-about">See My Work</a>
                </div>
                <div className="about-image">
                    <img
                        src="https://i.pinimg.com/736x/68/d1/85/68d1858ea368bb8dbd4b4d5f241ece3c.jpg"
                        alt="About Me"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
