import React from "react";
import CardSwap, { Card } from "./CardSwap";
import "./Experience.css";

const Experience = () => {
    return (
        <section id="Experience" className="experience-section">

            <div className="experience-content">

                {/* TEKS KIRI */}
                <div className="experience-text">
                    <h2>Professional service with results you can trust</h2>
                </div>

                {/* CARD KANAN */}
                <div className="experience-cards">
                    <CardSwap
                        cardDistance={60}
                        verticalDistance={70}
                        delay={5000}
                        pauseOnHover={false}
                    >
                        <Card>
                            <h3>Front End Developer</h3>
                            <p>Buat bisnis Anda tampil lebih profesional dengan landing page modern & berkelas.</p>
                        </Card>

                        <Card>
                            <h3>UI/UX Design</h3>
                            <p>Merancang pengalaman yang bikin pengguna betah.</p>
                        </Card>

                        <Card>
                            <h3>Poster Digital</h3>
                            <p>Desain poster modern untuk branding yang lebih hidup.</p>
                        </Card>
                    </CardSwap>
                </div>
            </div>

            {/* CUBE */}
            <div className="cube-container">
                <div className="cube">
                    <div className="cube-face front"></div>
                    <div className="cube-face back"></div>
                    <div className="cube-face right"></div>
                    <div className="cube-face left"></div>
                    <div className="cube-face top"></div>
                    <div className="cube-face bottom"></div>
                </div>
            </div>

        </section>
    );
};

export default Experience;
