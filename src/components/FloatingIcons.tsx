"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function FloatingIcons() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    // Generate structured positions for floating PNG icons using a grid with jitter
    const rows = 3;
    const cols = 4;
    const icons = Array.from({ length: rows * cols }).map((_, i) => {
        const row = Math.floor(i / cols);
        const col = i % cols;
        return {
            id: i,
            // Grid position + 10% random jitter
            left: (col * (100 / cols)) + (Math.random() * 10),
            top: (row * (100 / rows)) + (Math.random() * 10),
            size: 40 + Math.random() * 40, // Slightly more consistent size
            duration: 25 + Math.random() * 20, // 25-45s animation
            delay: Math.random() * 10,
        };
    });

    return (
        <div className="fixed inset-0 z-[1] overflow-hidden pointer-events-none opacity-40">
            {icons.map((icon) => (
                <motion.div
                    key={icon.id}
                    className="absolute drop-shadow-md"
                    style={{ left: `${icon.left}%`, top: `${icon.top}%` }}
                    animate={{
                        y: [0, -40, 0, 30, 0],
                        x: [0, 20, -15, 10, 0],
                        rotate: [0, 10, -5, 5, 0],
                    }}
                    transition={{
                        duration: icon.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: icon.delay,
                    }}
                >
                    <Image
                        src="/dragon-logo.png"
                        alt="Dragon element"
                        width={icon.size}
                        height={icon.size}
                        className="object-contain rounded-full opacity-60"
                    />
                </motion.div>
            ))}
        </div>
    );
}
