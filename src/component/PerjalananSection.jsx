// CareerSection.jsx
import React, { useRef } from "react";
import Tilt from "react-parallax-tilt";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./PerjalananSection.css";

// 3D Cube
function Cube() {
    const mesh = useRef();

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        mesh.current.rotation.x = t * 0.3;
        mesh.current.rotation.y = t * 0.4;
    });

    return (
        <mesh ref={mesh}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="#999999" metalness={0.6} roughness={0.2} />
        </mesh>
    );
}

// Career Card
function CareerCard({ year, title, company, description }) {
    return (
        <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            glareEnable={true}
            glareMaxOpacity={0.2}
            className="career-card-tilt"
        >
            <div className="career-card">
                <div className="card-header">
                    <h3>{title}</h3>
                    <span>{year}</span>
                </div>
                <p className="company">{company}</p>
                <p className="description">{description}</p>
            </div>
        </Tilt>
    );
}

// Career Section
export default function CareerSection() {
    const careerData = [
        {
            year: "2024 - Sekarang",
            title: "OWNER",
            company: "Website Kreatif",
            description:
                "Menciptakan Solusi Web Modern yang Kreatif dan Efektif untuk Meningkatkan Bisnis Anda.",
        },
    ];

    return (
        <section className="career-section">
            <h2>
                My <span>Career</span>
            </h2>

            <div className="career-cards">
                {careerData.map((c, i) => (
                    <CareerCard key={i} {...c} />
                ))}
            </div>

            <div className="cube-container">
                <Canvas camera={{ position: [2.5, 2.5, 5] }}>
                    <ambientLight intensity={0.7} />
                    <pointLight position={[5, 5, 5]} />
                    <Cube />
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
                </Canvas>
            </div>
        </section>
    );
}
