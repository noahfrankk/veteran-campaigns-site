
import React from "react";

const MarqueeSection: React.FC = () => {
  // Array of client logos
  const clientLogos = [
    "/lovable-uploads/17fb8b2e-400a-469d-9c36-d2dc9097c8a1.png",
    "/lovable-uploads/41e8b3a2-5896-4846-bbc8-7fce84445ad7.png",
    "/lovable-uploads/05403e95-4ce0-4741-89f1-86fdc721b9e4.png",
    "/lovable-uploads/7b947215-8f55-4a9f-92be-d0b31f432174.png",
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-primary-dark-blue/5">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
          Trusted by those we've helped.
        </h2>
        
        <p className="text-center text-lg mb-10">
          Ready to add your name to the list?
        </p>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {clientLogos.map((logo, index) => (
              <div 
                key={index} 
                className="min-w-[200px] h-20 mx-4 bg-white shadow-subtle rounded-md flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-200"
              >
                <img 
                  src={logo} 
                  alt={`Client ${index + 1}`}
                  className="max-w-[80%] max-h-[80%] object-contain filter grayscale"
                />
              </div>
            ))}
            {/* Duplicate logos for infinite scrolling effect */}
            {clientLogos.map((logo, index) => (
              <div 
                key={`duplicate-${index}`} 
                className="min-w-[200px] h-20 mx-4 bg-white shadow-subtle rounded-md flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-200"
              >
                <img 
                  src={logo} 
                  alt={`Client ${index + 1}`}
                  className="max-w-[80%] max-h-[80%] object-contain filter grayscale"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button 
            onClick={scrollToContact} 
            className="btn-primary"
            aria-label="Get started with Veteran Campaigns"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
