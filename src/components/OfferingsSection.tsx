"use client";

import { motion } from "framer-motion";
import infoData from "@/app/data/info.json";
import { IconCheck } from "@tabler/icons-react";

export default function OfferingsSection() {
    return (
        <section id="offerings" className="py-24 px-4 bg-transparent">
            <div className="max-w-4xl mx-auto md:ml-64 xl:mx-auto bg-primary/30 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(251,207,232,0.4)] border border-primary/50">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-foreground mb-4">Ce que nous proposons</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {infoData.offerings.map((item, index) => {
                        const isLastAndOdd = index === infoData.offerings.length - 1 && infoData.offerings.length % 2 !== 0;
                        return (
                            <motion.div
                                key={index}
                                className={`bg-white/60 p-6 rounded-2xl shadow-sm border border-primary/20 flex items-center gap-4 hover:shadow-md transition-shadow ${isLastAndOdd ? "md:col-span-2 md:w-[calc(50%-0.75rem)] md:mx-auto w-full" : "w-full"
                                    }`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="bg-secondary/20 p-2 rounded-full text-secondary">
                                    <IconCheck size={24} />
                                </div>
                                <span className="text-lg font-bold text-foreground">{item}</span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
