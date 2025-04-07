
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark-blue to-primary-cyan-blue text-white flex flex-col">
      <SEO 
        title="Page Not Found | Veteran Campaigns"
        description="The page you were looking for could not be found."
        canonical="/404"
        keywords="page not found, 404 error, veteran campaigns, missing page"
      />
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-7xl md:text-9xl font-extrabold text-white mb-4">
            404
          </h1>
          <p className="text-2xl md:text-4xl font-bold text-white/90 mb-8">
            We couldn't find what you were looking for.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-primary-cyan-blue hover:bg-primary-cyan-blue/90 text-white px-8 py-3 text-lg"
          >
            <Link to="/">Take Me Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
