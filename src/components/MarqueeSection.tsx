
import React from "react";
import { Link } from "react-router-dom";

const MarqueeSection: React.FC = () => {
  // Array of placeholder client logos
  const clientLogos = Array(10).fill(0).map((_, i) => i + 1);

  return (
    <section className="py-20 container-custom">
      <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
        Who we've helped
      </h2>

      <div className="relative overflow-hidden">
        <div className="flex animate-marquee">
          {clientLogos.map((logo, index) => (
            <div 
              key={index} 
              className="min-w-[140px] h-16 mx-4 bg-gray-100 rounded-md flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-200"
            >
              Client {logo}
            </div>
          ))}
          {/* Duplicate logos for infinite scrolling effect */}
          {clientLogos.map((logo, index) => (
            <div 
              key={`duplicate-${index}`} 
              className="min-w-[140px] h-16 mx-4 bg-gray-100 rounded-md flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-200"
            >
              Client {logo}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <Link 
          to="/past-work" 
          className="btn-secondary"
          aria-label="Learn more about our past work"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default MarqueeSection;
