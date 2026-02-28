"use client";

import { motion } from "framer-motion";
import infoData from "@/app/data/info.json";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollTo = (id: string) => {
        setIsOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="fixed w-full top-0 z-50 bg-accent shadow-md">
            <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
                <div className="text-2xl font-bold text-accent-foreground cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    {infoData.name}
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-8">
                    <button onClick={() => scrollTo('about')} className="text-accent-foreground font-medium hover:text-white transition-colors">À Propos</button>
                    <button onClick={() => scrollTo('offerings')} className="text-accent-foreground font-medium hover:text-white transition-colors">Nos Offres</button>
                    <button onClick={() => scrollTo('infos')} className="text-accent-foreground font-medium hover:text-white transition-colors">Infos Pratiques</button>
                </nav>

                {/* Mobile Toggle */}
                <button className="md:hidden text-accent-foreground" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <IconX size={28} /> : <IconMenu2 size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-20 left-0 w-full bg-accent shadow-lg flex flex-col items-center py-6 gap-6"
                >
                    <button onClick={() => scrollTo('about')} className="text-accent-foreground font-bold text-lg">À Propos</button>
                    <button onClick={() => scrollTo('offerings')} className="text-accent-foreground font-bold text-lg">Nos Offres</button>
                    <button onClick={() => scrollTo('infos')} className="text-accent-foreground font-bold text-lg">Infos Pratiques</button>
                </motion.div>
            )}
        </header>
    );
}
