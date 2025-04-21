import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  BarChart3, 
  FileText,
  Users,
  Check,
  Tv,
} from "lucide-react";
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription 
} from "@/components/ui/card";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import ReadyHeroSection from "../components/ReadyHeroSection";

const Ready = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const nextSectionRef = useRef<HTMLDivElement>(null);
  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigate = useNavigate();

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#contact");
    }
  };

  return (
    <>
      <SEO
        title="Campaign Communications Strategy | Veteran Campaigns"
        description="Veteran Campaigns connects causes to communities, partnering with campaigns to deliver effective communication across all channels."
        canonical="/ready"
      />
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          <ReadyHeroSection onScrollToNextSection={scrollToNextSection} />

          <section className="py-24 bg-white">
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <motion.div
                  className="flex flex-col justify-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInRight}
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
                    The media landscape has changed. Has your strategy?
                  </h2>

                  <motion.ul className="space-y-6 mb-10" variants={staggerChildren}>
                    <motion.li className="flex items-start" variants={fadeIn}>
                      <div className="bg-primary-dark-blue/10 p-2 rounded-full mr-4">
                        <Check className="h-5 w-5 text-primary-dark-blue" />
                      </div>
                      <div>
                        <span className="block text-xl font-bold text-gray-800">Only 20%</span>
                        <span className="text-gray-600">
                          of TV viewership now comes from broadcast.
                        </span>
                      </div>
                    </motion.li>

                    <motion.li className="flex items-start" variants={fadeIn}>
                      <div className="bg-primary-dark-blue/10 p-2 rounded-full mr-4">
                        <Check className="h-5 w-5 text-primary-dark-blue" />
                      </div>
                      <div>
                        <span className="block text-xl font-bold text-gray-800">Nearly 40%</span>
                        <span className="text-gray-600">
                          of all TV usage now comes from streaming.
                        </span>
                      </div>
                    </motion.li>

                    <motion.li className="flex items-start" variants={fadeIn}>
                      <div className="bg-primary-dark-blue/10 p-2 rounded-full mr-4">
                        <Check className="h-5 w-5 text-primary-dark-blue" />
                      </div>
                      <div>
                        <span className="block text-xl font-bold text-gray-800">Over 85%</span>
                        <span className="text-gray-600">
                          of US adults are regular <strong className="font-bold">YouTube</strong> users.
                        </span>
                      </div>
                    </motion.li>

                    <motion.li className="flex items-start" variants={fadeIn}>
                      <div className="bg-primary-dark-blue/10 p-2 rounded-full mr-4">
                        <Check className="h-5 w-5 text-primary-dark-blue" />
                      </div>
                      <div>
                        <span className="block text-xl font-bold text-gray-800">The majority of people 65+</span>
                        <span className="text-gray-600">
                          use both <strong className="font-bold">YouTube</strong> and <strong className="font-bold">Facebook</strong> today.
                        </span>
                      </div>
                    </motion.li>
                  </motion.ul>

                  <p className="text-lg text-gray-700 mb-8">
                    Voter behavior has changed. The systems people use to communicate, consume information, and make decisions have shifted in lasting ways. We use that understanding to design campaign strategies built on message clarity, audience targeting, and delivery methods that reflect how people engage now.
                  </p>
                </motion.div>

                <motion.div
                  className="relative flex flex-col items-center bg-gray-200 rounded-xl aspect-square justify-center shadow-lg p-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInLeft}
                >
                  <div className="w-full flex justify-center items-center">
                    <iframe
                      width="100%"
                      height="100%"
                      style={{
                        maxWidth: "540px",
                        aspectRatio: "1 / 1",
                        borderRadius: "1rem",
                        background: "#fff",
                        minHeight: "320px",
                        minWidth: "320px",
                      }}
                      src="https://www.youtube.com/embed/C3mOVWNJHa8?autoplay=0"
                      title="The Wilderness - The Voter's Mindset & Why Media Has Changed - YouTube Shorts"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  </div>
                  <p className="mt-4 text-sm italic text-gray-500 text-center w-full">
                    Hear it from our friends on The Wilderness, the media landscape has changed.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-[#F1F0FB]">
            <div className="container-custom">
              <motion.div 
                className="text-center mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  What we offer
                </h2>
                <p className="text-xl text-gray-700">
                  One team. Four integrated capabilities.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <motion.div 
                      className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all cursor-pointer"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={scaleIn}
                      whileHover={{ y: -10, backgroundColor: "rgba(14, 165, 233, 0.05)" }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-primary-dark-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                        <Users className="h-8 w-8 text-primary-dark-blue" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Advisory Services</h3>
                      <p className="text-gray-600">
                        We help you plan, message, and adjust in real time.
                      </p>
                    </motion.div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 p-6">
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Advisory Services</h4>
                      <p className="text-sm text-gray-600">
                        We act as your comms partner in the room helping shape what to say, how to say it, and where it needs to land. That includes planning, messaging, and alignment across functions.
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <motion.div 
                      className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all cursor-pointer"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={scaleIn}
                      whileHover={{ y: -10, backgroundColor: "rgba(14, 165, 233, 0.05)" }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <div className="bg-primary-dark-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                        <Tv className="h-8 w-8 text-primary-dark-blue" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Digital Advertising</h3>
                      <p className="text-gray-600">
                        Full funnel strategy, creative, and execution from search to CTV.
                      </p>
                    </motion.div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 p-6">
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Digital Advertising</h4>
                      <p className="text-sm text-gray-600">
                        We build digital programs that cut through noise and meet people where they already are. From short form to search, we help you plan, produce, and place the content that drives engagement.
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <motion.div 
                      className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all cursor-pointer"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={scaleIn}
                      whileHover={{ y: -10, backgroundColor: "rgba(14, 165, 233, 0.05)" }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <div className="bg-primary-dark-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                        <FileText className="h-8 w-8 text-primary-dark-blue" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Direct Mail</h3>
                      <p className="text-gray-600">
                        Targeted, persuasive, and aligned with your broader message.
                      </p>
                    </motion.div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 p-6">
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Direct Mail</h4>
                      <p className="text-sm text-gray-600">
                        Mail should do more than check a box. Ours is designed to persuade, reinforce, and match your campaigns tone and timeline. Clean visuals, sharp writing, clear purpose.
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <motion.div 
                      className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all cursor-pointer"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={scaleIn}
                      whileHover={{ y: -10, backgroundColor: "rgba(14, 165, 233, 0.05)" }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <div className="bg-primary-dark-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                        <BarChart3 className="h-8 w-8 text-primary-dark-blue" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Printed Goods</h3>
                      <p className="text-gray-600">
                        From signs to canvasser kits, we deliver materials that make an impact.
                      </p>
                    </motion.div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 p-6">
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Printed Goods</h4>
                      <p className="text-sm text-gray-600">
                        From field materials to event signage, your print pieces should reflect the identity of your campaign. We design and deliver what your team needs in the format and style that works.
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </div>
          </section>
          
          <section className="py-24 bg-white">
            <div className="container-custom">
              <motion.div 
                className="text-center mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  Built by campaigners. Informed by{" "}
                  <span className="gradient-text">
                    real world strategy.
                  </span>
                </h2>
                <div className="space-y-6 text-lg text-gray-700">
                  <p>
                    Our team has experience as candidates, campaign managers, communications staff, and field directors. We came together to solve the recurring challenges every election cycle and provide campaigns with the support we always wanted ourselves.
                  </p>
                  <p>
                    In addition to deep campaign backgrounds, our team brings in perspectives and tools from other industries, such as influencer marketing and strategic consulting. We blend public campaign experience with fast, effective methods borrowed from the private sector.
                  </p>
                  <p>
                    With Veteran Campaigns, you get one unified communications system; everything you need is in one place, with results you can measure.
                  </p>
                </div>
              </motion.div>
              
              <div className="bg-primary-dark-blue text-white p-10 rounded-xl shadow-xl relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 text-4xl text-primary-dark-blue">"</div>
                <div className="absolute -bottom-3 -right-3 w-8 h-8 text-4xl text-primary-dark-blue">"</div>
                <blockquote className="text-2xl md:text-3xl font-medium italic leading-relaxed">
                  You do not organize, vote, or talk like it is 2008. So why would your campaign strategy look the same?
                </blockquote>
              </div>
            </div>
          </section>
          
          <section className="py-24 bg-gradient-to-r from-blue-50 to-gray-50">
            <div className="container-custom">
              <motion.div 
                className="text-center mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  <span className="text-gray-700">It's not either or. It's everything </span>
                  <span className="gradient-text">working together.</span>
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Successful campaigns do not choose between direct mail and digital. They combine them to multiply impact. Our campaigns create connected communication systems across every touchpoint.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                <motion.div 
                  className="bg-white p-8 rounded-xl shadow-md relative overflow-hidden group"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute top-0 left-0 h-full w-1 bg-primary-dark-blue"></div>
                  <h3 className="text-xl font-bold mb-3">Unified Messaging</h3>
                  <p className="text-gray-600">
                    Voters should recognize your message across formats. We align your visuals, tone, and calls to action across digital and mail.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="bg-white p-8 rounded-xl shadow-md relative overflow-hidden group"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  <div className="absolute top-0 left-0 h-full w-1 bg-primary-dark-blue"></div>
                  <h3 className="text-xl font-bold mb-3">Smart Sequencing</h3>
                  <p className="text-gray-600">
                    Introduce your campaign via mail, reinforce it online, and re engage on mobile and search. Timed right, these touches build trust and drive action.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="bg-white p-8 rounded-xl shadow-md relative overflow-hidden group"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  <div className="absolute top-0 left-0 h-full w-1 bg-primary-dark-blue"></div>
                  <h3 className="text-xl font-bold mb-3">Data-Backed Strategy</h3>
                  <p className="text-gray-600">
                    Our analytics systems sync across platforms. What we learn from digital informs what we send by mail, and vice versa.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="bg-white p-8 rounded-xl shadow-md relative overflow-hidden group"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                >
                  <div className="absolute top-0 left-0 h-full w-1 bg-primary-dark-blue"></div>
                  <h3 className="text-xl font-bold mb-3">Modern Personalization</h3>
                  <p className="text-gray-600">
                    We tailor content to audiences. Whether it's an address or an Instagram ad, we speak to what voters care about.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="bg-white p-8 rounded-xl shadow-md relative overflow-hidden group md:col-span-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                >
                  <div className="absolute top-0 left-0 h-full w-1 bg-primary-dark-blue"></div>
                  <h3 className="text-xl font-bold mb-3">Multi-Channel Efficiency</h3>
                  <p className="text-gray-600">
                    With broadcast shrinking and cable down double digits year over year, your dollars go further when your strategy works across formats.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
          
          <section className="py-24 bg-gray-50">
            <div className="container-custom">
              <motion.div 
                className="text-center mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Proof of our impact
                </h2>
              </motion.div>
              
              <div className="space-y-16">

                <motion.div 
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                >
                  <div className="flex items-center justify-center">
                    <div className="relative w-full max-w-lg">
                      <img
                        src="/lovable-uploads/26ee1184-4928-4e5c-8154-9e6daef30920.png"
                        alt="Wounded Warrior Project"
                        className="w-full h-auto rounded-2xl border shadow-lg object-cover"
                        style={{ background: "#222" }}
                      />
                    </div>
                  </div>
                  <div>
                    <Card className="border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle className="text-2xl md:text-3xl">Wounded Warrior Project</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 leading-relaxed">
                          Executed a national campaign to pressure lawmakers on urgent legislation; our team continues to work as a trusted Wounded Warrior Project partner.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                >
                  <div className="order-2 lg:order-1">
                    <Card className="border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle className="text-2xl md:text-3xl">Sarah Keitt for State Rep</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 leading-relaxed">
                          Ran a fully integrated campaign combining digital, mail, video, and web strategy to deliver an upset victory by 14 votes in 2022! Building on that momentum, we expanded support and secured a win by over 4 points in 2024.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="bg-gray-300 rounded-xl overflow-hidden aspect-video flex items-center justify-center order-1 lg:order-2">
                    <img
                      src="/lovable-uploads/dc58e06b-be08-498d-ad62-e180cd7d3005.png"
                      alt="Sarah Keitt Campaign"
                      className="object-cover w-full h-full"
                      style={{ minHeight: "200px" }}
                    />
                  </div>
                </motion.div>
                
                <motion.div 
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                >
                  <div className="bg-gray-300 rounded-xl overflow-hidden aspect-video flex items-center justify-center">
                    <img
                      src="/lovable-uploads/b84edc2e-210a-419a-9635-57dd90d557c6.png"
                      alt="ANDD"
                      className="object-cover w-full h-full"
                      style={{ minHeight: "200px" }}
                    />
                  </div>
                  <div>
                    <Card className="border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle className="text-2xl md:text-3xl">ANDD</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 leading-relaxed">
                          Led a full rebrand of ANDD, then built the digital infrastructure and strategy to activate their base, engage the community, and drive local change.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          
          <section className="py-24 bg-white">
            <div className="container-custom">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-16 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                Ready to help your message{" "}
                <span className="gradient-text">
                  break through.
                </span>
              </motion.h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInRight}
                >
                  <div className="space-y-10">
                    <div className="flex items-center space-x-6">
                      <div className="bg-gray-200 rounded-full w-24 h-24 flex items-center justify-center overflow-hidden">
                        <img
                          src="/lovable-uploads/8a549a46-b634-4607-a8fd-f49a9a81c016.png"
                          alt="Noah Frank headshot"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Noah Frank</h3>
                        <p className="text-gray-600 mb-2">Head of Projects</p>
                        <a 
                          href="mailto:noah@veterancampaigns.com" 
                          className="text-primary-dark-blue hover:underline flex items-center"
                        >
                          ✉️ noah@veterancampaigns.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                      <div className="bg-gray-200 rounded-full w-24 h-24 flex items-center justify-center overflow-hidden">
                        <img
                          src="/lovable-uploads/f1b2771f-e653-45c2-a9bb-db04472d455a.png"
                          alt="Andrew Gausepohl headshot"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Andrew Gausepohl</h3>
                        <p className="text-gray-600 mb-2">Head of Digital</p>
                        <a 
                          href="mailto:andrew@veterancampaigns.com" 
                          className="text-primary-dark-blue hover:underline flex items-center"
                        >
                          ✉️ andrew@veterancampaigns.com
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInLeft}
                  className="bg-primary-dark-blue/5 p-10 rounded-2xl"
                >
                  <p className="text-gray-700 text-lg mb-10 leading-relaxed">
                    Veteran Campaigns works with a limited number of campaigns each cycle so we can move fast and stay focused. If you're running in a competitive district and need a comms partner who understands how to win now, get in touch.
                  </p>
                  
                  <div className="flex flex-col space-y-4">
                    <Button 
                      className="flex items-center bg-white border border-gray-300 hover:bg-gray-50 text-primary-dark-blue shadow-sm rounded-lg"
                      onClick={() => navigate("/past-work")}
                    >
                      <FileText className="mr-2 h-5 w-5" />
                      See more examples of our work
                    </Button>
                    
                    <Button 
                      className="flex items-center bg-primary-dark-blue text-white hover:bg-primary-dark-blue/90 shadow-sm rounded-lg"
                      onClick={handleContactClick}
                    >
                      <span className="mr-2">✉️</span>
                      Send us a message
                    </Button>
                  </div>
                </motion.div>
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
