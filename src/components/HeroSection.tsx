
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
    <section className="py-40 md:py-48 container-custom relative overflow-hidden">
      {/* Blue gradient elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-cyan-blue/20 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary-dark-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-40 w-80 h-80 bg-primary-cyan-blue/15 rounded-full blur-3xl"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold leading-tight mb-6">
            Build momentum.<br />
            Shift narratives.<br />
            Win <span className="italic gradient-text">big</span><span className="italic gradient-text">.</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-[700px]">
            You don't organize, vote, or talk like it's 2008, so <i><strong>why run a strategy like it is?</strong></i> <strong>Veteran Campaigns</strong> connects causes to communities with sharp creative, targeted outreach, and digital-first strategy that drives change today.
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
        <div className="flex justify-center lg:justify-end">
          <HeroImageSlider />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
