"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
    {
        title: "Handcrafted Quality",
        desc: "Each product is made with care by skilled artisans.",
    },
    {
        title: "Eco-Friendly Materials",
        desc: "Sustainable bamboo that respects nature.",
    },
    {
        title: "Minimal & Elegant",
        desc: "Perfect blend of tradition and modern design.",
    },
    {
        title: "Long Lasting",
        desc: "Durable products built for everyday use.",
    },
];

export default function BottomBanner() {
    return (
        <section className="mt-24 px-4 md:px-10">

            <div className="relative rounded-2xl overflow-hidden shadow-none">

                {/* 🌿 BACKGROUND IMAGE (USE YOUR FOLDER) */}
                <Image
                    src="/images/hero.jpeg"   // 👈 from your folder
                    alt="Bamboo Background"
                    fill
                    sizes="100vw"
                    className="object-cover"
                />

                {/* 🌿 LIGHT OVERLAY (FIXED) */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#f5f0e6]/90 via-[#f5f0e6]/70 to-transparent"></div>

                {/* 🌿 CONTENT */}
                <div className="relative z-10 grid md:grid-cols-2 gap-10 p-8 md:p-16 items-center">

                    {/* 🪵 LEFT IMAGE */}
                    <motion.div
                        initial={{ x: -80, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center"
                    >
                    </motion.div>

                    {/* 🌿 RIGHT CONTENT */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#2f4a2c] mb-6">
                            Why Choose Bamboo 🌿
                        </h2>

                        {features.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: index * 0.2 }}
                                className="flex items-start gap-4 mb-5"
                            >
                                {/* Icon Circle */}
                                <div className="w-10 h-10 flex items-center justify-center bg-[#3e5c3a]/10 text-[#3e5c3a] rounded-full font-bold">
                                    ✓
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-[#2f4a2c]">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}