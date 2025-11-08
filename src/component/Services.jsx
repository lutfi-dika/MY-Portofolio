import React from 'react';
import './Services.css'; // Import file CSS

// Komponen kartu layanan
const ServiceCard = ({ title, description }) => (
  <div className="service-card">
    <h3 className="service-card-title">{title}</h3>
    <p className="service-card-description">{description}</p>
  </div>
);

// Komponen utama Services
const Services = () => {
  return (
    <section id="services" className="section-padding">
      {/* Kontainer tengah */}
      <div className="container text-center"> 
        <h2 className="section-title">Layanan Kami</h2>
        
        {/* Grid untuk menampung kartu-kartu */}
        <div className="services-grid">
          
          <ServiceCard
            title="Front End Development"
            description="Membangun antarmuka pengguna yang interaktif dan responsif menggunakan React dan teknologi web modern lainnya."
          />
          
          <ServiceCard
            title="UI/UX Design"
            description="Merancang pengalaman pengguna yang intuitif dan antarmuka yang menarik dengan fokus pada kemudahan penggunaan."
          />
          
          <ServiceCard
            title="Poster/Graphic Design"
            description="Membuat materi visual yang menarik seperti poster, banner, dan aset grafis lainnya untuk kebutuhan promosi."
          />

        </div>
      </div>
    </section>
  );
};

export default Services;