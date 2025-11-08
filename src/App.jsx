import React, { useState, useEffect } from "react"; // <-- Import useState dan useEffect
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Marquee from "./component/Marquee";
import SkillsMarquee from "./component/SkillsMarquee";
import SkillsMarqueeReverse from "./component/SkillsMarqueeReverse";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import LoadingPage from "./component/LoadingPage"; // <-- Import LoadingPage
import "./App.css";

const App = () => {
    // State untuk mengontrol status loading
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulasikan proses loading selama 3 detik (sesuaikan waktunya)
        // Di aplikasi nyata, Anda bisa memanggil API atau menunggu data/gambar dimuat di sini.
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // 3000ms = 3 detik

        // Cleanup function
        return () => clearTimeout(timer);
    }, []);

    // Jika isLoading true, tampilkan LoadingPage
    if (isLoading) {
        return <LoadingPage />;
    }

    // Jika isLoading false, tampilkan seluruh aplikasi
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

            {/* 6. SkillsMarqueeReverse (Arah Terbalik) */}
            <div className="SkillsMarqueeReverse">
                <SkillsMarqueeReverse />
            </div>

            {/* 7. Projects */}
            <div className="Projects">
                <Projects />
            </div>

            {/* 8. Contact */}
            <div className="Contact">
                <Contact />
            </div>

            {/* 9. Footer */}
            <div className="Footer">
                <Footer />
            </div>
        </div>
    );
}

export default App;