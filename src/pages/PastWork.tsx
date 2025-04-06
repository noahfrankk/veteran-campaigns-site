
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { 
  HoverCard,
  HoverCardTrigger,
  HoverCardContent
} from "@/components/ui/hover-card";

interface Testimonial {
  quote: string;
  author: string;
  position: string;
}

interface ClientInfo {
  name: string;
  details: string;
  highlight?: string;
}

const PastWork: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials: Testimonial[] = [
    {
      quote: "Thoughtful direction, brilliant designers, and a strategic approach to our campaign messaging made Veteran Campaigns the perfect partner for our team.",
      author: "Ethan Werstler",
      position: "CT HD-52"
    },
    {
      quote: "No better team than Veteran Campaigns to create a powerful message and visual identity that cuts through the noise and resonates with voters.",
      author: "Nick Kapoor",
      position: "CT HD-112"
    },
    {
      quote: "Working with Veteran Campaigns has been a game-changer for our outreach efforts. Their expertise in digital strategy and voter engagement is unmatched.",
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

  // Array of client logos with detailed information
  const clientLogos = [
    {
      logo: "/lovable-uploads/027375c9-7928-4b48-9d29-6e4067c238f4.png",
      info: {
        name: "King for State Rep",
        details: "King for State Representative, CT HD-14. Hartford County."
      }
    },
    {
      logo: "/lovable-uploads/ffe6f323-ca9e-4a84-910a-fb58cb12f534.png",
      info: {
        name: "Ethan Werstler for State Rep",
        details: "Werstler for State Representative, CT HD-52. Tolland, Windham Counties."
      }
    },
    {
      logo: "/lovable-uploads/30e0140e-030a-41ee-8d89-6c8989da5f5e.png",
      info: {
        name: "Jennifer Leeper",
        details: "Leeper for State Representative, CT HD-132. Fairfield County.",
        highlight: "Special election"
      }
    },
    {
      logo: "/lovable-uploads/32dafc41-0f1a-47ad-83b5-97a09ebfcde5.png",
      info: {
        name: "Sarah Keitt",
        details: "Keitt for CT, CT HD-134. Fairfield County.",
        highlight: "Flipped seat"
      }
    },
    {
      logo: "/lovable-uploads/d13494e4-5ac1-403d-aee9-93fa569b37a0.png",
      info: {
        name: "Kathy Caulfield",
        details: "Kathy Caulfield for Probate Judge. Fairfield County."
      }
    },
    {
      logo: "/lovable-uploads/cfec1c6f-f37c-4fcb-9c87-4c0752f8cafd.png", 
      info: {
        name: "Nick Kapoor",
        details: "Kapoor for State Representative, CT HD-112. Fairfield County."
      }
    },
    {
      logo: "/lovable-uploads/fd0fd64b-8598-4f15-9d7c-dc72710dfd6d.png",
      info: {
        name: "Steinberg",
        details: "Steinberg for State Representative, CT HD-136. Fairfield County."
      }
    },
    {
      logo: "/lovable-uploads/3dcbff83-a5c7-4f92-93c6-7927bac2d41d.png",
      info: {
        name: "Tim Gavin",
        details: "Gavin for State Senate, CT SD-28. Fairfield County."
      }
    },
    {
      logo: "/lovable-uploads/41c2a24e-7b14-482e-9c7c-9bcfecbf8998.png",
      info: {
        name: "Delany",
        details: "Hubert for CT, CT HD-144. Fairfield County.",
        highlight: "Special election"
      }
    },
    {
      logo: "/lovable-uploads/a4111b7a-e8f8-4da3-9427-6ee2acec1b4a.png",
      info: {
        name: "Volpe",
        details: "Volpe for State Representative, CT HD-134. Fairfield County."
      }
    },
    {
      logo: "/lovable-uploads/fa7fdb58-3ed8-48e2-a68e-216f7fdd42bc.png",
      info: {
        name: "Harriman-Stites",
        details: "Harriman-Stites for State Representative, CT HD-106. Fairfield County."
      }
    },
    {
      logo: "/lovable-uploads/e067a27e-85d0-4044-b748-1277c38297ce.png",
      info: {
        name: "Tesoro",
        details: "Tesoro for State Representative, CT HD-123. Fairfield County."
      }
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Our Campaign Success Stories | Veteran Campaigns"
        description="Explore our portfolio of successful political campaigns and clients. See how our strategic messaging and modern design have helped candidates win across the country."
        canonical="/past-work"
        keywords="political campaign portfolio, campaign clients, election success stories, campaign testimonials, political marketing examples, winning campaigns"
      />
      <Header />
      <main>
        <section id="clients" className="py-20 container-custom scroll-mt-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Past Clients
          </h1>
          
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            We've worked with campaigns of all sizes. Click around to see some of the key races we've helped with.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {clientLogos.map((client, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  <div className="aspect-square bg-white rounded-md flex items-center justify-center p-4 transition-all duration-300 hover:scale-110 cursor-pointer">
                    <img 
                      src={client.logo} 
                      alt={`${client.info.name} Logo`} 
                      className="max-w-[85%] max-h-[85%] object-contain"
                    />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-white p-4 shadow-lg rounded-md border border-gray-200">
                  <div className="flex flex-col gap-2">
                    <img 
                      src={client.logo} 
                      alt={`${client.info.name} Logo`} 
                      className="max-w-[60%] max-h-[60px] object-contain mb-2"
                    />
                    <p className="text-sm text-gray-700">
                      {client.info.details}
                    </p>
                    {client.info.highlight && (
                      <p className="text-sm font-bold text-primary-dark-blue">
                        {client.info.highlight}
                      </p>
                    )}
                  </div>
                </HoverCardContent>
              </HoverCard>
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
                <div className="relative flex flex-col justify-between h-full">
                  <div>
                    <svg 
                      className="h-10 w-10 text-gray-300 mb-4" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-lg mb-10">
                      {testimonials[activeTestimonial].quote}
                    </p>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="text-right">
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
