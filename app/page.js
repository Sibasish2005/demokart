import Hero from "@/components/Hero";
import NewCollections from "@/components/NewCollections";
import BestSellers from "@/components/BestSellers";
import NewArrivals from "@/components/NewArrivals";
import Image from "next/image";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import BottomBanner from "@/components/BottomBanner";

export default function Home() {
  return (
    <main className="min-h-screen pt-8">
      <Hero />
      <NewCollections />
      <BestSellers />
      <NewArrivals />
      <BottomBanner />
      <Newsletter />
    </main>
  );
}
