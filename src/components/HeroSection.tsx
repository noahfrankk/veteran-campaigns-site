
import React from "react";
import { Link } from "react-router-dom";
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
      <div className="absolute inset-0 w-full bg-gradient-to-r from-white via-[#E2E8F3] to-white z-[-5]"></div>
      <div className="absolute inset-0 w-full bg-[linear-gradient(109.6deg,rgba(223,234,247,0.8)_11.2%,rgba(244,248,252,0.8)_91.1%)] z-[-4]"></div>
      <div className="absolute top-1/4 left-0 right-0 h-[300px] bg-gradient-to-r from-primary-dark-blue/10 via-primary-cyan-blue/15 to-white/10 blur-3xl z-[-3]"></div>
      <div className="absolute top-0 bottom-0 left-1/3 w-[400px] bg-gradient-to-b from-primary-cyan-blue/10 via-white/5 to-primary-dark-blue/15 blur-3xl z-[-3]"></div>
      <div className="container-custom relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-primary-cyan-blue/15 to-primary-dark-blue/20 rounded-full blur-xl z-[1] transform translate-x-1/4 -translate-y-1/4 animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-20 right-32 w-[200px] h-[200px] bg-gradient-to-r from-primary-cyan-blue/20 to-primary-dark-blue/15 rounded-full blur-lg z-[1] animate-[pulse_12s_ease-in-out_infinite]" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-40 right-64 w-[120px] h-[120px] bg-gradient-to-tl from-primary-cyan-blue/25 to-transparent rounded-full blur-md z-[1] animate-[pulse_10s_ease-in-out_infinite]" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-60 right-20 w-[150px] h-[150px] bg-gradient-to-tr from-primary-dark-blue/10 to-primary-cyan-blue/15 rounded-full blur-lg z-[1] animate-[pulse_15s_ease-in-out_infinite]" style={{ animationDelay: "3s" }}></div>
        <div className="absolute bottom-10 right-10 w-[180px] h-[180px] bg-gradient-to-bl from-primary-cyan-blue/12.5 to-primary-dark-blue/17.5 rounded-full blur-xl z-[1] animate-[pulse_9s_ease-in-out_infinite]" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute bottom-40 right-64 w-[100px] h-[100px] bg-gradient-to-r from-primary-dark-blue/15 to-transparent rounded-full blur-md z-[1] animate-[pulse_11s_ease-in-out_infinite]" style={{ animationDelay: "4s" }}></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
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
              <Link 
                to="/past-work"
                className="btn-secondary text-center w-full sm:w-auto"
                aria-label="View Past Work"
              >
                Past Work
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end relative z-20">
            <div className="absolute w-[200px] h-[200px] bg-gradient-to-br from-primary-dark-blue/10 to-primary-cyan-blue/15 rounded-full blur-lg -z-10 -bottom-10 -left-10 animate-[pulse_14s_ease-in-out_infinite]" style={{ animationDelay: "2.5s" }}></div>
            <HeroImageSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
