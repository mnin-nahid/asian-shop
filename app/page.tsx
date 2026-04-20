import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import NoticeBar from "@/components/NoticeBar";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <main className="w-full max-w-[1444px] mx-auto px-4">
      <HeroSection />
      <NoticeBar />
      <ServicesSection />
    </main>
  );
}
