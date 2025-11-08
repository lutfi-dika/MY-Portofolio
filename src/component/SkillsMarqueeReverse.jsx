import React from 'react';
import './SkillsMarquee.css'; // Tetap gunakan file CSS yang sama

// Data skills Anda (gunakan data yang sama)
const skillData = [
    { name: "Flowbit", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlxxvcvQXoCiPIdQffHx_RP3UWDqOfGfoe5w&s" },
    { name: "Bootstrap", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" },
    { name: "Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" },
    { name: "Aos", icon: "https://michalsnik.github.io/aos/img/github_octocat.png" },
    { name: "Gekshelp", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWu1__MCXwtEHmMP3xaN3UQjMQmiUy8_ieYQ&s" },
    { name: "Figma", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62LVhts8-ERiNmlrfHQShVXasUYH38KKSRw&s" },
    { name: "Database", icon: "https://bikin.website/blog/wp-content/uploads/2021/12/pengertian-xampp-300x287.png" },
];

// Gabungkan data skills dan ulangi
const repeatedSkillData = [...skillData, ...skillData, ...skillData];

const SkillsMarqueeReverse = () => {
    return (
        <div className="skills-marquee-container-reverse">
            {/* Mengganti nama kelas track untuk animasi terbalik */}
            <div className="running-track-reverse"> 
                {repeatedSkillData.map((skill, index) => (
                    <div key={index} className="skill-item-marquee">
                        <img 
                            src={skill.icon} 
                            alt={skill.name} 
                            className="skill-icon"
                        />
                        <span className="skill-name-marquee">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsMarqueeReverse;