
import React from "react";
import HeroImageSlider from "./HeroImageSlider";

const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Main gradient background that spans full width */}
      <div className="absolute inset-0 w-full bg-gradient-to-r from-white via-[#E2E8F3] to-white z-[-20]"></div>
      
      {/* Subtle flowing gradient overlay */}
      <div className="absolute inset-0 w-full bg-[linear-gradient(109.6deg,rgba(223,234,247,0.6)_11.2%,rgba(244,248,252,0.6)_91.1%)] z-[-15]"></div>
      
      {/* Container for content */}
      <div className="container-custom relative">
        {/* Decorative gradient elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-primary-cyan-blue/20 to-primary-dark-blue/30 rounded-full blur-xl -z-10 transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute top-20 right-32 w-[200px] h-[200px] bg-gradient-to-r from-primary-cyan-blue/30 to-primary-dark-blue/20 rounded-full blur-lg -z-10"></div>
        <div className="absolute top-40 right-64 w-[120px] h-[120px] bg-gradient-to-tl from-primary-cyan-blue/40 to-transparent rounded-full blur-md -z-10"></div>
        
        {/* Additional blue gradient elements */}
        <div className="absolute top-20 left-0 w-[150px] h-[150px] bg-gradient-to-tr from-primary-dark-blue/10 to-primary-cyan-blue/20 rounded-full blur-lg -z-10"></div>
        <div className="absolute bottom-10 right-10 w-[180px] h-[180px] bg-gradient-to-bl from-primary-cyan-blue/15 to-primary-dark-blue/25 rounded-full blur-xl -z-10"></div>
        <div className="absolute bottom-40 left-64 w-[100px] h-[100px] bg-gradient-to-r from-primary-dark-blue/20 to-transparent rounded-full blur-md -z-10"></div>
        
        {/* Flow-like gradient animation (horizontal) */}
        <div className="absolute top-1/3 left-0 right-0 h-[200px] bg-gradient-to-r from-primary-dark-blue/5 via-primary-cyan-blue/10 to-white/5 blur-3xl -z-10"></div>
        
        {/* Flow-like gradient animation (vertical) */}
        <div className="absolute top-0 bottom-0 w-[300px] left-1/4 bg-gradient-to-b from-primary-cyan-blue/5 via-white/5 to-primary-dark-blue/10 blur-3xl -z-10"></div>
        
        {/* Megaphone graphic in top right - improved positioning and z-index */}
        <div className="absolute top-[-50px] right-[-80px] md:top-[-100px] md:right-[-120px] w-[350px] h-[350px] md:w-[500px] md:h-[500px] transform -translate-x-1/4 translate-y-1/4 opacity-30 -z-10">
          <img 
            src="/lovable-uploads/c4555be3-3fb4-49e2-b718-10ac4c70b5c0.png" 
            alt="Megaphone graphic" 
            className="w-full h-full object-contain"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold leading-tight mb-6">
              Build momentum.<br />
              Shift narratives.<br />
              Win <span className="italic gradient-text">big</span><span className="italic gradient-text">.</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-[700px]">
              Veteran Campaigns connects causes to communities with sharp creative, targeted outreach, and digital-first strategy that gets results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="btn-primary shadow-subtle w-full sm:w-auto sm:px-10"
                aria-label="Get in touch with Veteran Campaigns"
              >
                Get In Touch
              </button>
              <a 
                href="/past-work" 
                className="btn-secondary text-center w-full sm:w-auto"
                aria-label="View our previous work"
              >
                Case Studies
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end relative">
            {/* Additional decorative elements */}
            <div className="absolute w-[150px] h-[150px] bg-gradient-to-br from-primary-dark-blue/10 to-primary-cyan-blue/20 rounded-full blur-lg -z-10 -bottom-10 -left-10"></div>
            
            <HeroImageSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
