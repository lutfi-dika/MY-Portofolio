import React from 'react';
// Pastikan file CSS diletakkan di lokasi ini: src/components/Skills/Skills.css
import './Skills.css'; 

// --- Komponen Pembantu: Untuk setiap baris keterampilan ---
const SkillItem = ({ name, level }) => (
    <div className="skill-item">
        <span className="skill-name">{name}</span>
        <div className="progress-bar-bg">
            {/* Nilai level (persentase) dimasukkan langsung ke style width */}
            <div className="progress-bar" style={{ width: `${level}%` }}></div>
        </div>
    </div>
);

// --- Komponen Utama: Skills Section ---
const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="skills-container">
                <h2 className="skills-title">My Technical Skills</h2>
                
                <div className="skills-grid">
                    {/* KARTU 1: Front-End Development */}
                    <div className="skill-card">
                        <h3 className="skill-category">Front-End Development</h3>
                        
                        <SkillItem name="React.js" level={90} />
                        <SkillItem name="JavaScript (ES6+)" level={85} />
                        <SkillItem name="HTML & CSS" level={95} />
                    </div>

                    {/* KARTU 2: Back-End & Database */}
                    <div className="skill-card">
                        <h3 className="skill-category">Back-End & Database</h3>
                        
                        <SkillItem name="Node.js (Express)" level={75} />
                        <SkillItem name="Python (Django)" level={60} />
                        <SkillItem name="PostgreSQL / MongoDB" level={80} />
                    </div>

                    {/* KARTU 3: Tools & Lainnya */}
                    <div className="skill-card">
                        <h3 className="skill-category">Tools & Design</h3>
                        
                        <SkillItem name="Git & GitHub" level={90} />
                        <SkillItem name="Figma / Adobe XD" level={70} />
                        <SkillItem name="Responsive Design" level={95} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;