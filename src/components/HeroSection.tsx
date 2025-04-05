
import React from "react";

const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-32 container-custom">
      <div className="max-w-[700px]">
        <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold leading-tight mb-6">
          Build momentum. Shift narratives. Win <em className="gradient-text italic">big</em>.
        </h1>
        <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-[700px]">
          Veteran Campaigns connects causes to communities. We equip our clients with 
          winning strategies, compelling messaging, and targeted constituent outreach: 
          empowering campaigns, organizations, and advocates to drive meaningful change.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={scrollToContact}
            className="btn-primary shadow-subtle"
            aria-label="Get in touch with Veteran Campaigns"
          >
            Get In Touch
          </button>
          <a 
            href="/past-work" 
            className="btn-secondary text-center"
            aria-label="View our case studies"
          >
            Case Studies
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
