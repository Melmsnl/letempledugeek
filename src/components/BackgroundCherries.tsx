"use client";

import { motion } from "framer-motion";
import { IconCherry } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function BackgroundCherries() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    // Generate random positions for cherries
    const cherries = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100, // percentage width
        top: Math.random() * 100, // percentage height
        size: 24 + Math.random() * 32, // 24-56px
        duration: 15 + Math.random() * 20, // 15-35s animation
        delay: Math.random() * 5,
    }));

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none opacity-30">
            {cherries.map((cherry) => (
                <motion.div
                    key={cherry.id}
                    className="absolute text-accent-foreground drop-shadow-sm"
                    style={{ left: `${cherry.left}%`, top: `${cherry.top}%` }}
                    animate={{
                        y: [0, -30, 0, 30, 0],
                        x: [0, 20, 0, -20, 0],
                        rotate: [0, 20, -20, 0],
                    }}
                    transition={{
                        duration: cherry.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: cherry.delay,
                    }}
                >
                    <IconCherry size={cherry.size} />
                </motion.div>
            ))}
        </div>
    );
}
