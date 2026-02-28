"use client";

import { motion } from "framer-motion";
import { IconHome, IconInfoCircle, IconCoffee, IconMapPin } from "@tabler/icons-react";

export default function SideNavigation() {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    const navItems = [
        { id: "hero", icon: <IconHome size={24} className="text-secondary" />, label: "Accueil" },
        { id: "about", icon: <IconInfoCircle size={24} className="text-secondary" />, label: "À Propos" },
        { id: "offerings", icon: <IconCoffee size={24} className="text-secondary" />, label: "Nos Offres" },
        { id: "infos", icon: <IconMapPin size={24} className="text-secondary" />, label: "Infos" },
    ];

    return (
        <motion.nav
            className="fixed left-2 md:left-4 top-1/2 -translate-y-1/2 z-50 bg-foreground/95 backdrop-blur-md px-2 py-4 md:px-3 md:py-6 md:rounded-3xl rounded-full shadow-xl border border-secondary/30 flex flex-col gap-3 md:gap-5"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
        >
            <div className="hidden md:block text-accent font-black text-lg text-center mb-3 border-b border-secondary/30 pb-3 leading-tight uppercase tracking-widest font-geek">
                Le Temple<br /><span className="text-secondary">du Geek</span>
            </div>

            {navItems.map((item) => (
                <div key={item.id} className="relative group">
                    <button
                        onClick={() => scrollTo(item.id)}
                        className="flex items-center gap-2 p-2 md:px-2 md:py-3 w-full rounded-full md:rounded-xl text-secondary font-bold hover:bg-secondary/20 hover:scale-110 transition-all duration-300"
                        aria-label={item.label}
                    >
                        {item.icon}
                        <span className="hidden md:block whitespace-nowrap text-sm">{item.label}</span>
                    </button>

                    {/* Tooltip (Mobile Only) */}
                    <div className="md:hidden absolute left-full top-1/2 -translate-y-1/2 ml-4 px-3 py-1 bg-foreground text-background text-sm font-medium rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap shadow-md pointer-events-none">
                        {item.label}
                        <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-foreground"></div>
                    </div>
                </div>
            ))}
        </motion.nav>
    );
}
