
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <Hero />
      <div className="max-w-[1200px] mx-auto px-6">
        <Features />
        <Stats />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
