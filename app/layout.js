import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata = {
  title: "Novocart - Sustainable Bamboo Craft",
  description: "Elevate your living space with our handcrafted, eco-friendly bamboo essentials. Perfect blend of nature and modern design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-[#F9F6F0] text-[#2D2D2D]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
