
import React from "react";
import { Link } from "react-router-dom";

const VideoSection: React.FC = () => {
  return (
    <section className="py-20 container-custom bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            You don't organize, vote, or talk like it's 2008, so why run your campaign strategy like it is?
          </h2>
          
          <p className="text-lg leading-relaxed mb-8">
            Veteran Campaigns brings industry-grade strategy to grassroots causes. We've been on the other side, as candidates, campaign managers, and digital leads. Our team understands what it takes to build a movement, because we've lived it.
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
            className="w-full aspect-video bg-[#f5f5f5] rounded-lg flex items-center justify-center"
          >
            <p className="text-lg text-gray-500">Intro Video Coming Soon</p>
          </div>
          <p className="text-sm text-gray-500 mt-3 italic">Our philosophy on the state of campaigns today.</p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
