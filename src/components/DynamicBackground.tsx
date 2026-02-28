"use client";

import React from 'react';
import { motion } from 'framer-motion';

const GeekSymbol = ({ delay, x, size }: { delay: number, x: string, size: number }) => (
    <motion.div
        className="absolute text-secondary/20 select-none pointer-events-none font-mono"
        initial={{ y: "110vh", opacity: 0, rotate: 0 }}
        animate={{
            y: "-10vh",
            opacity: [0, 0.5, 0],
            rotate: 360
        }}
        transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay,
            ease: "linear"
        }}
        style={{ left: x, fontSize: size }}
    >
        {["{ }", "</>", "JS", "👾", "🕹️", "01", "10", "◈", "▣"][Math.floor(Math.random() * 9)]}
    </motion.div>
);

export default function DynamicBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-background">
            {/* Animated Gradient Gradients */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* Floating Geek Elements */}
            {[...Array(15)].map((_, i) => (
                <GeekSymbol
                    key={i}
                    delay={i * 2}
                    x={`${Math.random() * 100}%`}
                    size={20 + Math.random() * 40}
                />
            ))}

            {/* Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] z-[1]" />
        </div>
    );
}
