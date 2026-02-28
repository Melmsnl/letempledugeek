"use client";

import { motion } from "framer-motion";
import { IconSeeding } from "@tabler/icons-react"; // Using seeding as a substitute for cherry blossom if not available directly

export default function CherryBlossomSeparator() {
    return (
        <div className="w-full py-12 flex justify-center items-center overflow-hidden">
            <motion.div
                className="w-full max-w-4xl flex items-center gap-4 px-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
            >
                <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-accent to-accent rounded-full"></div>

                {/* Central Blossom Design */}
                <div className="flex gap-2 text-accent">
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }}>
                        <IconSeeding size={32} />
                    </motion.div>
                    <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 12, ease: "linear" }}>
                        <IconSeeding size={40} className="text-accent-foreground" />
                    </motion.div>
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }}>
                        <IconSeeding size={32} />
                    </motion.div>
                </div>

                <div className="h-1 flex-1 bg-gradient-to-l from-transparent via-accent to-accent rounded-full"></div>
            </motion.div>
        </div>
    );
}
