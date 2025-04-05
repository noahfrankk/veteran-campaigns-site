
import React from "react";
import { Lightbulb, LineChart, Award } from "lucide-react";

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
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
          Working with Veteran Campaigns
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StrategyBlock
            title="Build momentum."
            description="We craft campaigns that start strong and accelerate, building genuine community interest and involvement that translates into measurable results."
            icon={Lightbulb}
          />
          <StrategyBlock
            title="Shift narratives."
            description="Our messaging strategies transform public perception, creating compelling stories that resonate with your audience and advance your cause."
            icon={LineChart}
          />
          <StrategyBlock
            title="Win big."
            description="We deliver campaigns designed for decisive victories, not just participation. Our strategies focus on meaningful outcomes that create lasting change."
            icon={Award}
          />
        </div>
      </div>
    </section>
  );
};

export default MessagingSection;
