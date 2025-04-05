
import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import MessagingSection from "@/components/MessagingSection";
import MarqueeSection from "@/components/MarqueeSection";
import ContactSection from "@/components/ContactSection";
import CorporateClientsSection from "@/components/CorporateClientsSection";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <VideoSection />
        <MessagingSection />
        <MarqueeSection />
        <ContactSection />
        <CorporateClientsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
