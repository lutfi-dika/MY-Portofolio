import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Marquee from "./component/Marquee";
import SkillsMarquee from "./component/SkillsMarquee";
// --- BARIS TAMBAHAN: Import komponen reverse ---
import SkillsMarqueeReverse from "./component/SkillsMarqueeReverse";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
// ------------------------------------------------
import "./App.css";

const App = () => {
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

            {/* 4. About */}
            <div className="About">
                <About />
            </div>

            {/* 5. SkillsMarquee (Arah Normal) */}
            <div className="SkillsMarquee">
                <SkillsMarquee />
            </div>

            {/* 6. SkillsMarqueeReverse (Arah Terbalik) - KOMPONEN BARU */}
            <div className="SkillsMarqueeReverse">
                <SkillsMarqueeReverse />
            </div>

            {/* 6. SkillsMarqueeReverse (Arah Terbalik) - KOMPONEN BARU */}
            <div className="Projects">
                <Projects />
            </div>

            {/* 7. Contatc */}
            <div className="Contact">
                <Contact />
            </div>

            {/* 8. Footer */}
            <div className="Footer">
                <Footer />
            </div>

        </div>
    );
}
export default App;