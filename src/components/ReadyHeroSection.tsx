
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ReadyHeroSectionProps {
  onScrollToNextSection: () => void;
}

const ReadyHeroSection: React.FC<ReadyHeroSectionProps> = ({
  onScrollToNextSection,
}) => {
  // Animation
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden w-full">
      {/* Background image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/lovable-uploads/8f0eec87-7f23-4039-afa3-ba35e8953ce8.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: -1, // Place behind the overlay
        }}
      />
      
      {/* Light blue overlay with 50% opacity */}
      <div 
        className="absolute inset-0 w-full h-full bg-[#D3E4FD]"
        style={{ opacity: 0.5, zIndex: 0 }} 
      />
      
      {/* Content */}
      <div className="container-custom relative z-10 py-12 flex flex-col items-center justify-center">
        <motion.div
          className="w-full max-w-[38rem] md:max-w-[42rem] mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          {/* HERO HEADER, no hanging "win" */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight break-words">
            We build smart, unified communications strategy to reach voters and{" "}
            <span className="gradient-text whitespace-nowrap">win.</span>
          </h1>

          {/* Sub text, no em dash, max width, no background copy */}
          <p className="text-lg md:text-xl mb-12 text-gray-800 leading-relaxed max-w-2xl mx-auto">
            Most campaigns struggle to get their message to the right people, in the right format, at the right time. Veteran Campaigns connects causes to communities with strategy and creative built for how people actually communicate today, not just what worked last cycle.
          </p>
          <Button
            size="lg"
            className="bg-primary-dark-blue text-white px-8 py-7 text-lg h-auto rounded-lg shadow-lg hover:bg-primary-dark-blue/90 transition-all"
            onClick={onScrollToNextSection}
          >
            See how the landscape has changed
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ReadyHeroSection;
