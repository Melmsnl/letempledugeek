"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Banderoles() {
    const bannerLength = 250; // Longueur augmentée
    const speed = 20; // Vitesse réduite (durée plus longue)

    return (
        <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
            {/* Top segment moving left to right */}
            <motion.div
                className="absolute top-0 left-0 h-[4px] bg-secondary shadow-[0_0_15px_rgba(179,227,1,0.8)]"
                initial={{ x: "-100%" }}
                animate={{ x: "100vw" }}
                transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
                style={{ width: bannerLength }}
            />

            {/* Right segment moving top to bottom */}
            <motion.div
                className="absolute top-0 right-0 w-[4px] bg-secondary shadow-[0_0_15px_rgba(179,227,1,0.8)]"
                initial={{ y: "-100%" }}
                animate={{ y: "100vh" }}
                transition={{ duration: speed, repeat: Infinity, ease: "linear", delay: speed * 0.25 }}
                style={{ height: bannerLength }}
            />

            {/* Bottom segment moving right to left */}
            <motion.div
                className="absolute bottom-0 right-0 h-[4px] bg-secondary shadow-[0_0_15px_rgba(179,227,1,0.8)]"
                initial={{ x: "100%" }}
                animate={{ x: "-100vw" }}
                transition={{ duration: speed, repeat: Infinity, ease: "linear", delay: speed * 0.5 }}
                style={{ width: bannerLength }}
            />

            {/* Left segment moving bottom to top */}
            <motion.div
                className="absolute bottom-0 left-0 w-[4px] bg-secondary shadow-[0_0_15px_rgba(179,227,1,0.8)]"
                initial={{ y: "100%" }}
                animate={{ y: "-100vh" }}
                transition={{ duration: speed, repeat: Infinity, ease: "linear", delay: speed * 0.75 }}
                style={{ height: bannerLength }}
            />
        </div>
    );
}
