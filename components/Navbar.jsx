"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "All", href: "/collection/all" },
  { name: "Lamps & Lighting", href: "/collection/lamps-lighting" },
  { name: "Home Decor", href: "/collection/home-decor" },
  { name: "Kitchen & Dining", href: "/collection/kitchen-dining" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-6",
        isScrolled
          ? "bg-[#F9F6F0]/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold text-[#1A4314] tracking-tight flex items-center"
          >
            Novo<span className="text-[#D4B872]">cart</span>
          </motion.div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#2D2D2D] hover:text-[#1A4314] font-medium text-base transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#D4B872] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-5">
          <button className="text-[#2D2D2D] hover:text-[#1A4314] transition-colors">
            <Search className="w-6 h-6" />
          </button>
          <button className="text-[#2D2D2D] hover:text-[#1A4314] transition-colors">
            <User className="w-6 h-6" />
          </button>
          <button className="text-[#2D2D2D] hover:text-[#1A4314] transition-colors relative">
            <ShoppingBag className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-[#1A4314] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 text-[#1A4314]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#F9F6F0] shadow-lg py-6 px-6 flex flex-col gap-4 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-[#2D2D2D] border-b border-[#D4B872]/20 pb-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-6 mt-4">
              <Search className="w-6 h-6 text-[#1A4314]" />
              <User className="w-6 h-6 text-[#1A4314]" />
              <ShoppingBag className="w-6 h-6 text-[#1A4314]" />
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
