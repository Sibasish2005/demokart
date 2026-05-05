"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ALL_PRODUCTS = [
  { id: 1, name: "Bamboo Pendant Light", price: "₹3499", oldPrice: "₹4599", rating: 4.8, image: "/images/bamboo-craft-01.jpg", category: "lamps-lighting" },
  { id: 2, name: "Woven Fruit Basket", price: "₹1299", oldPrice: "₹1899", rating: 4.9, image: "/images/bamboo-craft-02.jpg", category: "kitchen-dining" },
  { id: 3, name: "Minimalist Planter", price: "₹1899", oldPrice: "₹2299", rating: 4.7, image: "/images/bamboo-craft-03.jpg", category: "home-decor" },
  { id: 4, name: "Dining Mat Set", price: "₹999", oldPrice: "₹1499", rating: 5.0, image: "/images/bamboo-craft-04.jpg", category: "kitchen-dining" },
  { id: 5, name: "Premium Bamboo Chair", price: "₹4999", rating: 5.0, image: "/images/bamboo-craft-05.jpg", category: "home-decor" },
  { id: 6, name: "Bamboo Storage Box", price: "₹1899", rating: 4.8, image: "/images/bamboo-craft-06.jpg", category: "home-decor" },
  { id: 7, name: "Eco-friendly Cutlery", price: "₹799", rating: 4.9, image: "/images/bamboo-craft-07.jpg", category: "kitchen-dining" },
  { id: 8, name: "Handcrafted Vase", price: "₹2499", rating: 4.6, image: "/images/bamboo-craft-08.jpg", category: "home-decor" },
  { id: 9, name: "Bamboo Desk Lamp", price: "₹2299", rating: 4.9, image: "/images/bamboo-craft-09.jpg", category: "lamps-lighting" },
  { id: 10, name: "Wall Art Decor", price: "₹1599", rating: 4.5, image: "/images/bamboo-craft-10.jpg", category: "home-decor" },
  { id: 11, name: "Woven Lampshade", price: "₹3999", oldPrice: "₹4999", rating: 4.9, image: "/images/bamboo-craft-11.jpg", category: "lamps-lighting" },
  { id: 12, name: "Bamboo Serving Tray", price: "₹1499", rating: 4.8, image: "/images/bamboo-craft-12.jpg", category: "kitchen-dining" },
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

export default function CategoryPage() {
  const params = useParams();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid hydration mismatch on client

  const category = params?.category || "all";
  
  // Format title
  const titleMap = {
    "all": "All Collections",
    "lamps-lighting": "Lamps & Lighting",
    "home-decor": "Home Decor",
    "kitchen-dining": "Kitchen & Dining"
  };
  
  const pageTitle = titleMap[category] || category.replace("-", " ");
  
  // Filter products
  const products = category === "all" 
    ? ALL_PRODUCTS 
    : ALL_PRODUCTS.filter(p => p.category === category);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-32 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#1A4314] capitalize mb-6">
          {pageTitle}
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          Explore our premium selection of sustainable bamboo products, designed to bring nature's elegance into your everyday life.
        </p>
        <div className="w-24 h-1 bg-[#D4B872] mx-auto mt-8 rounded-full"></div>
      </motion.div>

      {products.length === 0 ? (
        <div className="text-center py-20">
          <h3 className="text-2xl font-bold text-gray-400">No products found in this category.</h3>
        </div>
      ) : (
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-2"
        >
          {products.map((product) => (
            <motion.div 
              key={product.id} 
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-5 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_-8px_rgba(26,67,20,0.15)] transition-all duration-300 group relative flex flex-col h-full"
            >
              {product.oldPrice && (
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="absolute top-5 left-5 bg-[#D4B872]/20 text-[#1A4314] text-xs font-extrabold px-3 py-1 rounded-full z-10 backdrop-blur-sm"
                >
                  Sale
                </motion.div>
              )}
              
              <div className="relative h-64 w-full mb-5 bg-[#F9F6F0] rounded-2xl overflow-hidden flex items-center justify-center group-hover:bg-[#E8F0E6] transition-colors duration-500 shrink-0">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    e.currentTarget.src = "/images/hero.jpeg";
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
              </div>
              
              <div className="space-y-2 flex-grow flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Bamboo Craft</p>
                  <div className="flex items-center gap-1 text-[#D4B872]">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-xs text-gray-600 font-bold ml-1">{product.rating}</span>
                  </div>
                </div>
                
                <h3 className="font-extrabold text-[#2D2D2D] line-clamp-1 text-lg group-hover:text-[#1A4314] transition-colors duration-300">{product.name}</h3>
                
                <div className="flex items-center gap-3 mt-auto pt-3">
                  <span className="text-xl font-black text-[#1A4314]">{product.price}</span>
                  {product.oldPrice && (
                    <span className="text-sm text-gray-400 line-through font-medium">{product.oldPrice}</span>
                  )}
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
      )}
    </div>
  );
}
