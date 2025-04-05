
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full h-16 px-8 flex items-center justify-between bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-subtle border-b border-[#eeeeee]" : ""
      }`}
    >
      <div className="flex items-center">
        <Link to="/" className="flex items-center hover:no-underline">
          <div className="w-10 h-10 bg-primary-dark-blue rounded-md flex items-center justify-center text-white font-bold mr-3">
            VC
          </div>
          <span className="font-semibold text-black text-lg">Veteran Campaigns</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6">
        <Link to="/past-work" className="text-[#3c3c3c] hover:text-primary-dark-blue">
          Past Work
        </Link>
        <Link to="/past-work#clients" className="text-[#3c3c3c] hover:text-primary-dark-blue">
          Clients
        </Link>
        <a href="#contact" className="text-[#3c3c3c] hover:text-primary-dark-blue">
          Contact
        </a>
        <Button
          className="bg-primary-cyan-blue hover:bg-primary-cyan-blue/90 text-white h-9 px-4"
        >
          Sign In
        </Button>
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-black" 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {mobileMenuOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md border-b border-[#eeeeee] py-4 px-8 flex flex-col space-y-4 z-50">
          <Link 
            to="/past-work" 
            className="text-[#3c3c3c] hover:text-primary-dark-blue"
            onClick={() => setMobileMenuOpen(false)}
          >
            Past Work
          </Link>
          <Link 
            to="/past-work#clients" 
            className="text-[#3c3c3c] hover:text-primary-dark-blue"
            onClick={() => setMobileMenuOpen(false)}
          >
            Clients
          </Link>
          <a 
            href="#contact" 
            className="text-[#3c3c3c] hover:text-primary-dark-blue"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
          <Button
            className="bg-primary-cyan-blue hover:bg-primary-cyan-blue/90 text-white w-full"
          >
            Sign In
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
