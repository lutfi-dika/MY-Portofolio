import React, { useState } from 'react';
import './Projects.css';

// --- DATA PROYEK (Dengan TAGS BARU) ---
const projectsData = [
    {
        id: 1,
        name: "Webkraf",
        category: "Website",
        description: "Webkarf adalah website yang menyediakan layanan jasa digital.",
        image: "https://lutfi-dika.github.io/Website-Kreatif/assets/logo_new-uXDqJuK1.png",
        link: "https://lutfi-dika.github.io/Website-Kreatif/",
        tags: ["React", "CSS", "Github"] // <--- TAGS BARU
    },
    {
        id: 2,
        name: "Website Undangan Pernikahan Zulfian Irya",
        category: "Website",
        description: "Website interaktif untuk undangan pernikahan modern.",
        image: "https://i.pinimg.com/736x/3a/af/b4/3aafb4b1894bd114d3f6e3145b4c2e9e.jpg",
        link: "https://magical-torte-1fd6d7.netlify.app/",
        tags: ["HTML", "CSS3", "JavaScript", "Responsive" ,"Github"] // <--- TAGS BARU
    },
    {
        id: 3,
        name: "Website Jualan Dian Tas Galery",
        category: "Website",
        description: "Website e-commerce yang menjual berbagai jenis tas fashion.",
        image: "https://i.pinimg.com/1200x/50/9c/d5/509cd5d81a4d708f07b7b81e0560c121.jpg",
        link: "https://lutfi-dika.github.io/website-jualan-Dian_tas-galery/",
        tags: ["HTML", "Bootstrap", "GitHub Pages", "Github"] // <--- TAGS BARU
    },
    {
        id: 4,
        name: "UI/UX Cakralogy",
        category: "UI/UX",
        description: "Desain UI/UX untuk platform edukasi berbasis teknologi.",
        image: "https://i.pinimg.com/1200x/11/60/41/1160419b7a01b8a710fe6cf350ec0dad.jpg",
        link: "https://www.figma.com/design/MOIrbN4t1p6eGCLPokGXg7/HIDUPNGOEDING?t=Ec9wrLtJo94u8tQ6-0",
        tags: ["Figma", "UI/UX Design", "Prototyping"] // <--- TAGS BARU
    },
    {
        id: 5,
        name: "Web Sekolah",
        category: "Website",
        description: "Website sekolah modern berbasis teknologi.",
        image: "https://smktelekomunikasitelesandi.sch.id/public/src/logotelesandi.png",
        link: "https://lutfi-dika.github.io/SMK-TELEKOMUNIKASI-TELESANDI-BEKASI/",
        tags: ["React", "CSS", "Github" ] // <--- TAGS BARU
    },
    {
        id: 6,
        name: "Portofolio",
        category: "UI/UX",
        description: "Website Portofolio berbasis teknologi UI/UX.",
        image: "https://i.pinimg.com/1200x/7f/22/fb/7f22fbf9c39d02b50e58e83f1f303c6a.jpg",
        link: "https://www.figma.com/design/QugmSEv97Kj5jz7VPpUWsO/Untitled?node-id=0-1&t=lnEX0lywUGReFW1j-1",
        tags: ["Figma"] // <--- TAGS BARU
    },
    {
        id: 7,
        name: "Website CakraLogy",
        category: "Front End",
        description: "Website CakraLogy adalah website edukasi yang interaktif ke user yang berbasis teknologi modern",
        image: "https://i.pinimg.com/1200x/11/60/41/1160419b7a01b8a710fe6cf350ec0dad.jpg",
        link: "https://lutfi-dika.github.io/cakralogy/",
        tags: ["React.js", "Css", "Github"] // <--- TAGS BARU
    },
];

const categories = ['All', 'Website', 'UI/UX'];


// --- Komponen Kartu Proyek Pembantu (Diperbarui) ---
const ProjectCard = ({ project }) => (
    <div
        className="project-card"
        data-category={project.category}
    >
        <img
            src={project.image}
            className="project-image"
            alt={project.name}
        />
        <div className="project-info">
            <h3 className="project-name-title">{project.name}</h3>
            <p className="project-description">
                {project.description}
            </p>

            {/* --- BAGIAN TAMBAHAN UNTUK MENAMPILKAN TAGS/TEKNOLOGI --- */}
            <div className="project-tags-used">
                <p className="tags-title">Digunakan:</p>
                {project.tags.map(tag => (
                    <span key={tag} className="tag-item">{tag}</span>
                ))}
            </div>
            {/* ----------------------------------------------------- */}

            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-detail"
            >
                Lihat Selebihnya &rarr;
            </a>
        </div>
    </div>
);


// --- Komponen Utama: Projects Section (Kode Lainnya Sama) ---
const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProjects = activeFilter === 'All'
        ? projectsData
        : projectsData.filter(project => project.category === activeFilter);

    return (
        <section id="projects" className="projects-section-container">
            <h2 className="project-section-title">✨ My Portfolio Projects</h2>

            <div className="filter-buttons">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveFilter(category)}
                        className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="projects-grid">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))
                ) : (
                    <p className="no-projects-found">Tidak ada proyek dalam kategori ini.</p>
                )}
            </div>
        </section>
    );
};

export default Projects;