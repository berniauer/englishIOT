import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Layers, Network, Cpu, Home, Radio, Wifi, Bluetooth } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay }
  })
};

const listItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay }
  })
};

const ListItem = ({ children, delay, icon: Icon = CheckCircle }) => (
  <motion.li
    className="flex items-start space-x-3 text-muted-foreground"
    variants={listItemVariants}
    custom={delay}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
  >
    <Icon className="h-5 w-5 text-cta-alt flex-shrink-0 mt-1" />
    <span>{children}</span>
  </motion.li>
);

const SectionCard = ({ title, children, delay, seoKeywords }) => (
  <motion.section
    variants={sectionVariants}
    custom={delay}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="bg-card p-6 md:p-8 rounded-xl shadow-lg mb-10 md:mb-12"
  >
    {seoKeywords && <meta name="keywords" content={seoKeywords} />}
    <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary">{title}</h2>
    <div className="space-y-4 text-lg leading-relaxed">
      {children}
    </div>
  </motion.section>
);

const IoTBasicsPage = () => {
  return (
    <motion.div
      className="py-8 md:py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-10 md:mb-16 text-primary text-center"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        Das Fundament: Internet der Dinge (IoT) und Smart Home Konzepte
      </motion.h1>

      <SectionCard title="Was ist das Internet der Dinge (IoT)?" delay={0.1} seoKeywords="Definition Internet der Dinge, IoT einfach erklärt, IoT Grundlagen">
        <p className="text-muted-foreground">Das Internet der Dinge (IoT) beschreibt ein Netzwerk physischer Objekte – „Dinge“ –, die mit Sensoren, Software und anderen Technologien ausgestattet sind, um Daten mit anderen Geräten und Systemen über das Internet zu verbinden und auszutauschen.</p>
        <p className="font-medium text-foreground mt-4 mb-2">Kernaspekte des IoT:</p>
        <ul className="space-y-3">
          <ListItem delay={0.15}><strong>Eindeutige Identifizierbarkeit:</strong> Jedes Objekt im IoT ist eindeutig adressierbar.</ListItem>
          <ListItem delay={0.2}><strong>Konnektivität:</strong> Objekte kommunizieren über verschiedene Netzwerktechnologien.</ListItem>
          <ListItem delay={0.25}><strong>Sensorik & Aktorik:</strong> Sensoren erfassen Umgebungsdaten, Aktoren führen Aktionen aus.</ListItem>
          <ListItem delay={0.3}><strong>Datenverarbeitung:</strong> Gesammelte Daten werden verarbeitet, analysiert und für Entscheidungen genutzt.</ListItem>
          <ListItem delay={0.35}><strong>Interaktion:</strong> Nahtlose Verbindung zwischen der physischen und der digitalen Welt.</ListItem>
        </ul>
      </SectionCard>

      <SectionCard title="Von Maschine-zu-Maschine (M2M) zum Internet der Dinge" delay={0.2}>
        <p className="text-muted-foreground">Die Maschine-zu-Maschine (M2M) Kommunikation kann als ein Vorläufer des IoT betrachtet werden. Während M2M-Systeme oft in geschlossenen, proprietären Netzwerken operierten und auf spezifische Anwendungsfälle zugeschnitten waren, erweitert das IoT dieses Konzept signifikant:</p>
        <ul className="space-y-3 mt-4">
          <ListItem delay={0.25}><strong>M2M:</strong> Häufig Punkt-zu-Punkt-Verbindungen, begrenzte Skalierbarkeit, oft unidirektionale Datenübertragung.</ListItem>
          <ListItem delay={0.3}><strong>IoT:</strong> Basiert auf Internet-Protokollen und Cloud-Architekturen, fördert Interoperabilität und offene Standards, ermöglicht bidirektionale Kommunikation und eine deutlich höhere Skalierbarkeit.</ListItem>
        </ul>
      </SectionCard>

      <SectionCard title="Der Schichtaufbau eines IoT-Systems" delay={0.3}>
        <p className="text-muted-foreground">IoT-Systeme lassen sich typischerweise in verschiedene funktionale Schichten unterteilen. Eine gängige Darstellung ist die 3-Schichten-Architektur:</p>
        <ul className="space-y-3 mt-4">
          <ListItem delay={0.35} icon={Layers}><strong>Perception Layer (Wahrnehmungsschicht/Sensorenschicht):</strong> Erfasst Daten aus der physischen Umgebung mittels Sensoren (z.B. Temperatur, Bewegung, Licht) und digitalisiert diese.</ListItem>
          <ListItem delay={0.4} icon={Network}><strong>Network Layer (Netzwerkschicht):</strong> Verantwortlich für die sichere und zuverlässige Übertragung der gesammelten Daten zu Verarbeitungsplattformen. Nutzt Technologien wie WLAN, Mobilfunk, ZigBee, Bluetooth, LoRaWAN etc.</ListItem>
          <ListItem delay={0.45} icon={Cpu}><strong>Application Layer (Anwendungsschicht):</strong> Verarbeitet die Daten, stellt sie dem Nutzer über spezifische Anwendungen (z.B. eine Smart Home App, ein Dashboard) zur Verfügung und ermöglicht die Steuerung von Aktoren.</ListItem>
        </ul>
        <p className="text-muted-foreground mt-4">Moderne Modelle erweitern dies oft zu einer 5-Schichten-Architektur (z.B. Objects, Object Abstraction, Service Management, Application, Business Layer) für eine detailliertere Betrachtung.</p>
      </SectionCard>

      <SectionCard title="Intelligentes Wohnen: Das Konzept des Smart Homes" delay={0.4} seoKeywords="Smart Home Erklärung, Intelligentes Zuhause, Smart Home Komponenten, Hausautomatisierung Grundlagen">
        <p className="text-muted-foreground">Ein Smart Home, oder intelligentes Zuhause, nutzt die Vernetzung von Haushaltsgeräten und -systemen, um den Wohnkomfort zu erhöhen, die Energieeffizienz zu verbessern und die Sicherheit zu steigern. Von der automatischen Licht- und Heizungssteuerung über intelligente Sicherheitssysteme bis hin zur Sprachsteuerung – die Möglichkeiten sind vielfältig.</p>
        <p className="font-medium text-foreground mt-4 mb-2">Typische Komponenten eines Smart Homes:</p>
        <ul className="space-y-3">
          <ListItem delay={0.45} icon={Home}><strong>Zentrale Steuereinheit (Controller/Hub):</strong> Das Gehirn des Systems, sammelt Daten und koordiniert Geräte. Im Rahmen dieses Projekts ein Raspberry Pi.</ListItem>
          <ListItem delay={0.5}><strong>Sensoren:</strong> Erfassen Zustände (z.B. Temperatur, Öffnung von Fenstern, Rauch).</ListItem>
          <ListItem delay={0.55}><strong>Aktoren:</strong> Führen Befehle aus (z.B. Schalten von Lichtern, Verstellen von Thermostaten).</ListItem>
          <ListItem delay={0.6}><strong>Kommunikationsnetzwerk:</strong> Verbindet alle Komponenten (z.B. WLAN, ZigBee).</ListItem>
          <ListItem delay={0.65}><strong>Benutzerschnittstellen:</strong> Apps, Web-Interfaces oder Sprachassistenten zur Steuerung und Überwachung.</ListItem>
        </ul>
      </SectionCard>

      <SectionCard title="Die Sprache der smarten Geräte" delay={0.5}>
        <p className="text-muted-foreground">Für die Kommunikation zwischen den Geräten im IoT und Smart Home sind verschiedene Protokolle im Einsatz:</p>
        <ul className="space-y-3 mt-4">
          <ListItem delay={0.55}><strong>HTTP (HyperText Transfer Protocol):</strong> Weit verbreitet im Web, oft für die Anbindung an Cloud-Dienste oder für RESTful APIs in Smart Home Systemen genutzt.</ListItem>
          <ListItem delay={0.6}><strong>MQTT (Message Queuing Telemetry Transport):</strong> Ein sehr leichtgewichtetes Publish-Subscribe-Protokoll, ideal für Geräte mit begrenzten Ressourcen und unzuverlässige Netzwerke. Sehr populär im IoT-Bereich.</ListItem>
          <ListItem delay={0.65} icon={Radio}><strong>ZigBee & Z-Wave:</strong> Speziell für die Hausautomatisierung entwickelte Funkstandards mit Fokus auf geringen Energieverbrauch und Mesh-Netzwerkfähigkeiten.</ListItem>
          <ListItem delay={0.7} icon={Bluetooth}><strong>Bluetooth (insbesondere Bluetooth Low Energy - BLE):</strong> Geeignet für die Kommunikation über kurze Distanzen bei sehr geringem Energieverbrauch.</ListItem>
        </ul>
      </SectionCard>

    </motion.div>
  );
};

export default IoTBasicsPage;