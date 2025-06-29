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
      <meta 
        name="keywords" 
        content="DIY Smart Home, ZigBee Smart Home, Raspberry Pi Home Automation, Open Source Smart Home, Zigbee2MQTT, Domoticz, Home Assistant, IoT Project, Smart Home Thesis, Smart Home with Raspberry Pi"
      />
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
          Explore <Link to="/zigbee-detail">ZigBee technology</Link>, <Link to="/system-implementation">Raspberry Pi configuration</Link>, and automation platforms like <Link to="/discussion-results">Domoticz and Home Assistant</Link>.
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
            <a href="https://www.raspberrypi.com/" target="_blank" rel="noopener noreferrer">
              <TechItem icon={Cpu} name="Raspberry Pi" delay={0.3} />
            </a>
            <a href="https://www.zigbee2mqtt.io/" target="_blank" rel="noopener noreferrer">
              <TechItem icon={Radio} name="ZigBee" delay={0.35} />
            </a>
            <a href="https://mosquitto.org/" target="_blank" rel="noopener noreferrer">
              <TechItem icon={Rss} name="MQTT" delay={0.4} />
            </a>
            <a href="https://www.domoticz.com/" target="_blank" rel="noopener noreferrer">
              <TechItem icon={Lightbulb} name="Domoticz" delay={0.45} />
            </a>
            <a href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer">
              <TechItem icon={Zap} name="Home Assistant" delay={0.5} />
            </a>
            <a href="https://www.ti.com/tool/CC2531EMK" target="_blank" rel="noopener noreferrer">
              <TechItem icon={Settings} name="CC2531" delay={0.55} />
            </a>
            <a href="https://www.kernel.org/" target="_blank" rel="noopener noreferrer">
              <TechItem icon={Code} name="Linux" delay={0.6} />
            </a>
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

      <motion.section
        className="py-10 md:py-12 bg-secondary/10 rounded-xl shadow-sm"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        custom={0.2}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-primary">Podcast Integration</h2>
        <div className="max-w-3xl mx-auto bg-card p-8 rounded-lg shadow-lg">
          <p className="text-muted-foreground text-left md:text-lg leading-relaxed mb-6">
            Explore our podcast series where we discuss the latest trends in Smart Home technology, IoT innovations, and practical tips for DIY enthusiasts. Join us as we interview experts and share insights that can help you on your Smart Home journey.
          </p>
          {/* Podcast Audio Player */}
          <audio controls className="w-full mb-6">
            <source src="https://assets.monica.im/podcast/audio/2025-06-23/monica_podcast_merge_audio/en_US/19aec1a9-9d6f-4e12-8130-ffdbd516f0a4.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <Button asChild variant="link" className="text-cta hover:text-cta/80">
            <a href="https://assets.monica.im/podcast/audio/2025-06-23/monica_podcast_merge_audio/en_US/19aec1a9-9d6f-4e12-8130-ffdbd516f0a4.mp3" target="_blank" rel="noopener noreferrer">
              Listen to the Podcast
            </a>
          </Button>
        </div>
      </motion.section>

       {/* Fake Tweet Section */}
      <motion.section
        className="py-8 md:py-10 flex justify-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        custom={0.3}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-xl w-full bg-card border border-blue-200 rounded-2xl shadow-md p-6 flex flex-col gap-3">
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-block w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center text-xl font-bold text-blue-700">🐦</span>
            <div>
              <span className="font-semibold text-blue-700">SmartHomeBot</span>
              <span className="ml-2 text-muted-foreground text-sm">@smarthome_news · now</span>
            </div>
          </div>
          <div className="text-lg leading-relaxed text-foreground whitespace-pre-line">
            🚀 Building a DIY Smart Home with ZigBee, Raspberry Pi, and open-source power 💡
            <br />
            Domoticz vs. Home Assistant?
            <br />
            Zigbee2MQTT makes it all work.
            <br />
            Open. Secure. Scalable.
            <br />
            🔗 Stay tuned for the full story!
          </div>
          <div className="mt-2 text-blue-600 text-base font-medium">
            #SmartHome #IoT #RaspberryPi #ZigBee #HomeAssistant #Domoticz #OpenSource #Automation
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default HomePage;