
import React from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription 
} from "@/components/ui/card";

const Ready = () => {
  return (
    <>
      <SEO 
        title="What We Can Do For You | Veteran Campaigns" 
        description="Veteran Campaigns helps candidates meet this moment with creative that's sharp, digital that's intentional, and strategy that fits the way people actually communicate."
        canonical="/ready"
      />
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          {/* SECTION 1: Hero */}
          <section className="py-20 lg:py-24 container-custom">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                Built for campaigns that won't settle.
              </h1>
              <h2 className="text-xl md:text-2xl mb-6 text-gray-700">
                Communications today move fast. So should your strategy.
              </h2>
              <p className="text-lg mb-8 text-gray-600 leading-relaxed">
                The way people vote, talk, and organize has changed. If your strategy hasn't, you're already behind. Veteran Campaigns helps candidates meet this moment with creative that's sharp, digital that's intentional, and strategy that fits the way people actually communicate.
              </p>
            </div>
          </section>
          
          {/* SECTION 2: The Landscape */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
                  The old playbook doesn't work anymore.
                </h2>
                <div className="space-y-6 text-gray-600">
                  <p className="text-lg leading-relaxed">
                    Too many consultants are still solving for a version of the world that no longer exists. Generic mailers, disjointed outreach, and vendor silos don't reflect how people make decisions or how campaigns win.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Today, voters expect clarity and consistency. Campaigns need communications that move across platforms, stay on message, and adapt in real time.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* SECTION 3: Our Approach */}
          <section className="py-16 container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                We connect causes to communities.
              </h2>
              <h3 className="text-xl md:text-2xl mb-6 text-gray-700">
                Strategy and execution, aligned from day one.
              </h3>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  We've worked inside campaigns and advocacy groups. We've managed moments when budgets are tight, timelines are shorter than they should be, and everything rides on whether the message lands.
                </p>
                <p className="text-lg leading-relaxed">
                  Veteran Campaigns brings that experience to every engagement. Our work is grounded in audience insight, creative discipline, and partnership that reflects the pace of a real campaign.
                </p>
              </div>
            </div>
          </section>
          
          {/* SECTION 4: What We Offer */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-center">
                  Full-service communications with a campaigner's mindset.
                </h2>
                <h3 className="text-xl md:text-2xl mb-12 text-gray-700 text-center">
                  Four capabilities, one integrated team.
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Digital Communications */}
                  <Card className="border-2 shadow-md">
                    <CardHeader>
                      <CardTitle className="text-2xl text-primary-dark-blue">Digital Communications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-6 text-gray-600">
                        We build digital programs that cut through noise and meet people where they already are. From short-form to search, we help you plan, produce, and place the content that drives engagement.
                      </p>
                      <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
                        <h4 className="font-medium mb-2">Wounded Warrior Project</h4>
                        <p className="text-sm text-gray-600">
                          Led digital advertising to support national outreach and issue advocacy. Focused on strategic placement, audience clarity, and message consistency across channels.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Advisory Services */}
                  <Card className="border-2 shadow-md">
                    <CardHeader>
                      <CardTitle className="text-2xl text-primary-dark-blue">Advisory Services</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-6 text-gray-600">
                        We act as your comms partner in the room—helping shape what to say, how to say it, and where it needs to land. That includes planning, messaging, and alignment across functions.
                      </p>
                      <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
                        <h4 className="font-medium mb-2">Sarah Keitt, HD-134</h4>
                        <p className="text-sm text-gray-600">
                          Advised on full-cycle communications for a successful campaign to flip a long-held Republican seat. Focused on aligning messaging across digital, field, and earned media.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Direct Mail */}
                  <Card className="border-2 shadow-md">
                    <CardHeader>
                      <CardTitle className="text-2xl text-primary-dark-blue">Direct Mail</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-6 text-gray-600">
                        Mail should do more than check a box. Ours is designed to persuade, reinforce, and match your campaign's tone and timeline. Clean visuals, sharp writing, clear purpose.
                      </p>
                      <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
                        <h4 className="font-medium mb-2">Hubert Delany, CT-144</h4>
                        <p className="text-sm text-gray-600">
                          Helped secure victory in a special election by executing a targeted direct mail strategy focused on persuasion and turnout. Integrated with digital and field plans.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Printed Goods */}
                  <Card className="border-2 shadow-md">
                    <CardHeader>
                      <CardTitle className="text-2xl text-primary-dark-blue">Printed Goods</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-6 text-gray-600">
                        From field materials to event signage, your print pieces should reflect the identity of your campaign. We design and deliver what your team needs in the format and style that works.
                      </p>
                      <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
                        <h4 className="font-medium mb-2">United Way</h4>
                        <p className="text-sm text-gray-600">
                          Designed and produced printed materials for community outreach efforts. Ensured visual alignment with organizational messaging and deployed on a fast timeline.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
          
          {/* SECTION 5: Final Section */}
          <section className="py-20 container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
                This is a pivotal cycle. Run a campaign that reflects it.
              </h2>
              <div className="space-y-6 text-gray-600 mb-12">
                <p className="text-lg leading-relaxed">
                  We've helped candidates break through. We've led digital campaigns at scale. We've built creative that reaches people and communications plans that hold up under pressure.
                </p>
                <p className="text-lg leading-relaxed">
                  2026 is a golden opportunity to make your case. Political headwinds are shifting. Voters are paying attention and ready to support a cause they believe in. Your campaign deserves a partner that understands how to reach them.
                </p>
                <p className="text-lg leading-relaxed">
                  We don't offer a menu of tactics. We offer a team that can think, build, and execute alongside yours.
                </p>
              </div>
              
              <div className="text-center py-10 px-6 bg-blue-50 rounded-xl border border-blue-100 mb-10">
                <h3 className="text-xl md:text-2xl font-semibold mb-4">Let's talk about what your district needs.</h3>
                <p className="font-medium text-primary-dark-blue mb-6">info@veterancampaigns.com</p>
                <Button 
                  className="bg-primary-dark-blue hover:bg-primary-dark-blue/90 text-white px-8 py-6 h-auto text-lg"
                  onClick={() => window.location.href = "mailto:info@veterancampaigns.com"}
                >
                  Contact Us
                </Button>
              </div>
              
              <div className="text-center text-gray-500 mt-16">
                <p className="text-lg font-medium italic">We connect causes to communities.</p>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Ready;
