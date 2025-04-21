import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { 
  HoverCard,
  HoverCardTrigger,
  HoverCardContent
} from "@/components/ui/hover-card";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

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

  // All 18 logos with client information
  const clientLogos = [
    // 1. Connecticut Institute for Refugees and Immigrants
    {
      logo: "/lovable-uploads/4f8aacf5-765f-4fe4-af94-6ccc847c9657.png",
      info: {
        name: "Connecticut Institute for Refugees and Immigrants",
        details: "CIRI, Connecticut Institute for Refugees and Immigrants."
      }
    },
    // 2. Harry Rilling
    {
      logo: "/lovable-uploads/3a93f749-731e-4f5e-bd68-d93456272e75.png",
      info: {
        name: "Harry Rilling",
        details: "Harry Rilling for Norwalk Mayor. Fairfield County."
      }
    },
    // 3. Action Network of Darien Democrats (unchanged)
    {
      logo: "/lovable-uploads/4c7023d4-d4b5-4e4b-82e0-955d0b8d670e.png",
      info: {
        name: "ANDD: Action Network of Darien Democrats",
        details: "Action Network of Darien Democrats. Darien, CT."
      }
    },
    // 4. United Way (updated logo)
    {
      logo: "/lovable-uploads/4081bbc5-b0e1-4aad-a282-44a49a111256.png",
      info: {
        name: "United Way",
        details: "United Way of Greater Fairfield County."
      }
    },
    // 5. Center for Food Equity and Economic Development
    {
      logo: "/lovable-uploads/d5c41e95-24f1-4867-87cb-172d160e8846.png",
      info: {
        name: "Center for Food Equity and Economic Development",
        details: "Center for Food Equity and Economic Development. Fairfield County."
      }
    },
    // 6. Wounded Warrior Project
    {
      logo: "/lovable-uploads/a4cf1e40-a8fa-49c0-84ab-a0bdb6105cd0.png",
      info: {
        name: "Wounded Warrior Project",
        details: "Wounded Warrior Project. National advocacy campaign."
      }
    },
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
        name: "Pappas for Senate",
        details: "Pappas for State Senate, CT SD-28. Fairfield County."
      }
    },
    {
      logo: "/lovable-uploads/cfec1c6f-f37c-4fcb-9c87-4c0752f8cafd.png",
      info: {
        name: "Nick Kapoor",
        details: "Kapoor for State Representative, CT HD-112. Fairfield County.",
        highlight: "Special election"
      }
    },
    {
      logo: "/lovable-uploads/fd0fd64b-8598-4f15-9d7c-dc72710dfd6d.png",
      info: {
        name: "Kaplan",
        details: "Kaplan for Congress, CT-4. Fairfield County."
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
        name: "Hultgren",
        details: "Hultgren for State Representative, CT HD-112. Fairfield County."
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

  const navigateToContact = () => {
    navigate('/#contact');
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Our Campaign Success Stories | Veteran Campaigns"
        description="Explore our portfolio of successful political campaigns and clients. See how our strategic messaging and modern design have helped candidates win across the country."
        canonical="/past-work"
        keywords="political campaign portfolio, campaign clients, election success stories, campaign testimonials, political marketing examples, winning campaigns, case studies"
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
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-16">
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
              Your partner in communications strategy.
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Left Side: Details */}
              <div className="bg-white p-8 rounded-lg shadow-subtle">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Proven Results</h3>
                <p className="mb-4">
                  Our clients have experienced measurable success across multiple 
                  campaign cycles, with improved voter engagement and higher conversion rates.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li className="font-semibold">Targeted messaging strategies</li>
                  <li className="font-semibold">Data-driven outreach campaigns</li>
                  <li className="font-semibold">Compelling visual identities</li>
                  <li className="font-semibold">Community-focused engagement</li>
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
                      <p className="font-semibold text-xl gradient-text">{testimonials[activeTestimonial].author}</p>
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
            
            <div className="flex flex-col items-center mt-10">
              <p className="text-center text-gray-700 mb-4">
                Like what you see? We'd love to hear from you.
              </p>
              <button 
                onClick={navigateToContact} 
                className="btn-primary"
                aria-label="Get started with Veteran Campaigns"
              >
                Get Started
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PastWork;
