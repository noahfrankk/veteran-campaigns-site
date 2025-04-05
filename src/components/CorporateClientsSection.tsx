
import React from "react";

const CorporateClientsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-dark-blue to-primary-cyan-blue relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}></div>
      </div>
      
      <div className="container-custom relative z-10 text-center">
        <h2 className="text-lg md:text-xl font-medium mb-6 text-white inline-block mx-auto">
          For corporate clients, NGOs, and non-profits, visit our parent brand Veteran Media for more.
        </h2>
        
        <a 
          href="https://www.veteranmedia.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block ml-4 bg-white text-primary-dark-blue py-2 px-6 rounded-md font-semibold hover:bg-white/90 transition-colors shadow-sm"
          aria-label="Learn more about Veteran Media"
        >
          Learn more
        </a>
      </div>
    </section>
  );
};

export default CorporateClientsSection;
