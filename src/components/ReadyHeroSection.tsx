
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ReadyHeroSectionProps {
  onScrollToNextSection: () => void;
}

const ReadyHeroSection: React.FC<ReadyHeroSectionProps> = ({ onScrollToNextSection }) => {
  // Animation
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary-dark-blue/10 to-blue-100">
      <div className="container-custom relative z-10 py-20 flex flex-col items-center justify-center">
        <motion.div 
          className="w-full max-w-2xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            We build smart, unified communications
            <br className="hidden md:inline"/>
            strategy to reach voters and{" "}
            <span className="gradient-text">win</span>.
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-800 leading-relaxed max-w-2xl mx-auto">
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
