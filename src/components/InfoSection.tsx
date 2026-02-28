"use client";

import { motion } from "framer-motion";
import infoData from "@/app/data/info.json";
import { IconMapPin, IconClock, IconBrandFacebook, IconBrandInstagram, IconBrandDiscord } from "@tabler/icons-react";

export default function InfoSection() {
    return (
        <section id="infos" className="py-24 px-4 bg-transparent border-t border-primary/20">
            <div className="max-w-5xl mx-auto md:ml-64 xl:mx-auto bg-primary/30 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(251,207,232,0.4)] border border-primary/50">
                <motion.h2
                    className="text-4xl font-bold text-center text-foreground mb-16 font-geek tracking-widest"
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
                        <p className="text-foreground font-geek text-xl mt-2 animate-pulse">
                            Nous vous attendons
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
                        <div className="bg-primary/20 p-4 rounded-full text-secondary mb-2 flex gap-3">
                            <IconBrandInstagram size={32} />
                            <IconBrandFacebook size={32} />
                            <IconBrandDiscord size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">Réseaux Sociaux</h3>
                        <p className="text-foreground/90 font-medium mb-2">Suivez nos actualités !</p>
                        <div className="flex flex-col gap-3 w-full max-w-[180px]">
                            {/* Instagram first */}
                            <a
                                href={infoData.socials.find(s => s.platform === "Instagram")?.url}
                                target="_blank"
                                rel="noreferrer"
                                className="bg-[#E4405F] text-white px-4 py-2 rounded-xl font-bold hover:opacity-80 transition-all shadow-md flex items-center justify-center gap-2"
                            >
                                <IconBrandInstagram size={20} /> Instagram
                            </a>
                            {/* Facebook under Instagram */}
                            <a
                                href={infoData.socials.find(s => s.platform === "Facebook")?.url}
                                target="_blank"
                                rel="noreferrer"
                                className="bg-[#1877F2] text-white px-4 py-2 rounded-xl font-bold hover:opacity-80 transition-all shadow-md flex items-center justify-center gap-2"
                            >
                                <IconBrandFacebook size={20} /> Facebook
                            </a>
                            {/* Discord alongside/below (added for completeness) */}
                            <a
                                href="#"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-[#5865F2] text-white px-4 py-2 rounded-xl font-bold hover:opacity-80 transition-all shadow-md flex items-center justify-center gap-2"
                            >
                                <IconBrandDiscord size={20} /> Discord
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
