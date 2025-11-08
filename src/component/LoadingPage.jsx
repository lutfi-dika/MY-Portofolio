import React, { useEffect, useState } from "react";
import "./LoadingPage.css";

const LoadingPage = ({ onFinish }) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // otomatis fade out sebelum selesai
    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(() => {
        onFinish && onFinish(); // beri tahu parent loading selesai
      }, 500); // durasi fade
    }, 1500); // tampil dulu 1.5 detik
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`loading-container ${fade ? "fade-out" : ""}`}>
      <div className="spinner"></div>
      <p className="loading-text">Loading, please wait...</p>
    </div>
  );
};

export default LoadingPage;
