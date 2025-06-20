
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
      
      <div className="container-custom relative z-10 text-center flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-left">
          <h2 className="text-lg md:text-xl font-medium mb-2 text-white max-w-2xl">
            For corporate clients, NGOs, and non-profits, visit our parent brand Veteran Media for more.
          </h2>
        </div>
        
        <a 
          href="https://veteranmedia.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-transparent text-white border border-white py-3 px-8 rounded-md font-semibold hover:bg-white hover:text-primary-dark-blue transition-colors duration-300"
        >
          Visit Veteran Media
        </a>
      </div>
    </section>
  );
};

export default CorporateClientsSection;
