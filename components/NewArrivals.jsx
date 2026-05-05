"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const NEW_ARRIVALS = [
  { id: 1, name: "Premium Bamboo Chair", price: "₹4999", rating: 5.0, image: "/images/bamboo-craft-05.jpg" },
  { id: 2, name: "Bamboo Storage Box", price: "₹1899", rating: 4.8, image: "/images/bamboo-craft-06.jpg" },
  { id: 3, name: "Eco-friendly Cutlery", price: "₹799", rating: 4.9, image: "/images/bamboo-craft-07.jpg" },
  { id: 4, name: "Handcrafted Vase", price: "₹2499", rating: 4.6, image: "/images/bamboo-craft-08.jpg" },
];

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

export default function NewArrivals() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12 overflow-hidden">
      <section>
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-[#1A4314] mb-8"
        >
          New Arrivals
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2"
        >
          {NEW_ARRIVALS.map((product) => (
            <motion.div 
              key={product.id} 
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-5 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_-8px_rgba(26,67,20,0.15)] transition-all duration-300 group relative"
            >
              {/* New Badge */}
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="absolute top-5 left-5 bg-[#1A4314]/10 text-[#1A4314] text-xs font-extrabold px-3 py-1 rounded-full z-10 backdrop-blur-sm"
              >
                New
              </motion.div>
              
              <div className="relative h-56 w-full mb-5 bg-[#F9F6F0] rounded-2xl overflow-hidden flex items-center justify-center group-hover:bg-[#E8F0E6] transition-colors duration-500">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    e.currentTarget.src = "/images/hero.jpeg";
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Bamboo Craft</p>
                  <div className="flex items-center gap-1 text-[#D4B872]">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-xs text-gray-600 font-bold ml-1">{product.rating}</span>
                  </div>
                </div>
                
                <h3 className="font-extrabold text-[#2D2D2D] line-clamp-1 text-lg group-hover:text-[#1A4314] transition-colors duration-300">{product.name}</h3>
                
                <div className="flex items-center gap-3 mt-3">
                  <span className="text-xl font-black text-[#1A4314]">{product.price}</span>
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-5 bg-white border-2 border-[#1A4314] text-[#1A4314] hover:bg-[#1A4314] hover:text-white font-bold py-3 rounded-full transition-colors duration-300 shadow-sm"
                >
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
