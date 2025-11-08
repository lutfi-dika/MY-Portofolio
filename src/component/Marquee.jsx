import React from 'react';
import './Marquee.css';

const Marquee = () => {
    // Teks yang akan berjalan (diulang-ulang)
    const runningText = "⚠️ SELAMAT DATANG! Dapatkan penawaran eksklusif hari ini! 🚀 Kualitas terjamin, layanan prima. — ";
    
    // Ulangi teks 10 kali untuk memastikan teks berjalan panjang
    const repeatedText = runningText.repeat(10); 

    return (
        <div className="running-text-container">
            {/* Area Logo (Posisi Tetap) */}
            <div className="logo-area">
                <img 
                    src="https://i.pinimg.com/1200x/1d/b9/9d/1db99daa9371bf0989f05a0bc12e2b9e.jpg" 
                    alt="Logo Perusahaan" 
                    className="logo-image" 
                />
            </div>

            {/* Area Teks Berjalan (Marquee) */}
            <div className="marquee-area">
                <div className="running-text">
                    {repeatedText}
                </div>
            </div>
        </div>
    );
};

export default Marquee;