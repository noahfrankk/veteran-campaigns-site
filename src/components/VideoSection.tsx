
import React from "react";
import { Lightbulb, LineChart, Award } from "lucide-react";

const VideoSection: React.FC = () => {
  return (
    <section className="py-20 container-custom">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            We help you get your messages where it matters most.
          </h2>
          
          <p className="text-lg leading-relaxed mb-8">
            Veteran Campaigns brings industry best practices to your grassroots causes. We've run for office ourselves—and we know what works. We built this firm to help define the future of campaign strategy.
          </p>
        </div>
        
        <div className="order-1 lg:order-2">
          <div 
            id="intro-video"
            className="w-full aspect-video bg-[#f5f5f5] rounded-lg flex items-center justify-center"
          >
            <p className="text-lg text-gray-500">Intro Video Coming Soon</p>
          </div>
          <p className="text-sm text-gray-500 mt-3">Our philosophy on political campaigning today.</p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
