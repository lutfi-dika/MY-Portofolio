import React, { useState, useEffect } from "react";

// PENTING: Semua komponen dari folder component
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

// ⭐ INI PENTING: import CardSwap + Card
import Experience from "./component/Experience";

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

    // Variabel tambahan (kalau nanti dibutuhkan)
    const velocity = 50;

    // Curved Loop props
    const curvedLoopProps = {
        marqueeText:
            "SAYA LUTFI ANDIKA Front End DEVELOPER  UI/UX DESIGNER & Poster Digital ✦ KREATIVITAS DAN TEKNOLOGI MENJADI SATU. ",
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

            {/* 3. Marquee pemberitahuan */}
            <Marquee />

            {/* 4. Curved Loop */}
            <div
                className="CurvedLoopSeparator"
                style={{ marginTop: "-60px" }}
            >
                <CurvedLoop {...curvedLoopProps} />
            </div>

            {/* 5. About */}
            <div className="About">
                <About />
            </div>

            {/* 6. Skills & Projects */}
            <div className="SkillsMarquee">
                <SkillsMarquee />
            </div>

            <div className="SkillsMarqueeReverse">
                <SkillsMarqueeReverse />
            </div>

            <div className="Projects">
                <Projects />
            </div>

            <div className=""><Experience /></div>


            <div className="RunningTextNew">
                <RunningTextNew />
            </div>

            <div className=""><PerjalananSection /> </div>

            {/* 8. Running text tambahan */}
            <div className="RunningText">
                <RunningText />
            </div>

            {/* 9. Contact */}
            <div className="Contact">
                <Contact />
            </div>

            {/* 10. Footer */}
            <div className="Footer">
                <Footer />
            </div>
        </div>
    );
};

export default App;
