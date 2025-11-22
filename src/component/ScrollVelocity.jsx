"use client";

import React, { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useMotionValue,
    useAnimationFrame,
    useVelocity
} from "framer-motion";
import "./ScrollVelocity.css";

export default function RunningTextScrollVelocity() {
    const baseX = useMotionValue(0);
    const containerRef = useRef(null);

    // Scroll progress
    const { scrollY } = useScroll();

    // Detect scroll velocity
    const rawVelocity = useVelocity(scrollY);

    // Smooth velocity → biar lebih halus
    const smoothVelocity = useSpring(rawVelocity, {
        stiffness: 150,
        damping: 30
    });

    // Final velocity factor (buat tambah speed scroll)
    const velocityFactor = useSpring(0, {
        stiffness: 80,
        damping: 20
    });

    // Saat nilai scroll berubah → update speed
    smoothVelocity.on("change", (v) => {
        velocityFactor.set(v / 800); // atur sensitivitas scroll
    });

    // Running animation (mirip marquee)
    useAnimationFrame((t, delta) => {
        let move = (delta / 1000) * 40; // speed dasar

        // Tambahan kecepatan dari scroll
        move += move * velocityFactor.get();

        // Update posisi teks
        baseX.set(baseX.get() - move);

        // Reset biar loop tidak patah
        if (Math.abs(baseX.get()) > 2000) {
            baseX.set(0);
        }
    });

    return (
        <div className="rt-wrapper" ref={containerRef}>
            <motion.div
                className="rt-text"
                style={{
                    x: baseX,
                }}
            >
                <span>⚡ Front-End Developer — UI/UX — Motion — Creative Coding — </span>
                <span>⚡ Front-End Developer — UI/UX — Motion — Creative Coding — </span>
                <span>⚡ Front-End Developer — UI/UX — Motion — Creative Coding — </span>
            </motion.div>
        </div>
    );
}
