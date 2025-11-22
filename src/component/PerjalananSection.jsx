import React from "react";
import "./PerjalananSection.css";

export default function PerjalananSection({ title = "Perjalanan Karier", items }) {
    const defaultItems = [
        {
            id: 1,
            role: "owner",
            company: "WEBKRAF  •  Website Kreatif",
            location: "Bekasi, Indonesia",
            period: "2024- Sekarang",
            desc: "Menghadirkan solusi digital premium untuk bisnis modern.",
            tag: "Owner"
        },
    ];

    const timeline = items && items.length ? items : defaultItems;

    return (
        <section id="Karier" className="perjalanan-section">
            <div className="perjalanan-header">
                <h2 className="perjalanan-title">{title}</h2>
                <p className="perjalanan-sub">Riwayat kerja, magang, dan proyek penting</p>
            </div>

            <div className="timeline-container">
                <div className="timeline-line"></div>

                <ul className="timeline-list">
                    {timeline.map((it) => (
                        <li key={it.id} className="timeline-item">
                            <div className="timeline-marker"></div>

                            <div className="timeline-card">
                                <div className="timeline-top">
                                    <div>
                                        <h3 className="role">{it.role}</h3>
                                        <p className="company">{it.company} • <span className="location">{it.location}</span></p>
                                    </div>
                                    <span className="period">{it.period}</span>
                                </div>

                                <p className="desc">{it.desc}</p>

                                <div className="timeline-footer">
                                    <span className="tag">{it.tag}</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* <div className="add-btn-wrapper">
                <button className="add-btn">Tambah Perjalanan</button>
            </div> */}
        </section>
    );
}
