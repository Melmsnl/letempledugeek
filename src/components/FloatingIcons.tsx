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

    // Generate random positions for floating PNG icons
    const icons = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 40 + Math.random() * 60, // 40-100px width
        duration: 20 + Math.random() * 25, // 20-45s animation
        delay: Math.random() * 5,
    }));

    return (
        <div className="fixed inset-0 z-[1] overflow-hidden pointer-events-none opacity-20 mix-blend-multiply">
            {icons.map((icon) => (
                <motion.div
                    key={icon.id}
                    className="absolute drop-shadow-lg"
                    style={{ left: `${icon.left}%`, top: `${icon.top}%` }}
                    animate={{
                        y: [0, -50, 0, 40, 0],
                        x: [0, 30, -20, 10, 0],
                        rotate: [0, 15, -10, 5, 0],
                    }}
                    transition={{
                        duration: icon.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: icon.delay,
                    }}
                >
                    <Image
                        src="/icon.png"
                        alt="Manga element"
                        width={icon.size}
                        height={icon.size}
                        className="object-contain"
                    />
                </motion.div>
            ))}
        </div>
    );
}
