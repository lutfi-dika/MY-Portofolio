import React from 'react';
import { useState, useEffect } from 'react';

// Hook untuk Typing Effect
const useTypingEffect = (textToType, typingSpeed) => {
    const [typedText, setTypedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < textToType.length) {
            const timeoutId = setTimeout(() => {
                setTypedText((prev) => prev + textToType[index]);
                setIndex((prev) => prev + 1);
            }, typingSpeed);

            return () => clearTimeout(timeoutId); // Cleanup
        }
        // Karena kode asli menambahkan &nbsp; setelah setiap karakter, kita bisa menambahkan 
        // spasi di sini, atau membiarkan CSS/font menanganinya. 
        // Untuk kesederhanaan React, kita hanya mengetik string.
    }, [index, textToType, typingSpeed]);

    return typedText;
};

// Hook untuk Text Rotator
const useRotatorEffect = (texts, typingSpeed, pauseTime) => {
    const [displayedText, setDisplayedText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const fullText = texts[textIndex % texts.length];
        let timeoutId;

        if (!isDeleting && charIndex <= fullText.length) {
            // Tipe/Ketik Karakter
            timeoutId = setTimeout(() => {
                setDisplayedText(fullText.substring(0, charIndex));
                setCharIndex(charIndex + 1);
            }, typingSpeed);

            if (charIndex === fullText.length) {
                // Jeda setelah selesai mengetik
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => setIsDeleting(true), pauseTime);
            }
        } else if (isDeleting && charIndex >= 0) {
            // Hapus Karakter
            timeoutId = setTimeout(() => {
                setDisplayedText(fullText.substring(0, charIndex));
                setCharIndex(charIndex - 1);
            }, typingSpeed / 2); // Menghapus lebih cepat

            if (charIndex === 0) {
                // Pindah ke teks berikutnya setelah selesai menghapus
                setIsDeleting(false);
                setTextIndex((prev) => prev + 1);
            }
        }

        return () => clearTimeout(timeoutId); // Cleanup
    }, [charIndex, isDeleting, textIndex, texts, typingSpeed, pauseTime]);

    return displayedText;
};

// Data untuk Text Rotator
const rotatorTexts = ["UI/UX Designer", "Front End Developer", "Poster Digital"];

const AboutSection = () => {
    // Hook untuk Label Atas: "✨ About Me ✨"
    const topText = useTypingEffect("✨ About Me ✨", 180);

    // Hook untuk Text Rotator (H2)
    const rotatorText = useRotatorEffect(rotatorTexts, 120, 1000);

    return (
        <>
            {/* CSS Kustom */}
            <style>
                {`
                .about-section {
                    margin-top: 4%;
                    width: 100%;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column-reverse;
                    justify-content: space-between;
                    align-items: center;
                    padding: 80px 24px 0;
                }
                @media (min-width: 768px) {
                    .about-section {
                        flex-direction: row;
                        align-items: center;
                        padding: 96px 48px 0;
                    }
                }

                .about-text-container {
                    flex: 1;
                    text-align: center;
                    margin-top: 24px;
                }
                @media (min-width: 768px) {
                    .about-text-container {
                        text-align: left;
                        margin-top: 0;
                        margin-left: 40px;
                    }
                }
                .about-text-container > * + * {
                    margin-top: 24px;
                }

                .top-label {
                    background-color: rgba(30, 58, 138, 0.3);
                    color: #93c5fd;
                    padding: 8px 16px;
                    border-radius: 9999px;
                    font-size: 14px;
                    letter-spacing: 0.25em;
                    border: 1px solid rgba(59, 130, 246, 0.3);
                    display: inline-block;
                    margin-bottom: 16px;
                }

                .main-title {
                    font-size: 36px;
                    font-weight: bold;
                    background: linear-gradient(to right, #22d3ee, #3b82f6);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    line-height: 1.25;
                    filter: drop-shadow(0 0 15px rgba(59, 130, 246, 0.7));
                }
                @media (min-width: 768px) {
                    .main-title {
                        font-size: 60px;
                    }
                }

                .text-rotator {
                    font-size: 24px;
                    font-weight: bold;
                    color: #60a5fa;
                    border-right: 4px solid #60a5fa;
                    padding-right: 8px;
                    animation: cursor 1s infinite;
                }
                @media (min-width: 640px) {
                    .text-rotator {
                        font-size: 30px;
                    }
                }
                @media (min-width: 768px) {
                    .text-rotator {
                        font-size: 36px;
                    }
                }
                @keyframes cursor {
                    0%, 50% { border-color: #60a5fa; }
                    51%, 100% { border-color: transparent; }
                }

                .description {
                    margin-top: 16px;
                    max-width: 768px;
                    color: #d1d5db;
                    font-size: 16px;
                    text-align: justify;
                }
                @media (min-width: 640px) {
                    .description {
                        font-size: 18px;
                        text-align: justify;
                    }
                }
                @media (min-width: 768px) {
                    .description {
                        margin-top: 24px;
                        font-size: 20px;
                        text-align: justify;
                    }
                }

                .skill-tags {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 12px;
                    margin-top: 24px;
                }
                @media (min-width: 768px) {
                    .skill-tags {
                        justify-content: flex-start;
                        margin-top: 40px;
                    }
                }

                .skill-tag {
                    padding: 8px 16px;
                    background-color: rgba(30, 64, 175, 0.4);
                    border-radius: 9999px;
                    border: 1px solid rgba(6, 182, 212, 0.4);
                    font-size: 14px;
                    cursor: pointer;
                    box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
                    transition: box-shadow 0.3s;
                }
                .skill-tag:hover {
                    box-shadow: 0 0 20px rgba(6, 182, 212, 0.8);
                }

                .buttons {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 16px;
                    margin-top: 24px;
                    justify-content: center;
                }
                @media (min-width: 768px) {
                    .buttons {
                        justify-content: flex-start;
                    }
                }

                .btn-primary {
                    background-color: #22d3ee;
                    color: #000;
                    padding: 8px 24px;
                    border-radius: 12px;
                    font-weight: 600;
                    font-size: 16px;
                    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s;
                }
                @media (min-width: 640px) {
                    .btn-primary {
                        padding: 12px 32px;
                        font-size: 18px;
                    }
                }
                .btn-primary:hover {
                    box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
                    transform: scale(1.05);
                }

                .btn-secondary {
                    border: 2px solid #60a5fa;
                    padding: 8px 24px;
                    border-radius: 12px;
                    font-weight: 600;
                    font-size: 16px;
                    color: #60a5fa;
                    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s;
                }
                @media (min-width: 640px) {
                    .btn-secondary {
                        padding: 12px 32px;
                        font-size: 18px;
                    }
                }
                .btn-secondary:hover {
                    background-color: #60a5fa;
                    color: #000;
                    box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
                    transform: scale(1.05);
                }

                .photo-container {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 24px;
                }
                @media (min-width: 768px) {
                    .photo-container {
                        margin-top: 0;
                        margin-right: 40px;
                    }
                }
                .floating {
                    animation: floating 3s ease-in-out infinite;
                }
                @keyframes floating {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }

                .profile-photo {
                    width: 200px;
                    height: 200px;
                    border-radius: 50%;
                    object-fit: cover;
                    border: 4px solid #60a5fa;
                }
                @media (min-width: 640px) {
                    .profile-photo {
                        width: 250px;
                        height: 250px;
                    }
                }
                @media (min-width: 768px) {
                    .profile-photo {
                        width: 300px;
                        height: 300px;
                    }
                }
                `}
            </style>

            <section id="about" className="about-section">
                {/* Profile Photo */}
                <div className="photo-container">
                    <img src="https://i.pinimg.com/736x/68/d1/85/68d1858ea368bb8dbd4b4d5f241ece3c.jpg" alt="Profile Photo" className="profile-photo floating" />
                </div>

                {/* About Text Container */}
                <div className="about-text-container">
                    {/* Top Label */}
                    <span className="top-label">
                        <span className="brand-text">{topText}</span>
                    </span>

                    {/* Main Title */}
                    <h1 className="main-title">
                        Hi, I'm <span>Lutfi Andika</span>
                    </h1>

                    {/* Text Rotator */}
                    <h2 className="text-rotator">
                        {rotatorText}
                    </h2>

                    {/* Description */}
                    <p className="description">
                        Hai! Saya Lutfi Andika, seorang Pengembang Front-End, Desainer UI/UX & Poster Digital
                        yang bersemangat dan gemar mewujudkan ide-ide melalui
                        pengalaman digital yang kreatif. Saya spesialis dalam
                        pengembangan web modern, desain antarmuka pengguna, dan
                        pembuatan poster digital memadukan fungsionalitas dengan
                        estetika visual untuk menghasilkan hasil yang berdampak.

                    </p>

                    {/* Buttons */}
                    <div className="buttons">
                        <a href="#Contact" className="btn-primary">
                            Contact Me
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

// Komponen Pembantu untuk Skill Tag
const SkillTag = ({ text }) => (
    <span className="skill-tag">
        {text}
    </span>
);

export default AboutSection;