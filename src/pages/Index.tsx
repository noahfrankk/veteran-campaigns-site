
import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import MessagingSection from "@/components/MessagingSection";
import MarqueeSection from "@/components/MarqueeSection";
import ContactSection from "@/components/ContactSection";
import CorporateClientsSection from "@/components/CorporateClientsSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Veteran Campaigns | Political Campaign Strategy"
        description="Veteran Campaigns connects causes to communities with sharp creative, targeted outreach, and digital-first strategy that drives change today."
        canonical="/"
        keywords="political campaign strategy, election messaging, campaign experts, digital campaign strategy, political messaging, win elections, voter outreach"
      />
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
