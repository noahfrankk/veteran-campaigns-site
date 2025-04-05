
import React from "react";

const CtaBlock: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="container-custom text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Are you a campaign? An advocate? A changemaker?
        </h2>
        <p className="text-lg mb-8">
          We'd love to work with you. Let us know what you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={scrollToContact}
            className="btn-primary"
            aria-label="Get in touch with us"
          >
            Get In Touch
          </button>
          <a 
            href="https://www.veteranmedia.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary"
            aria-label="Visit Veteran Media website"
          >
            Visit Veteran Media
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaBlock;
