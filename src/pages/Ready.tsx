
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target, BarChart3, Megaphone } from "lucide-react";
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription 
} from "@/components/ui/card";

const Ready = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

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
          <section className="py-24 lg:py-32 container-custom">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight">
                Built for campaigns that <span className="gradient-text">don't wait around.</span>
              </h1>
              <h2 className="text-2xl md:text-3xl mb-8 text-gray-700 max-w-3xl">
                Communications move fast. Your strategy should, too.
              </h2>
              <p className="text-xl mb-12 text-gray-600 leading-relaxed max-w-3xl">
                The way people vote, talk, and organize has changed. If your strategy hasn't kept up, it's already showing. Veteran Campaigns helps campaigns meet this moment with creative that lands, digital that's purposeful, and strategy that matches how people actually communicate.
              </p>
              <div className="w-24 h-1 bg-primary-dark-blue mb-16"></div>
            </motion.div>
            
            <motion.div 
              className="relative mt-8 overflow-hidden rounded-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="/lovable-uploads/daf939d5-adbc-44ca-831e-ae3a2083853f.png" 
                alt="Campaign in action" 
                className="w-full h-auto object-cover rounded-xl shadow-lg" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-blue/40 to-transparent rounded-xl"></div>
            </motion.div>
          </section>
          
          {/* SECTION 2: The Landscape */}
          <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
            <div className="container-custom">
              <motion.div 
                className="max-w-4xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
                  What we're seeing on the ground
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                  <div className="space-y-6 text-gray-600">
                    <p className="text-xl leading-relaxed">
                      Too many consultants are still solving for a version of the world that no longer exists. Generic mailers, disjointed outreach, and vendor silos don't reflect how people make decisions or how campaigns win.
                    </p>
                  </div>
                  <div className="space-y-6 text-gray-600">
                    <p className="text-xl leading-relaxed">
                      Voters expect clarity and consistency. Campaigns need messaging that works across platforms, stays aligned, and responds in real time.
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-center my-16">
                  <div className="w-24 h-0.5 bg-gray-300"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div className="p-6 rounded-lg hover:shadow-md transition-shadow">
                    <Zap size={48} className="text-primary-dark-blue mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2">Rapid Response</h3>
                    <p className="text-gray-600">Messaging that keeps pace with the moment</p>
                  </div>
                  <div className="p-6 rounded-lg hover:shadow-md transition-shadow">
                    <Target size={48} className="text-primary-dark-blue mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2">Targeted Outreach</h3>
                    <p className="text-gray-600">Voter-specific strategy that doesn't waste time or budget</p>
                  </div>
                  <div className="p-6 rounded-lg hover:shadow-md transition-shadow">
                    <BarChart3 size={48} className="text-primary-dark-blue mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2">Data-Driven</h3>
                    <p className="text-gray-600">Real data, real direction</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
          
          {/* SECTION 3: Our Approach */}
          <section className="py-20 container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <img 
                    src="/lovable-uploads/a47949c9-3ba7-4d0b-9b73-a5bb95c3deb5.png" 
                    alt="Campaign team at work" 
                    className="rounded-xl shadow-lg" 
                  />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-primary-cyan-blue/20 backdrop-blur-sm z-[-1]"></div>
                  <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-primary-dark-blue/20 backdrop-blur-sm z-[-1]"></div>
                </motion.div>
                
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="space-y-8"
                >
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    We connect <span className="text-primary-dark-blue">causes</span> to <span className="text-primary-dark-blue">communities</span>.
                  </h2>
                  <h3 className="text-2xl text-gray-700">
                    Strategy and execution, working together from day one.
                  </h3>
                  <div className="space-y-6 text-gray-600">
                    <p className="text-lg leading-relaxed">
                      We've worked inside campaigns and advocacy groups. We've managed moments when budgets are tight, timelines are shorter than they should be, and everything rides on whether the message lands.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Veteran Campaigns brings that experience to every engagement. Our work is grounded in audience insight, creative discipline, and partnership that reflects the pace of a real campaign.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* SECTION 4: What We Offer */}
          <section className="py-20 bg-primary-dark-blue text-white">
            <div className="container-custom">
              <motion.div 
                className="max-w-5xl mx-auto text-center mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  Full-service communications with a campaigner's mindset.
                </h2>
                <h3 className="text-xl md:text-2xl mb-12 text-blue-100">
                  Four capabilities, one integrated team.
                </h3>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Digital Communications */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/10 backdrop-blur-sm border-none overflow-hidden h-full">
                    <CardHeader className="relative">
                      <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary-cyan-blue/30 rounded-full blur-xl"></div>
                      <Megaphone className="text-primary-cyan-blue mb-4 h-10 w-10" />
                      <CardTitle className="text-2xl text-white">Digital Communications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-6 text-blue-100">
                        We build digital programs that cut through noise and meet people where they already are. From short-form to search, we help you plan, produce, and place the content that drives engagement.
                      </p>
                      <div className="bg-white/10 p-5 rounded-md">
                        <h4 className="font-medium mb-2 text-white">Wounded Warrior Project</h4>
                        <p className="text-sm text-blue-100">
                          Led digital advertising to support national outreach and issue advocacy. Focused on strategic placement, audience clarity, and message consistency across channels.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                
                {/* Advisory Services */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/10 backdrop-blur-sm border-none overflow-hidden h-full">
                    <CardHeader className="relative">
                      <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary-cyan-blue/30 rounded-full blur-xl"></div>
                      <Target className="text-primary-cyan-blue mb-4 h-10 w-10" />
                      <CardTitle className="text-2xl text-white">Advisory Services</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-6 text-blue-100">
                        We act as your comms partner in the room—helping shape what to say, how to say it, and where it needs to land. That includes planning, messaging, and alignment across functions.
                      </p>
                      <div className="bg-white/10 p-5 rounded-md">
                        <h4 className="font-medium mb-2 text-white">Sarah Keitt, HD-134</h4>
                        <p className="text-sm text-blue-100">
                          Advised on full-cycle communications for a successful campaign to flip a long-held Republican seat. Focused on aligning messaging across digital, field, and earned media.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                
                {/* Direct Mail */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/10 backdrop-blur-sm border-none overflow-hidden h-full">
                    <CardHeader className="relative">
                      <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary-cyan-blue/30 rounded-full blur-xl"></div>
                      <ArrowRight className="text-primary-cyan-blue mb-4 h-10 w-10" />
                      <CardTitle className="text-2xl text-white">Direct Mail</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-6 text-blue-100">
                        Mail should do more than check a box. Ours is designed to persuade, reinforce, and match your campaign's tone and timeline. Clean visuals, sharp writing, clear purpose.
                      </p>
                      <div className="bg-white/10 p-5 rounded-md">
                        <h4 className="font-medium mb-2 text-white">Hubert Delany, CT-144</h4>
                        <p className="text-sm text-blue-100">
                          Helped secure victory in a special election by executing a targeted direct mail strategy focused on persuasion and turnout. Integrated with digital and field plans.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                
                {/* Printed Goods */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/10 backdrop-blur-sm border-none overflow-hidden h-full">
                    <CardHeader className="relative">
                      <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary-cyan-blue/30 rounded-full blur-xl"></div>
                      <BarChart3 className="text-primary-cyan-blue mb-4 h-10 w-10" />
                      <CardTitle className="text-2xl text-white">Printed Goods</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-6 text-blue-100">
                        From field materials to event signage, your print pieces should reflect the identity of your campaign. We design and deliver what your team needs in the format and style that works.
                      </p>
                      <div className="bg-white/10 p-5 rounded-md">
                        <h4 className="font-medium mb-2 text-white">United Way</h4>
                        <p className="text-sm text-blue-100">
                          Designed and produced printed materials for community outreach efforts. Ensured visual alignment with organizational messaging and deployed on a fast timeline.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* SECTION 5: Final Section */}
          <section className="py-24 container-custom">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
                  2026 is different.<br /> 
                  <span className="text-primary-dark-blue">Run a campaign that shows it.</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-600 mb-16">
                  <p className="text-lg leading-relaxed">
                    We've helped candidates break through. We've led digital campaigns at scale. We've built creative that reaches people and communications plans that hold up under pressure.
                  </p>
                  <p className="text-lg leading-relaxed">
                    2026 is a golden opportunity to make your case. Political headwinds are shifting. Voters are paying attention and ready to support a cause they believe in.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Your campaign deserves a partner that understands how to reach them. We're not another line on the vendor list. We're your comms team.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative mx-auto my-20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-dark-blue/10 to-primary-cyan-blue/10 rounded-2xl transform -rotate-1"></div>
                <div className="text-center py-14 px-8 bg-white rounded-2xl border border-primary-dark-blue/20 shadow-lg relative">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-6">Let's talk about what your district needs.</h3>
                  <p className="font-medium text-primary-dark-blue text-xl mb-8">info@veterancampaigns.com</p>
                  <Button 
                    className="bg-primary-dark-blue hover:bg-primary-dark-blue/90 text-white px-10 py-7 h-auto text-xl rounded-lg"
                    onClick={() => window.location.href = "mailto:info@veterancampaigns.com"}
                  >
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="mt-6 text-gray-600">We'll meet you where you are, and help take it from there.</p>
                </div>
              </motion.div>
              
              <div className="text-center text-gray-500 mt-20">
                <p className="text-xl font-medium italic">We connect causes to communities.</p>
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
