import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
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
      <Link to={link}>Mehr erfahren</Link>
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
      {/* SEO Keywords Meta (conceptual - not directly rendered but influences content) */}
      <meta name="keywords" content="Smart Home Abstract, IoT Diplomarbeit, Raspberry Pi Projekt, ZigBee Koordinator" />

      {/* 1. Hero-Bereich */}
      <motion.section 
        className="text-center py-12 md:py-16 bg-gradient-to-br from-background to-secondary/10 rounded-xl shadow-sm"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary max-w-3xl mx-auto leading-tight">
          Smart Home selbst gebaut: Einblicke in ein IoT-Projekt mit Raspberry Pi und ZigBee
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Willkommen! Diese Website dokumentiert die Konzeption und Implementierung eines flexiblen Smart-Home-Systems, basierend auf der Diplomarbeit von Adam Dolgos. Entdecken Sie die Welt des IoT, ZigBee und Open-Source-Plattformen.
        </p>
        <Button asChild size="lg" className="bg-cta hover:bg-cta/90 text-cta-foreground shadow-md hover:shadow-lg transition-shadow">
          <Link to="/about-project">Projekt entdecken</Link>
        </Button>
      </motion.section>

      {/* 2. Sektion: Projekt-Überblick */}
      <motion.section 
        className="py-10 md:py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-primary">Das Projekt im Kern</h2>
        <div className="max-w-3xl mx-auto bg-card p-8 rounded-lg shadow-lg">
          <p className="text-muted-foreground text-left md:text-lg leading-relaxed">
            Diese Arbeit realisiert ein Smart Home Grundkonzept auf einem Raspberry Pi, wobei ZigBee als Schlüsseltechnologie identifiziert wurde. Ein herstellerunabhängiger ZigBee-Koordinator (basierend auf CC2531 & Zigbee2MQTT) ermöglicht die flexible Anbindung diverser Geräte. Die Verwaltung und Steuerung erfolgt über die Open-Source-Plattformen Domoticz und Home Assistant. Die Arbeit demonstriert detailliert den Installationsprozess und den praktischen Betrieb des Systems.
          </p>
        </div>
      </motion.section>

      {/* 3. Sektion: Themen-Highlights */}
      <motion.section 
        className="py-10 md:py-12 bg-secondary/10 rounded-xl shadow-sm"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        custom={0.2}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-primary">Was Sie erwartet</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-0">
          <HighlightCard icon={Brain} title="IoT Grundlagen" text="Verstehen Sie die Konzepte hinter dem Internet der Dinge und Smart Homes." link="/iot-basics" delay={0.3}/>
          <HighlightCard icon={Radio} title="ZigBee Technologie" text="Erfahren Sie Details zum energieeffizienten ZigBee-Standard." link="/zigbee-detail" delay={0.4}/>
          <HighlightCard icon={Settings} title="Praktische Umsetzung" text="Einblicke in Hardware, Software und Konfiguration." link="/system-implementation" delay={0.5}/>
          <HighlightCard icon={MessageCircle} title="Domoticz vs. Home Assistant" text="Ein Vergleich der eingesetzten Smart Home Plattformen." link="/discussion-results" delay={0.6}/>
        </div>
      </motion.section>

      {/* 4. Sektion: Eingesetzte Kerntechnologien */}
      <motion.section 
        className="py-10 md:py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        custom={0.2}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-primary">Kerntechnologien</h2>
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

      {/* 5. Sektion: Call-to-Action */}
      <motion.section 
        className="text-center py-12 md:py-16 bg-gradient-to-tr from-primary to-blue-700 text-primary-foreground rounded-xl shadow-lg"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        custom={0.2}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Interessiert an Details?</h2>
        <p className="text-lg md:text-xl mb-10 max-w-xl mx-auto opacity-90">
          Tauchen Sie tiefer in die einzelnen Kapitel ein oder nehmen Sie Kontakt auf!
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-md hover:shadow-lg transition-all duration-300">
            <Link to="/system-implementation">Alle Projektphasen</Link>
          </Button>
          {/* Optional: Kontakt Button, wenn Kontaktseite existiert */}
          {/* <Button size="lg" className="bg-cta-alt hover:bg-cta-alt/90 text-cta-alt-foreground shadow-md hover:shadow-lg transition-shadow">
            Kontakt
          </Button> */}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default HomePage;