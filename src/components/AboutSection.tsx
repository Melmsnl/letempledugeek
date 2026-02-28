"use client";

import { motion } from "framer-motion";
import infoData from "@/app/data/info.json";
import { IconDeviceGamepad, IconCoffee, IconMug } from "@tabler/icons-react";

export default function AboutSection() {
    return (
        <section id="about" className="py-24 px-4 bg-transparent">
            <div className="max-w-5xl mx-auto md:ml-64 xl:mx-auto bg-primary/30 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(251,207,232,0.4)] border border-primary/50">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold text-foreground mb-6">Un univers cosy et rétro</h2>
                        <p className="text-lg text-foreground/90 font-medium leading-relaxed mb-6">
                            {infoData.description}
                        </p>
                        <p className="text-lg text-foreground/90 font-medium leading-relaxed">
                            Venez vous détendre, lire un manga, ou jouer à vos jeux de société favoris dans une ambiance accueillante et chaleureuse.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-2 gap-4"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="bg-white/60 p-6 rounded-2xl flex flex-col items-center justify-center gap-3 aspect-square shadow-sm hover:shadow-md transition-shadow">
                            <IconCoffee size={48} className="text-foreground" />
                            <span className="font-bold text-center text-foreground">Pâtisseries Maison</span>
                        </div>
                        <div className="bg-white/60 p-6 rounded-2xl flex flex-col items-center justify-center gap-3 aspect-square mt-8 shadow-sm hover:shadow-md transition-shadow">
                            <IconDeviceGamepad size={48} className="text-foreground" />
                            <span className="font-bold text-center text-foreground">Jeux & Manga</span>
                        </div>
                        <div className="bg-white/60 p-6 rounded-2xl flex flex-col items-center justify-center gap-3 aspect-square -mt-8 shadow-sm hover:shadow-md transition-shadow">
                            <IconMug size={48} className="text-foreground" />
                            <span className="font-bold text-center text-foreground">Bubble Tea & Boissons</span>
                        </div>
                        <div className="bg-white/60 p-6 rounded-2xl flex flex-col items-center justify-center gap-3 aspect-square shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-foreground text-4xl font-black">100%</div>
                            <span className="font-bold text-center text-foreground">Geek</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
