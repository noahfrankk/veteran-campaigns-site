
import React from "react";

const VideoSection: React.FC = () => {
  return (
    <section className="py-20 container-custom">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          How we work behind the scenes
        </h2>
        <div 
          id="intro-video"
          className="w-full max-w-4xl aspect-video bg-[#f5f5f5] rounded-lg flex items-center justify-center"
        >
          <p className="text-lg text-gray-500">Intro Video Coming Soon</p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
