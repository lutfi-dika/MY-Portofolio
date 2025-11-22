import React, { useRef, useEffect, useState } from "react";
import "./RunningTextNew.css";

// Komponen utama berisi 2 running text dengan arah berbeda
export default function RunningTextNew() {
    return (
        <div className="rt-wrapper">
            {/* Running text ke kiri */}
            <SingleRunningText
                text="Perjalanan karir dimulai dari langkah kecil Terus belajar terus berkembang!"
                speed={90}
                direction="left"
            />

            {/* Running text ke kanan */}
            <SingleRunningText
                text="Setiap tantangan adalah peluang baru untuk naik level dalam karir profesionalmu!"
                speed={70}
                direction="right"
            />
        </div>
    );
}

/* ===========================================================
   === Running Text Komponen Dasar (yang kamu punya tadi) ===
   =========================================================== */

function SingleRunningText({
    text = "Selamat datang — Ini contoh running text yang halus dan responsif!",
    speed = 80,
    pauseOnHover = true,
    direction = "left",
    className = "",
}) {
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const [duration, setDuration] = useState(10);
    const [playState, setPlayState] = useState("running");

    useEffect(() => {
        function calculate() {
            const container = containerRef.current;
            const content = contentRef.current;
            if (!container || !content) return;

            const containerWidth = container.getBoundingClientRect().width;
            const contentWidth = content.getBoundingClientRect().width;
            const distance = containerWidth + contentWidth;
            const seconds = distance / Math.max(10, speed);
            setDuration(seconds);
        }

        calculate();
        window.addEventListener("resize", calculate);
        return () => window.removeEventListener("resize", calculate);
    }, [text, speed]);

    const handleMouseEnter = () => pauseOnHover && setPlayState("paused");
    const handleMouseLeave = () => pauseOnHover && setPlayState("running");

    const dir = direction === "right" ? "reverse" : "normal";

    return (
        <div
            className={`rt-container ${className}`}
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="rt-track"
                style={{
                    animationDuration: `${duration}s`,
                    animationPlayState: playState,
                    animationDirection: dir,
                }}
            >
                <div className="rt-content" ref={contentRef}>
                    {text}
                </div>
                <div className="rt-content">{text}</div>
            </div>
        </div>
    );
}
