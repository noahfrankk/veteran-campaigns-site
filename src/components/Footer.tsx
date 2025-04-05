
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#1a2a3a] text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Column */}
          <div className="flex flex-col">
            <Link to="/" className="flex items-center hover:no-underline mb-4">
              <img 
                src="/lovable-uploads/60476027-84ab-412e-8147-04c0e852c0c1.png" 
                alt="Veteran Campaigns Logo" 
                className="h-10 w-auto mr-3 brightness-[10]"
              />
              <span className="font-semibold text-white">Veteran Campaigns</span>
            </Link>
            <p className="text-sm text-gray-300">© Veteran Media 2025</p>
          </div>

          {/* Links Column */}
          <div className="flex flex-col space-y-3">
            <Link to="/past-work" className="hover:text-primary-cyan-blue text-gray-200">
              Past Clients
            </Link>
            <a href="#contact" className="hover:text-primary-cyan-blue text-gray-200">
              Get In Touch
            </a>
            <a 
              href="https://www.veteranmedia.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary-cyan-blue text-gray-200"
            >
              Veteran Media
            </a>
            <Link to="/privacy-policy" className="hover:text-primary-cyan-blue text-gray-200">
              Privacy Policy
            </Link>
          </div>

          {/* Address & Social Column */}
          <div className="flex flex-col">
            <address className="not-italic mb-4 text-gray-300">
              Veteran Media LLC<br />
              8 Wright Street, Suite 107<br />
              Westport, CT 06880
            </address>
            
            <p className="text-sm text-gray-400 mb-4">
              Veteran Campaigns is a division of Veteran Media, LLC.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/showcase/veteran-campaigns" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-300 hover:text-primary-cyan-blue"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a 
                href="https://facebook.com/veterancampaigns" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-300 hover:text-primary-cyan-blue"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a 
                href="https://instagram.com/veterancampaigns" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-300 hover:text-primary-cyan-blue"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="https://bsky.app" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Bluesky"
                className="text-gray-300 hover:text-primary-cyan-blue"
              >
                <img 
                  src="/lovable-uploads/6c80a8be-de65-4d5c-afda-5b1fb7f28f41.png" 
                  alt="Bluesky" 
                  className="w-5 h-5 brightness-[10] filter"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
