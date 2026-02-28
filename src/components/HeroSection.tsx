"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-primary/10">
            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm z-0"></div>

            {/* Custom Shape Divider */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-0">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px] md:h-[150px]">
                    <defs>
                        <linearGradient id="pastelGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#fbcfe8" /> {/* pink-200 */}
                            <stop offset="50%" stopColor="#fce7f3" /> {/* pink-100 */}
                            <stop offset="100%" stopColor="#bbf7d0" /> {/* green-200 */}
                        </linearGradient>
                    </defs>
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="url(#pastelGradient)"></path>
                </svg>
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.h1
                    className="text-6xl md:text-8xl font-black text-foreground mb-6 font-geek tracking-wide"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Le Temple du Geek
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl text-foreground/90 mb-10 font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Votre salon de thé dédié à la culture japonaise et geek à Caen.
                </motion.p>

                <motion.button
                    onClick={() => {
                        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-primary px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="text-secondary text-2xl uppercase tracking-widest font-black">Découvrir</span>
                </motion.button>
            </div>

            {/* Scroll Indicator removed as requested */}
        </section>
    );
}
