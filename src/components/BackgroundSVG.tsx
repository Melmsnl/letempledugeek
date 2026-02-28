"use client";

import { motion } from "framer-motion";

export default function BackgroundSVG() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none opacity-40">
            <svg
                className="absolute w-full h-full"
                viewBox="0 0 1440 800"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    d="M0,400 C320,500 420,200 720,300 C1020,400 1120,100 1440,200 L1440,800 L0,800 Z"
                    fill="none"
                    stroke="#ddd6fe" // violet-200
                    strokeWidth="4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.8 }}
                    transition={{ duration: 4, ease: "easeInOut" }}
                />

                <motion.path
                    d="M0,500 C250,700 550,250 900,450 C1250,650 1350,300 1440,400 L1440,800 L0,800 Z"
                    fill="none"
                    stroke="#ede9fe" // violet-100
                    strokeWidth="6"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ duration: 5, ease: "easeInOut", delay: 1 }}
                />

                <motion.path
                    d="M0,200 C400,100 600,600 1000,500 C1200,450 1300,700 1440,600 L1440,800 L0,800 Z"
                    fill="none"
                    stroke="#bbf7d0" // pastel green (primary)
                    strokeWidth="3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.7 }}
                    transition={{ duration: 6, ease: "easeInOut", delay: 2 }}
                />
            </svg>
        </div>
    );
}
