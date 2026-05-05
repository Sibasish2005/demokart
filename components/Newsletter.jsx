"use client";

import React, { useState, useEffect } from "react";

const NewsLetter = () => {
    const headingText = "Never Miss a Deal!";
    const subTexts = [
        "Get exclusive offers directly in your inbox.",
        "Be the first to know about new arrivals.",
        "Enjoy premium deals crafted just for you."
    ];

    const [typedHeading, setTypedHeading] = useState("");
    const [typedSub, setTypedSub] = useState("");
    const [subIndex, setSubIndex] = useState(0);

    // ✨ HEADING TYPING
    useEffect(() => {
        let i = 0;

        const type = () => {
            if (i <= headingText.length) {
                setTypedHeading(headingText.slice(0, i));
                i++;
                setTimeout(type, 80);
            }
        };

        type();
    }, []);

    // ✨ SUBTEXT TYPING LOOP
    useEffect(() => {
        let i = 0;
        let current = subTexts[subIndex];

        const type = () => {
            if (i <= current.length) {
                setTypedSub(current.slice(0, i));
                i++;
                setTimeout(type, 35);
            } else {
                setTimeout(() => {
                    setTypedSub("");
                    setSubIndex((prev) => (prev + 1) % subTexts.length);
                }, 2000);
            }
        };

        type();
    }, [subIndex]);

    return (
        <section className="relative mt-20 py-28 px-4 text-center overflow-hidden">

            {/* 🌿 ULTRA SMOOTH BLEND BACKGROUND */}
            <div className="absolute inset-0 -z-10 
                bg-gradient-to-b from-white via-white to-[#f8f5ee]" />

            {/* 🌿 SOFT GOLD LIGHT */}
            <div className="absolute w-[700px] h-[350px] 
                bg-[#D4B872]/15 blur-[180px] 
                top-0 left-1/2 -translate-x-1/2 animate-pulse" />

            {/* 🌿 EXTRA SOFT GLOW */}
            <div className="absolute w-[500px] h-[250px] 
                bg-[#D4B872]/10 blur-[200px] 
                bottom-0 left-1/2 -translate-x-1/2" />

            {/* 🌿 HEADING */}
            <h1 className="text-3xl md:text-5xl font-semibold text-[#1f3a28] tracking-tight">
                {typedHeading}
                <span className="ml-1 text-[#D4B872] animate-pulse">|</span>
            </h1>

            {/* 🌿 SUBTEXT (Typing Animation) */}
            <p className="mt-6 mb-12 text-gray-500 text-base md:text-lg h-6">
                {typedSub}
                <span className="ml-1 text-[#D4B872] animate-pulse">|</span>
            </p>

            {/* 🌿 INPUT */}
            <div className="max-w-2xl mx-auto flex items-center rounded-full overflow-hidden 
                bg-white/90 backdrop-blur-md 
                shadow-[0_10px_40px_rgba(0,0,0,0.06)] 
                border border-[#eee6d3]
                hover:shadow-[0_15px_50px_rgba(212,184,114,0.2)]
                transition duration-500 w-full">

                <input
                    type="email"
                    placeholder="Enter your email id"
                    className="flex-1 px-4 py-3 md:px-6 md:py-4 outline-none bg-transparent text-[#2f4f34] text-sm md:text-base min-w-0"
                />

                {/* 🌿 GOLD BUTTON */}
                <button className="px-5 py-3 md:px-8 md:py-4 bg-[#D4B872] text-white font-medium 
                    hover:bg-[#c5a95f] transition duration-300 whitespace-nowrap text-sm md:text-base flex-shrink-0">
                    Subscribe →
                </button>
            </div>

            {/* 🌿 BOTTOM FADE (MERGE EFFECT) */}
            <div className="absolute bottom-0 left-0 w-full h-40 
                bg-gradient-to-b from-transparent to-[#f8f5ee]" />
        </section>
    );
};

export default NewsLetter;