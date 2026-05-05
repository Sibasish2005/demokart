"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Footer = () => {

  const texts = [
    "We create handcrafted bamboo products that bring nature closer to your home. Sustainable, elegant, and made with care.",
    "From eco-friendly decor to functional bamboo crafts, every piece is designed to blend tradition with modern living.",
    "Natural. Sustainable. Beautiful — crafted from bamboo for a better lifestyle."
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 35);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setTypedText("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 2500);
    }
  }, [charIndex, textIndex]);

  return (
    <footer className="mt-14 bg-[#f5f0e6] text-[#3e5c3a] px-6 md:px-16 lg:px-24 xl:px-32">

      {/* 🌿 Top Section (HEIGHT INCREASED) */}
      <div className="flex flex-col md:flex-row justify-between gap-16 py-16 md:py-20 border-b border-[#d6c7a1]/40">

        {/* 🌿 Brand */}
        <div className="max-w-md">
          <h1 className="text-2xl font-bold tracking-tight">
            Bamboo<span className="text-[#b89b5e]">Craft</span>
          </h1>

          <p className="mt-6 leading-relaxed text-[#5a5a5a]">
            {typedText}
            <span className="ml-1 animate-pulse text-[#3e5c3a]">|</span>
          </p>
        </div>

        {/* 🌿 Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm">

          <div>
            <h3 className="font-semibold text-[#2f4a2c] mb-4">Shop</h3>
            <ul className="space-y-3">
              <li><Link href="/collection/lamps-lighting" className="hover:text-[#b89b5e] transition">Lamps</Link></li>
              <li><Link href="/collection/home-decor" className="hover:text-[#b89b5e] transition">Home Decor</Link></li>
              <li><Link href="/collection/kitchen-dining" className="hover:text-[#b89b5e] transition">Kitchen</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#2f4a2c] mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-[#b89b5e] transition">About Us</Link></li>
              <li><Link href="/" className="hover:text-[#b89b5e] transition">Sustainability</Link></li>
              <li><Link href="/" className="hover:text-[#b89b5e] transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#2f4a2c] mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-[#b89b5e] transition">FAQs</Link></li>
              <li><Link href="/" className="hover:text-[#b89b5e] transition">Shipping</Link></li>
              <li><Link href="/" className="hover:text-[#b89b5e] transition">Returns</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* 🌿 Bottom (ALSO INCREASED) */}
      <div className="py-8 text-center text-sm text-[#6b6b6b]">
        © {new Date().getFullYear()}
        <span className="text-[#3e5c3a] font-medium"> BambooCraft</span>.
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;