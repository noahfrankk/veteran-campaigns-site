
import React from "react";

const MessagingSection: React.FC = () => {
  return (
    <section className="py-20 container-custom">
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          We help you get your messages where it matters most.
        </h2>
        <p className="text-lg leading-relaxed">
          Nobody should be running a political campaign in the 2020s like it's 2008. 
          The old strategy playbook is out, and you need a partner who deeply understands 
          how momentum builds today.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Veteran Campaigns brings industry best practices to your grassroots causes. 
          We've run for office ourselves—and we know what works. We built this firm to 
          help define the future of campaign strategy.
        </p>
      </div>
    </section>
  );
};

export default MessagingSection;
