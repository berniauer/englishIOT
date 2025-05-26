// HomePage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button'; // Assuming this path is correct
import { Link } from 'react-router-dom';
import { Lightbulb, Zap, Settings, MessageCircle, Cpu, Radio, Rss, Brain, Code } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: delay }
  })
};

const HighlightCard = ({ icon: Icon, title, text, link, delay }) => (
  <motion.div
    className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center h-full"
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    custom={delay}
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="p-3 mb-4 rounded-full bg-primary/10 text-primary">
      <Icon size={32} />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
    <p className="text-muted-foreground text-sm mb-4 flex-grow">{text}</p>
    <Button asChild variant="link" className="mt-auto text-cta hover:text-cta/80">
      <Link to={link}>Learn more</Link>
    </Button>
  </motion.div>
);

const TechItem = ({ icon: Icon, name, delay }) => (
  <motion.div
    className="flex flex-col items-center p-3 bg-secondary/20 rounded-lg"
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    custom={delay}
    viewport={{ once: true, amount: 0.3 }}
  >
    <Icon size={28} className="text-primary mb-1" />
    <span className="text-sm font-medium text-foreground">{name}</span>
  </motion.div>
);

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-16 md:space-y-24 py-8 md:py-12"
    >
      {/* SEO Keywords Meta */}
      <meta name="keywords" content="Smart Home Project, IoT Thesis, Raspberry Pi Project, ZigBee Coordinator, DIY Home Automation, Adam Dolgos" />

      {/* 1. Hero Section */}
      <motion.section
        className="text-center py-12 md:py-16 bg-gradient-to-br from-background to-secondary/10 rounded-xl shadow-sm"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary max-w-3xl mx-auto leading-tight">
          DIY Smart Home: Insights into an IoT Project with Raspberry Pi and ZigBee
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Welcome! This website documents the conception and implementation of a flexible Smart Home system, based on Adam Dolgos' thesis. Discover the world of IoT, ZigBee, and open-source platforms.
        </p>
        <Button asChild size="lg" className="bg-cta hover:bg-cta/90 text-cta-foreground shadow-md hover:shadow-lg transition-shadow">
          <Link to="/about-project">Discover the Project</Link>
        </Button>
      </motion.section>

      {/* 2. Project Overview Section */}
      <motion.section
        className="py-10 md:py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-primary">The Project at its Core</h2>
        <div className="max-w-3xl mx-auto bg-card p-8 rounded-lg shadow-lg">
          <p className="text-muted-foreground text-left md:text-lg leading-relaxed">
            This work realizes a foundational Smart Home concept on a Raspberry Pi, with ZigBee identified as a key technology. A manufacturer-independent ZigBee coordinator (based on CC2531 & Zigbee2MQTT) enables the flexible integration of various devices. Management and control are handled via the open-source platforms Domoticz and Home Assistant. The thesis demonstrates in detail the installation process and practical operation of the system.
          </p>
        </div>
      </motion.section>

      {/* 3. Topic Highlights Section */}
      <motion.section
        className="py-10 md:py-12 bg-secondary/10 rounded-xl shadow-sm"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        custom={0.2}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-primary">What You Will Explore</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-0">
          <HighlightCard icon={Brain} title="IoT Basics" text="Understand the concepts behind the Internet of Things and Smart Homes." link="/iot-basics" delay={0.3}/>
          <HighlightCard icon={Radio} title="ZigBee Technology" text="Learn details about the energy-efficient ZigBee standard." link="/zigbee-detail" delay={0.4}/>
          <HighlightCard icon={Settings} title="Practical Implementation" text="Insights into hardware, software, and configuration." link="/system-implementation" delay={0.5}/>
          <HighlightCard icon={MessageCircle} title="Platform Comparison" text="A comparison of the Smart Home platforms Domoticz and Home Assistant." link="/discussion-results" delay={0.6}/>
        </div>
      </motion.section>

      {/* 4. Core Technologies Section */}
      <motion.section
        className="py-10 md:py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        custom={0.2}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-primary">Core Technologies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-4xl mx-auto px-4 md:px-0">
          <TechItem icon={Cpu} name="Raspberry Pi" delay={0.3} />
          <TechItem icon={Radio} name="ZigBee" delay={0.35} />
          <TechItem icon={Rss} name="MQTT" delay={0.4} />
          <TechItem icon={Lightbulb} name="Domoticz" delay={0.45} />
          <TechItem icon={Zap} name="Home Assistant" delay={0.5} />
          <TechItem icon={Settings} name="CC2531" delay={0.55} />
          <TechItem icon={Code} name="Linux" delay={0.6} />
        </div>
      </motion.section>

      {/* 5. Call-to-Action Section */}
      <motion.section
        className="text-center py-12 md:py-16 bg-gradient-to-tr from-primary to-blue-700 text-primary-foreground rounded-xl shadow-lg" // Assuming primary-foreground is defined
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        custom={0.2}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Interested in Details?</h2>
        <p className="text-lg md:text-xl mb-10 max-w-xl mx-auto opacity-90">
          Dive deeper into the individual chapters or get in touch!
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-md hover:shadow-lg transition-all duration-300">
            <Link to="/system-implementation">All Project Phases</Link>
          </Button>
          {/* Optional: Contact Button, if contact page exists */}
          {/* <Button size="lg" className="bg-cta-alt hover:bg-cta-alt/90 text-cta-alt-foreground shadow-md hover:shadow-lg transition-shadow">
            Contact
          </Button> */}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default HomePage;