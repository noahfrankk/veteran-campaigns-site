
import React from "react";

const MarqueeSection: React.FC = () => {
  // Updated client logos - six new ones interspersed and a few old ones removed for variety
  const clientLogos = [
    "/lovable-uploads/4f8aacf5-765f-4fe4-af94-6ccc847c9657.png", // Feed
    "/lovable-uploads/3a93f749-731e-4f5e-bd68-d93456272e75.png", // CT Institute for Refugees and Immigrants
    "/lovable-uploads/4c7023d4-d4b5-4e4b-82e0-955d0b8d670e.png", // ANDD
    "/lovable-uploads/897181c5-3f3c-4661-87b3-02d9f6a99ebd.png", // Harry Rilling
    "/lovable-uploads/d5c41e95-24f1-4867-87cb-172d160e8846.png", // Wounded Warrior Project
    "/lovable-uploads/a4cf1e40-a8fa-49c0-84ab-a0bdb6105cd0.png", // United Way
    "/lovable-uploads/027375c9-7928-4b48-9d29-6e4067c238f4.png",
    "/lovable-uploads/ffe6f323-ca9e-4a84-910a-fb58cb12f534.png",
    "/lovable-uploads/30e0140e-030a-41ee-8d89-6c8989da5f5e.png",
    "/lovable-uploads/32dafc41-0f1a-47ad-83b5-97a09ebfcde5.png",
    // "/lovable-uploads/d13494e4-5ac1-403d-aee9-93fa569b37a0.png", // Removed for variety
    "/lovable-uploads/cfec1c6f-f37c-4fcb-9c87-4c0752f8cafd.png",
    // "/lovable-uploads/fd0fd64b-8598-4f15-9d7c-dc72710dfd6d.png", // Removed for variety
    "/lovable-uploads/3dcbff83-a5c7-4f92-93c6-7927bac2d41d.png",
    "/lovable-uploads/41c2a24e-7b14-482e-9c7c-9bcfecbf8998.png",
    "/lovable-uploads/a4111b7a-e8f8-4da3-9427-6ee2acec1b4a.png",
    // "/lovable-uploads/fa7fdb58-3ed8-48e2-a68e-216f7fdd42bc.png", // Removed for variety
    "/lovable-uploads/e067a27e-85d0-4044-b748-1277c38297ce.png",
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gray-100">
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
                className="min-w-[200px] h-20 mx-4 flex items-center justify-center"
              >
                <img 
                  src={logo} 
                  alt={`Client ${index + 1}`}
                  className="max-w-[180%] max-h-[180%] object-contain"
                />
              </div>
            ))}
            {/* Duplicate logos for infinite scrolling effect */}
            {clientLogos.map((logo, index) => (
              <div 
                key={`duplicate-${index}`} 
                className="min-w-[200px] h-20 mx-4 flex items-center justify-center"
              >
                <img 
                  src={logo} 
                  alt={`Client ${index + 1}`}
                  className="max-w-[180%] max-h-[180%] object-contain"
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

