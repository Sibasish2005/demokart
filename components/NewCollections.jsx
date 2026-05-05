"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const CATEGORIES = [
  { id: 1, name: "Home Decor", image: "/images/bamboo-craft-06.jpg" },
  { id: 2, name: "Kitchen & Dining", image: "/images/bamboo-craft-07.jpg" },
  { id: 3, name: "Lighting", image: "/images/bamboo-craft-05.jpg" },
  { id: 4, name: "Furniture", image: "/images/bamboo-craft-08.jpg" },
  { id: 5, name: "Storage", image: "/images/bamboo-craft-09.jpg" },
  { id: 6, name: "Planters", image: "/images/bamboo-craft-03.jpg" },
  { id: 7, name: "Accessories", image: "/images/bamboo-craft-10.jpg" },
];

const BEST_SELLERS = [
  { id: 1, name: "Bamboo Pendant Light", price: "₹3499", oldPrice: "₹4599", rating: 4.8, image: "/images/bamboo-craft-01.jpg" },
  { id: 2, name: "Woven Fruit Basket", price: "₹1299", oldPrice: "₹1899", rating: 4.9, image: "/images/bamboo-craft-02.jpg" },
  { id: 3, name: "Minimalist Planter", price: "₹1899", oldPrice: "₹2299", rating: 4.7, image: "/images/bamboo-craft-03.jpg" },
  { id: 4, name: "Dining Mat Set", price: "₹999", oldPrice: "₹1499", rating: 5.0, image: "/images/bamboo-craft-04.jpg" },
];

// Framer Motion Variants for Pro Animations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function NewCollections() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12 overflow-hidden">
      {/* Categories Section */}
      <section className="mb-20">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-[#1A4314] mb-8"
        >
          Collection
        </motion.h2>
        
        {/* Categories Flex Container with horizontal scroll on small screens */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex gap-4 md:gap-6 overflow-x-auto pb-8 pt-4 scrollbar-hide px-2"
        >
          {CATEGORIES.map((cat) => (
            <motion.div
              key={cat.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer flex-shrink-0 w-[160px] h-[180px] rounded-[24px] flex flex-col items-center justify-center p-4 relative bg-white border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(26,67,20,0.12)] hover:border-[#1A4314]/20 transition-all duration-300 group"
            >
              <div className="w-24 h-24 rounded-full bg-[#F9F6F0] mb-3 relative flex items-center justify-center overflow-hidden shadow-inner group-hover:bg-[#E8F0E6] transition-colors duration-500">
                 <div className="relative w-20 h-20 transform group-hover:scale-110 transition-transform duration-500">
                   <Image 
                     src={cat.image} 
                     alt={cat.name} 
                     fill 
                     sizes="300px"
                     className="object-cover rounded-full drop-shadow-sm"
                     onError={(e) => {
                       e.currentTarget.src = "/images/bg_image.jpg";
                     }}
                   />
                 </div>
              </div>
              <span className="text-sm font-bold text-center z-10 text-gray-600 group-hover:text-[#1A4314] transition-colors duration-300">
                {cat.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
