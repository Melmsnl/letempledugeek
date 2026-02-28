"use client";

import { motion } from "framer-motion";
import infoData from "@/app/data/info.json";
import { IconMapPin, IconClock, IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";

export default function InfoSection() {
    return (
        <section id="infos" className="py-24 px-4 bg-transparent border-t border-primary/20">
            <div className="max-w-5xl mx-auto md:ml-64 xl:mx-auto bg-primary/30 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(251,207,232,0.4)] border border-primary/50">
                <motion.h2
                    className="text-4xl font-bold text-center text-foreground mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Informations Pratiques
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-12">

                    <motion.div
                        className="flex flex-col items-center text-center gap-4 bg-white/60 p-6 rounded-2xl shadow-sm"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="bg-primary/20 p-4 rounded-full text-secondary mb-2">
                            <IconMapPin size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">Adresse</h3>
                        <p className="text-foreground/90 font-medium leading-relaxed">
                            {infoData.address.street}<br />
                            {infoData.address.postalCode} {infoData.address.city}<br />
                            {infoData.address.country}
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex flex-col items-center text-center gap-4 bg-white/60 p-6 rounded-2xl shadow-sm"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="bg-primary/20 p-4 rounded-full text-secondary mb-2">
                            <IconClock size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">Horaires</h3>
                        <ul className="text-foreground/90 w-full max-w-[200px] text-left mx-auto">
                            {infoData.hours.map((h, i) => (
                                <li key={i} className="flex justify-between py-1 border-b border-primary/20 last:border-0">
                                    <span className={h.time === "Fermé" ? "text-red-500 font-bold" : "font-medium"}>{h.day}</span>
                                    <span className={h.time === "Fermé" ? "text-red-500 font-bold" : "font-bold text-foreground"}>{h.time}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        className="flex flex-col items-center text-center gap-4 bg-white/60 p-6 rounded-2xl shadow-sm"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="bg-primary/20 p-4 rounded-full text-secondary mb-2 flex gap-2">
                            <IconBrandFacebook size={40} />
                            <IconBrandInstagram size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">Réseaux Sociaux</h3>
                        <p className="text-foreground/90 font-medium mb-4">Suivez nos actualités !</p>
                        <div className="flex gap-4">
                            {infoData.socials.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-primary text-white px-6 py-2 rounded-full font-bold hover:bg-primary/80 transition-colors shadow-md"
                                >
                                    {social.platform}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
