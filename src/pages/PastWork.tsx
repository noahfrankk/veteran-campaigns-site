import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Testimonial {
  quote: string;
  author: string;
  position: string;
}

const PastWork: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials: Testimonial[] = [
    {
      quote: "Thoughtful direction, brilliant designers...",
      author: "Ethan Werstler",
      position: "CT HD-52"
    },
    {
      quote: "No better team than Veteran Campaigns...",
      author: "Nick Kapoor",
      position: "CT HD-112"
    },
    {
      quote: "Working with Veteran Campaigns has been a game-changer…",
      author: "Mitchell Marks",
      position: "CT HD-14"
    }
  ];

  // Auto-rotate testimonials every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Check if the URL has a hash and scroll to it after the page loads
  useEffect(() => {
    if (window.location.hash === "#clients") {
      const clientsSection = document.getElementById("clients");
      if (clientsSection) {
        setTimeout(() => {
          clientsSection.scrollIntoView({ behavior: "smooth" });
        }, 500);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section id="clients" className="py-20 container-custom scroll-mt-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Case Studies
          </h1>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {Array(12).fill(0).map((_, index) => (
              <div 
                key={index}
                className="aspect-square bg-gray-100 rounded-md flex items-center justify-center p-4"
              >
                <div className="text-gray-500">Client Logo {index + 1}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 bg-[#f5f5f5]">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-center">
              What Our Clients Say
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Left Side: Details */}
              <div className="bg-white p-8 rounded-lg shadow-subtle">
                <h3 className="text-xl font-semibold mb-4">Proven Results</h3>
                <p className="mb-4">
                  Our clients have experienced measurable success across multiple 
                  campaign cycles, with improved voter engagement and higher conversion rates.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Targeted messaging strategies</li>
                  <li>Data-driven outreach campaigns</li>
                  <li>Compelling visual identities</li>
                  <li>Community-focused engagement</li>
                </ul>
              </div>
              
              {/* Right Side: Testimonial Carousel */}
              <div className="bg-white p-8 rounded-lg shadow-subtle">
                <div className="relative h-full">
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <svg 
                        className="h-10 w-10 text-gray-300 mb-4" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-lg mb-6">
                        {testimonials[activeTestimonial].quote}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">{testimonials[activeTestimonial].author}</p>
                      <p className="text-gray-600">{testimonials[activeTestimonial].position}</p>
                    </div>
                  </div>
                  
                  {/* Navigation Dots */}
                  <div className="absolute bottom-0 left-0 flex space-x-2 mt-4">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTestimonial(index)}
                        className={`w-2 h-2 rounded-full ${
                          activeTestimonial === index ? "bg-primary-dark-blue" : "bg-gray-300"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PastWork;
