import React, { useState, useEffect } from "react";
// PENTING: Semua komponen diimpor dari "./component/..."
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import CurvedLoop from "./component/CurvedLoop";
import About from "./component/About";
import Marquee from "./component/Marquee";
import SkillsMarquee from "./component/SkillsMarquee";
import SkillsMarqueeReverse from "./component/SkillsMarqueeReverse";
import Projects from "./component/Projects";
import RunningTextNew from "./component/RunningTextNew";
import PerjalananSection from "./component/PerjalananSection";
import RunningText from "./component/RunningText";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import LoadingPage from "./component/LoadingPage";
import "./App.css";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <LoadingPage />;
    }

    // ✅ PERBAIKAN 2: Mendefinisikan variabel 'velocity'
    const velocity = 50;

    const curvedLoopProps = {
        marqueeText: "SAYA LUFFI ANDIKA Front Ent DEVELOPER  UI/UX DESIGNER & Poster Digital ✦ KREATIVITAS DAN TEKNOLOGI MENJADI SATU. 🚀",
        speed: 2.5,
        curveAmount: 400,
        direction: "left",
        interactive: true,
    };

    return (
        <div className="app">
            {/* 1. Navbar */}
            <Navbar />

            {/* 2. Hero */}
            <div className="Hero">
                <Hero />
            </div>

            {/* 3. Marquee Notifikasi */}
            <div>
                <Marquee />
            </div>

            {/* ⭐️ 4. CURVED LOOP DENGAN MARGIN NEGATIF (SOLUSI HILANG BACKGROUND) ⭐️ */}
            <div
                className="CurvedLoopSeparator"
                style={{
                    // Nilai ini adalah kunci untuk menghilangkan background solid.
                    marginTop: '-60px'
                }}
            >
                <CurvedLoop {...curvedLoopProps} />
            </div>

            {/* 5. About */}
            <div className="About">
                <About />
            </div>

            {/* 6. Komponen Skills & Projects */}
            <div className="SkillsMarquee"><SkillsMarquee /></div>
            <div className="SkillsMarqueeReverse"><SkillsMarqueeReverse /></div>
            <div className="Projects"><Projects /></div>
            <div className="RunningTextNew"><RunningTextNew /></div>
            <div className="PerjalananSection"><PerjalananSection /></div>
            <div className="RunningText"><RunningText />  </div>
            <div className="Contact"><Contact /></div>
            <div className="Footer"><Footer /></div>
        </div>
    );
}

export default App;
