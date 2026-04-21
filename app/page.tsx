import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import NoticeBar from "@/components/NoticeBar";
import ServicesSection from "@/components/ServicesSection";
import SpecialCategories from "@/components/SpecialCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import StoreBanner from "@/components/StoreBanner";
import OfferSection from "@/components/OfferSection";

export default function Home() {
  return (
    <main className="w-full max-w-[1444px] mx-auto px-4">
      <HeroSection />
      <NoticeBar />
      <ServicesSection />
      <SpecialCategories />
      <StoreBanner />
      <FeaturedProducts />
      <OfferSection />
    </main>
  );
}
