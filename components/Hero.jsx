"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const bgImages = [
  "/images/hero.jpeg",
  "/images/bg_image.jpg",
];

const typingTexts = [
  "Crafted from Nature, Designed for Living",
  "Eco-Friendly Living Starts with Bamboo",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Background Image slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Typing effect
  useEffect(() => {
    const currentFullText = typingTexts[currentTextIndex];
    let typingSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && displayedText === currentFullText) {
      // Pause before deleting
      typingSpeed = 2500;
      setTimeout(() => setIsDeleting(true), typingSpeed);
      return;
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
      typingSpeed = 500;
    }

    const timeout = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? currentFullText.substring(0, prev.length - 1)
          : currentFullText.substring(0, prev.length + 1),
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTextIndex]);

  return (
    <div className="w-full px-0 md:px-4 py-6 md:py-12">
      <div className="relative w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-none md:rounded-xl shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={bgImages[currentImageIndex]}
              alt="Hero Background"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient Overlay to make text readable across different images */}
        <div className="absolute inset-0 bg-black/20 z-10" />

        <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight min-h-[160px] md:min-h-[180px] lg:min-h-[200px]">
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-[3px] md:w-[4px] h-[1em] bg-white ml-1 align-middle"
              />
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/shop">
                <button className="px-6 py-2.5 md:px-8 md:py-3 bg-[#00c58e] text-white font-semibold rounded-md hover:bg-[#00a879] transition-all transform hover:scale-105 shadow-md">
                  Shop Now
                </button>
              </Link>
              <Link href="/explore">
                <button className="px-6 py-2.5 md:px-8 md:py-3 bg-white text-gray-800 font-semibold rounded-md hover:bg-gray-100 transition-all transform hover:scale-105 shadow-md">
                  Explore
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
