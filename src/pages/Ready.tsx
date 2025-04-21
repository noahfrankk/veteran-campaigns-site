import React, { useRef } from "react";
import { Link } from "react-router-dom";
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
  // Animation variants
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

  // SCROLL: Ref to the next section
  const nextSectionRef = useRef<HTMLDivElement>(null);
  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
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
          {/* SECTION 1: Hero */}
          <ReadyHeroSection onScrollToNextSection={scrollToNextSection} />

          {/* SECTION 2: Context */}
          <section ref={nextSectionRef} className="py-24 bg-white">
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
                    The media landscape has changed. Have your consultants?
                  </h2>
                  
                  <motion.ul 
                    className="space-y-6 mb-10"
                    variants={staggerChildren}
                  >
                    <motion.li className="flex items-start" variants={fadeIn}>
                      <div className="bg-primary-dark-blue/10 p-2 rounded-full mr-4">
                        <Check className="h-5 w-5 text-primary-dark-blue" />
                      </div>
                      <div>
                        <span className="block text-xl font-bold text-gray-800">Only 20%</span>
                        <span className="text-gray-600">of TV viewership now comes from broadcast.</span>
                      </div>
                    </motion.li>
                    
                    <motion.li className="flex items-start" variants={fadeIn}>
                      <div className="bg-primary-dark-blue/10 p-2 rounded-full mr-4">
                        <Check className="h-5 w-5 text-primary-dark-blue" />
                      </div>
                      <div>
                        <span className="block text-xl font-bold text-gray-800">Cable viewership</span>
                        <span className="text-gray-600">dropped <strong>12.5%</strong> year over year.</span>
                      </div>
                    </motion.li>
                    
                    <motion.li className="flex items-start" variants={fadeIn}>
                      <div className="bg-primary-dark-blue/10 p-2 rounded-full mr-4">
                        <Check className="h-5 w-5 text-primary-dark-blue" />
                      </div>
                      <div>
                        <span className="block text-xl font-bold text-gray-800">Streaming</span>
                        <span className="text-gray-600">now represents <strong>nearly 40%</strong> of all TV usage.</span>
                      </div>
                    </motion.li>
                    
                    <motion.li className="flex items-start" variants={fadeIn}>
                      <div className="bg-primary-dark-blue/10 p-2 rounded-full mr-4">
                        <Check className="h-5 w-5 text-primary-dark-blue" />
                      </div>
                      <div>
                        <span className="block text-xl font-bold text-gray-800">Major providers</span>
                        <span className="text-gray-600">like Comcast and Charter lost <strong>743,000 subscribers</strong> in one quarter.</span>
                      </div>
                    </motion.li>
                  </motion.ul>
                  
                  <p className="text-lg text-gray-700 mb-8">
                    Your message is only as effective as where—and how—it's delivered. We help campaigns cut through outdated tactics and reach voters where they are.
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className="text-primary-dark-blue border-primary-dark-blue/30 hover:bg-primary-dark-blue/5 w-fit"
                  >
                    Watch the video
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
                
                <motion.div 
                  className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center shadow-lg"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInLeft}
                >
                  <div className="text-gray-400 flex flex-col items-center">
                    <ArrowRight className="h-16 w-16 mb-4" />
                    <span className="text-lg">[Video placeholder: autoplay muted with play icon overlay]</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* SECTION 3: Problems Campaigns Face */}
          <section className="py-24 bg-gray-50">
            <div className="container-custom">
              <motion.div 
                className="text-center mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Why most campaigns fall short
                </h2>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div 
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-primary-dark-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Users className="h-8 w-8 text-primary-dark-blue" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Disconnected strategy</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Too many campaigns rely on a patchwork of vendors. Your digital, mail, and creative consultants operate in silos—and it shows. Fees stack up, messaging fragments, and decisions often reflect vendor incentives, not voter outcomes.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  <div className="bg-primary-dark-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <FileText className="h-8 w-8 text-primary-dark-blue" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Legacy tactics</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Political strategy too often relies on past wins. But voter behavior and media usage have shifted dramatically. You need more than a historic playbook—you need new systems built for now.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  <div className="bg-primary-dark-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <BarChart3 className="h-8 w-8 text-primary-dark-blue" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Siloed thinking</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Campaigns often restart from scratch, with no transfer of knowledge across cycles. We bring in tested systems from modern marketing and communications to close that gap and keep your team on track.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* SECTION 4: How We Help */}
          <section className="py-24 bg-white">
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInRight}
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                    Built by campaigners. Informed by real-world strategy.
                  </h2>
                  <div className="space-y-6 text-lg text-gray-700">
                    <p>
                      We've worked as candidates, campaign managers, comms staff, field directors, and more. After a decade of experience—and frustration with the same structural issues—we formed Veteran Campaigns.
                    </p>
                    <p>
                      We also bring in tools and thinking from adjacent industries. From influencer marketing to strategic consulting, our team combines campaign experience with private-sector speed.
                    </p>
                    <p>
                      With us, your communications strategy becomes one system: unified, trackable, and purpose-built.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInLeft}
                >
                  <div className="bg-primary-dark-blue text-white p-10 rounded-xl shadow-xl relative">
                    <div className="absolute -top-3 -left-3 w-8 h-8 text-4xl text-primary-dark-blue">"</div>
                    <div className="absolute -bottom-3 -right-3 w-8 h-8 text-4xl text-primary-dark-blue">"</div>
                    <blockquote className="text-2xl md:text-3xl font-medium italic leading-relaxed">
                      You don't organize, vote, or talk like it's 2008. So why would your campaign strategy look like it does?
                    </blockquote>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* SECTION 5: Integrating Mail + Digital */}
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
                  It's not either-or. It's everything working together.
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Successful campaigns don't choose between direct mail and digital—they combine them to multiply impact. Our campaigns create connected communication systems across every touchpoint.
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
                    Introduce your campaign via mail, reinforce it online, and re-engage on mobile and search. Timed right, these touches build trust and drive action.
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
                    With broadcast shrinking and cable down double digits year-over-year, your dollars go further when your strategy works across formats.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* SECTION 6: Service Offerings */}
          <section className="py-24 bg-white">
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
                        <ArrowRight className="h-8 w-8 text-primary-dark-blue" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Digital Communications</h3>
                      <p className="text-gray-600">
                        Full-funnel strategy and creative—from social to search to CTV.
                      </p>
                    </motion.div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 p-6">
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Digital Communications</h4>
                      <p className="text-sm text-gray-600">
                        We build digital programs that cut through noise and meet people where they already are. From short-form to search, we help you plan, produce, and place the content that drives engagement.
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
                        We act as your comms partner in the room—helping shape what to say, how to say it, and where it needs to land. That includes planning, messaging, and alignment across functions.
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
                        Mail should do more than check a box. Ours is designed to persuade, reinforce, and match your campaign's tone and timeline. Clean visuals, sharp writing, clear purpose.
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
                        From signs to canvasser kits—we design materials that last.
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
          
          {/* SECTION 7: Case Studies */}
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
                  Proof in the field
                </h2>
              </motion.div>
              
              <div className="space-y-16">
                {/* Case Study 1 */}
                <motion.div 
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                >
                  <div className="bg-gray-300 rounded-xl overflow-hidden aspect-video flex items-center justify-center">
                    <span className="text-gray-600 text-lg">[Case study image placeholder]</span>
                  </div>
                  <div>
                    <Card className="border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle className="text-2xl md:text-3xl">Wounded Warrior Project</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 leading-relaxed">
                          Built and executed a national advocacy campaign to support federal legislation. Our team developed creative, placed CTV and digital ads, and advised on stakeholder engagement across key states.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
                
                {/* Case Study 2 */}
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
                          Helped flip one of CT's most competitive seats in 2022 by 50 votes. Ran an integrated communications program across digital, mail, web, and video. Maintained and grew the seat with another win in 2024.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="bg-gray-300 rounded-xl overflow-hidden aspect-video flex items-center justify-center order-1 lg:order-2">
                    <span className="text-gray-600 text-lg">[Case study image placeholder]</span>
                  </div>
                </motion.div>
                
                {/* Case Study 3 */}
                <motion.div 
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                >
                  <div className="bg-gray-300 rounded-xl overflow-hidden aspect-video flex items-center justify-center">
                    <span className="text-gray-600 text-lg">[Case study image placeholder]</span>
                  </div>
                  <div>
                    <Card className="border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle className="text-2xl md:text-3xl">United Way of Greater Fairfield County</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 leading-relaxed">
                          Designed and deployed a community-wide communications strategy. From CTV ad production to digital targeting and creative support, we helped United Way connect their message to the people who needed it most.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* SECTION 8: CTA + Contact */}
          <section className="py-24 bg-white">
            <div className="container-custom">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-16 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                We're ready to help your message break through
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
                      <div className="bg-gray-200 rounded-full w-24 h-24 flex items-center justify-center">
                        <span className="text-gray-500">[Photo]</span>
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
                      <div className="bg-gray-200 rounded-full w-24 h-24 flex items-center justify-center">
                        <span className="text-gray-500">[Photo]</span>
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
                    Veteran Campaigns works with a limited number of campaigns each cycle so we can move fast and stay focused. If you're running in a competitive district and need a comms partner who understands how to win now—get in touch.
                  </p>
                  
                  <div className="flex flex-col space-y-4">
                    <Button 
                      className="flex items-center bg-white border border-gray-300 hover:bg-gray-50 text-primary-dark-blue shadow-sm rounded-lg"
                    >
                      <FileText className="mr-2 h-5 w-5" /> 
                      Download our capabilities brochure
                    </Button>
                    
                    <Link 
                      to="/past-work" 
                      className="flex items-center justify-center p-3 text-primary-dark-blue hover:underline"
                    >
                      <ArrowRight className="mr-2 h-5 w-5" /> 
                      Explore more case studies
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Final CTA */}
          <section className="py-16 bg-primary-dark-blue/10">
            <div className="container-custom text-center">
              <motion.div 
                className="max-w-3xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold mb-6">Let's talk about what your district needs.</h2>
                <a 
                  href="mailto:info@veterancampaigns.com"
                  className="text-2xl text-primary-dark-blue font-medium mb-8 block hover:underline"
                >
                  info@veterancampaigns.com
                </a>
                <Button 
                  size="lg" 
                  className="bg-primary-dark-blue text-white px-8 py-7 text-lg h-auto rounded-lg shadow-lg hover:bg-primary-dark-blue/90 transition-all"
                  onClick={() => window.location.href = "mailto:info@veterancampaigns.com"}
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="mt-6 text-gray-700">We'll meet you where you are, and help take it from there.</p>
              </motion.div>
            </div>
          </section>
        </main>
        
        <footer className="bg-white py-8 border-t border-gray-200">
          <div className="container-custom text-center">
            <p className="text-xl text-gray-600 font-medium italic mb-4">We connect causes to communities.</p>
            <p className="text-sm text-gray-500">© Veteran Media 2025 | 8 Wright Street, Suite 107, Westport, CT</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Ready;
