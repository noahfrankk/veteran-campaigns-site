
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
    <section className="py-24 md:py-36 container-custom">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold leading-tight mb-6">
            Build momentum.<br />
            Shift narratives.<br />
            Win <span className="italic gradient-text">big</span>.
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-[700px]">
            You don't organize, vote, or talk like it's 2008, so why run your campaign like it is?
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-[700px]">
            We connect causes to communities with sharp creative, targeted outreach, and digital-first strategy built for how you drive change today.
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
        <div className="flex justify-center lg:justify-end">
          <HeroImageSlider />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
