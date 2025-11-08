import React from 'react';
import './SkillsMarquee.css';

// Data skills Anda
const skillData = [
    { name: "React JS", icon: "https://cloudmatetechnologies.com/wp-content/uploads/2024/06/react.js.png" },
    { name: "JavaScript", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" },
    { name: "HTML5", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" },
    { name: "CSS3", icon: "https://diengcyber.com/wp-content/uploads/2024/02/CSS-Logo.png" },
    { name: "PHP", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPwizyTOpl4zxp3NiNfmzndUUApZW-ptEr3A&s" },
    // { name: "Git & GitHub", icon: "/img/icons/git.svg" },
    // { name: "Figma", icon: "/img/icons/figma.svg" },
    // Ulangi daftar ini 3 kali agar animasi terlihat panjang dan mulus
];

// Gabungkan data skills dan ulangi
const repeatedSkillData = [...skillData, ...skillData, ...skillData];

const SkillsMarquee = () => {
    return (
        <div className="skills-marquee-container">
            <div className="running-track">
                {repeatedSkillData.map((skill, index) => (
                    // Menggunakan index yang unik sebagai key
                    <div key={index} className="skill-item-marquee">
                        {/* Gambar/Ikon Skill */}
                        <img
                            src={skill.icon}
                            alt={skill.name}
                            className="skill-icon"
                        />
                        {/* Nama Bahasa/Teknologi */}
                        <span className="skill-name-marquee">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsMarquee;