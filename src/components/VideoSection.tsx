
import React from "react";
import { Link } from "react-router-dom";

const VideoSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              We help get the word out, where it matters most.
            </h2>
            
            <p className="text-lg leading-relaxed mb-8">
              You don't organize, vote, or talk like it's 2008, <i><strong>so why run your campaign strategy like it is?</strong></i>
            </p>
            
            <p className="text-lg leading-relaxed mb-4">
              Veteran Campaigns brings industry-grade strategy to grassroots causes. We've been on the other side, as candidates, campaign managers, and digital leads. We get what it takes to build a movement, because we've lived it.
            </p>
            
            <p className="text-lg leading-relaxed mb-8">
              We know how to win, and we've done it again and again for our clients. Let's find your winning strategy next.
            </p>
            
            <Link 
              to="/past-work" 
              className="btn-secondary inline-block"
            >
              See our previous work
            </Link>
          </div>
          
          <div className="order-1 lg:order-2">
            <div 
              id="intro-video"
              className="w-full aspect-video bg-[#f5f5f5] rounded-lg flex items-center justify-center overflow-hidden"
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/C3mOVWNJHa8"
                title="Intro Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-sm text-gray-500 mt-3 italic">Our philosophy on the state of campaigns today.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
