import React, { useState, useEffect } from 'react';
import './LoadingPage.css';

const LoadingPage = ({ onComplete }) => {
  // State untuk mengontrol animasi fade-out
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Anggaplah ini dipanggil setelah 3 detik loading di App.jsx selesai
    const startFadeOut = setTimeout(() => {
      setFadeOut(true); // Mulai animasi fade-out
    }, 10); // Mulai fade-out segera setelah prop diterima (atau sesuaikan jika perlu)

    // Setelah fade-out, panggil fungsi onComplete untuk menghapus komponen dari DOM
    const hideComponent = setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, 600); // 600ms = 10ms + 500ms (waktu transisi CSS) + sedikit buffer

    return () => {
      clearTimeout(startFadeOut);
      clearTimeout(hideComponent);
    };
  }, [onComplete]);

  return (
    <div className={`loading-container ${fadeOut ? 'fade-out' : ''}`}>
      <div className="spinner"></div>
      <div className="loading-text">Memuat Portofolio Lutfi Andika...</div>
    </div>
  );
};

export default LoadingPage;