"use client";

import React from 'react';
import { motion } from 'framer-motion';

import Image from 'next/image';

export default function DragonBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-background pointer-events-none">
            {/* Dragon Logo floating in the back */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 w-[60vw] max-w-[500px] aspect-square"
                animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, -2, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <Image
                    src="/dragon-logo.png"
                    alt="Dragon Logo"
                    fill
                    className="object-contain rounded-full"
                />
            </motion.div>

            {/* Subtle glow behind the dragon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-secondary/10 blur-[100px] rounded-full z-[-1]" />
        </div>
    );
}
