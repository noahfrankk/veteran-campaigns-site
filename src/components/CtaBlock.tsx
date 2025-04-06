
import React from "react";

const CtaBlock: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          We deliver for our clients.
        </h2>
        <p className="text-center text-lg mb-12">
          Read more about how our work stands out from the competition and why we've earned the trust of countless campaigns and industry leaders.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Targeted Outreach</h3>
            <p className="text-gray-700">
              We build tailored outreach strategies that meet each of your audiences where they are. Whether it's online, in their communities, or in their mailboxes, we focus your efforts where they'll make the biggest impact.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Campaign Innovation</h3>
            <p className="text-gray-700">
              We don't recycle outdated tactics—we adapt to how people actually communicate today. That means staying ahead of trends, using the right tools for the right audiences, and helping you navigate an ever-changing landscape without losing focus.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Strategy + Execution</h3>
            <p className="text-gray-700">
              We do more than just build smart strategies: we help carry them out. From digital to mail, video to print, we execute on time and with your goals in mind. We've been candidates, managers, and organizers ourselves. That's why we show up like partners; we do what it takes to win.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBlock;
