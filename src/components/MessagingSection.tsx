
import React from "react";
import { Target, Zap, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const StrategyBlock = ({ 
  title, 
  description, 
  icon: Icon 
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType 
}) => {
  return (
    <div className="p-6 rounded-lg border border-gray-100 shadow-subtle bg-white hover:bg-primary-cyan-blue/10 transition-colors duration-300 h-full flex flex-col">
      <div className="mb-4 text-primary-cyan-blue">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-[#3c3c3c] leading-relaxed">{description}</p>
    </div>
  );
};

const MessagingSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-center">
          We deliver for our clients.
        </h2>
        
        <p className="text-center text-lg mb-8 max-w-2xl mx-auto">
          Read more about how our work stands out from the competition and why we've earned the trust of countless campaigns and industry leaders.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StrategyBlock
            title="Targeted Outreach"
            description="We build tailored outreach strategies that meet each of your audiences where they are. Whether it's online, in their communities, or in their mailboxes, we focus your efforts where they'll make the biggest impact."
            icon={Target}
          />
          <StrategyBlock
            title="Campaign Innovation"
            description="We don't recycle outdated tactics—we adapt to how people actually communicate today. That means staying ahead of trends, using the right tools for the right audiences, and helping you navigate an ever-changing landscape without losing focus."
            icon={Zap}
          />
          <StrategyBlock
            title="Strategy + Execution"
            description="We do more than just build smart strategies: we help carry them out. From digital to mail, video to print, we execute on time and with your goals in mind. We've been candidates, managers, and organizers ourselves. That's why we show up like partners; we do what it takes to win."
            icon={BarChart}
          />
        </div>
      </div>
    </section>
  );
};

export default MessagingSection;
