"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const images = [
    "/temple-geek-1.jpg",
    "/temple-geek-2.jpg",
    "/temple-geek-3.jpg"
];

export default function ImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    // Auto-play
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <section className="py-24 px-4 bg-transparent" id="gallery">
            <div className="max-w-5xl mx-auto bg-primary/20 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(251,207,232,0.3)] border border-primary/50">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold text-foreground mb-4">Notre salon et notre équipe</h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative h-[400px] md:h-[500px] w-full max-w-4xl mx-auto rounded-2xl overflow-hidden group shadow-2xl border-4 border-white/40">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentIndex}
                            src={images[currentIndex]}
                            alt={`Slide ${currentIndex}`}
                            className="absolute inset-0 w-full h-full object-cover"
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                        />
                    </AnimatePresence>

                    {/* Navigation Controls */}
                    <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                            onClick={prevSlide}
                            className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors"
                        >
                            <IconChevronLeft size={32} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors"
                        >
                            <IconChevronRight size={32} />
                        </button>
                    </div>

                    {/* Indicators */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentIndex ? "bg-white scale-125" : "bg-white/50"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
