
import React from "react";

const MarqueeSection: React.FC = () => {
  // Array of client logos - updated with new uploads
  const clientLogos = [
    "/lovable-uploads/33494cf3-5303-4f97-bac9-bd3fc412d590.png",
    "/lovable-uploads/c9f3c25a-0fcd-4cc8-849c-4d014e4dbcd8.png",
    "/lovable-uploads/42930263-f146-4382-89e9-8ac188ef3297.png",
    "/lovable-uploads/4e80b0d2-018f-4b68-b95f-3a41c97a84ca.png",
    "/lovable-uploads/050865d1-0286-4f8a-b79e-16a9208d8719.png",
    "/lovable-uploads/055c54c9-bcbf-42c0-b6b6-8c3b534b4581.png",
    "/lovable-uploads/6b90581d-1c49-457a-92fa-e705007045ed.png",
    "/lovable-uploads/92d624da-7828-4abd-897b-2eeac1a5b735.png",
    "/lovable-uploads/e7360643-8bfa-4f9b-ad54-5961a93bf9c9.png",
    "/lovable-uploads/03c932c9-fe8e-4fe7-97a1-a62d168eee68.png",
    "/lovable-uploads/0270074c-159e-464d-8921-c85bd4b009df.png",
    "/lovable-uploads/08e15d17-1e8f-4a27-a233-b0c4e2b2c5fc.png",
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-primary-dark-blue/10">
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
                  className="max-w-[120%] max-h-[120%] object-contain filter"
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
                  className="max-w-[120%] max-h-[120%] object-contain filter"
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
