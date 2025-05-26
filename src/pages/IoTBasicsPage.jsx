// IoTBasicsPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Added Link for internal navigation
import { CheckCircle, Layers, Network, Cpu, Home, Radio, Wifi, Bluetooth, Info } from 'lucide-react'; // Added Info icon

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
        The Foundation: Internet of Things (IoT) and Smart Home Concepts
      </motion.h1>

      <SectionCard title="What is the Internet of Things (IoT)?" delay={0.1} seoKeywords="Internet of Things definition, IoT explained, IoT basics, IoT fundamentals, IoT core aspects">
        <p className="text-muted-foreground">The Internet of Things (IoT) describes the revolution of interconnectedness: Physical objects – so-called "things" – are connected to the internet. This enables them to independently collect data, exchange it with each other and with central systems, and perform actions based on it. From household appliances and vehicles to industrial machinery, objects can become intelligent.</p>
        <p className="font-medium text-foreground mt-4 mb-2">Core Aspects of IoT:</p>
        <ul className="space-y-3">
          <ListItem delay={0.15}><strong>Unique Identifiability:</strong> Every object in the IoT is uniquely addressable.</ListItem>
          <ListItem delay={0.2}><strong>Connectivity:</strong> Objects communicate via various network technologies.</ListItem>
          <ListItem delay={0.25}><strong>Sensing & Actuation:</strong> Sensors capture environmental data; actuators perform actions.</ListItem>
          <ListItem delay={0.3}><strong>Data Processing:</strong> Collected data is processed, analyzed, and used for decision-making.</ListItem>
          <ListItem delay={0.35}><strong>Interaction:</strong> Seamless connection between the physical and digital worlds.</ListItem>
        </ul>
      </SectionCard>

      <SectionCard title="From Machine-to-Machine (M2M) to the Internet of Things" delay={0.2} seoKeywords="M2M vs IoT, Evolution of Device Communication, Machine to Machine IoT">
        <p className="text-muted-foreground">Machine-to-Machine (M2M) communication can be considered a precursor to IoT. While M2M systems often operated in closed, proprietary networks tailored to specific use cases, IoT significantly expands this concept:</p>
        <ul className="space-y-3 mt-4">
          <ListItem delay={0.25}><strong>M2M:</strong> Often point-to-point connections, limited scalability, frequently unidirectional data transmission.</ListItem>
          <ListItem delay={0.3}><strong>IoT:</strong> Based on internet protocols and cloud architectures, promotes interoperability and open standards, enables bidirectional communication, and offers significantly higher scalability.</ListItem>
        </ul>
      </SectionCard>

      <SectionCard title="Fundamental IoT Architecture" delay={0.3} seoKeywords="IoT Architecture, IoT Layers, 3-Layer IoT Architecture, 5-Layer IoT Architecture">
        <p className="text-muted-foreground">IoT systems can typically be divided into various functional layers. A common representation is the 3-layer architecture:</p>
        <ul className="space-y-3 mt-4">
          <ListItem delay={0.35} icon={Layers}><strong>Perception Layer (Sensing Layer):</strong> Captures data from the physical environment using sensors (e.g., temperature, motion, light) and digitizes it.</ListItem>
          <ListItem delay={0.4} icon={Network}><strong>Network Layer:</strong> Responsible for the secure and reliable transmission of collected data to processing platforms. Uses technologies like WLAN, cellular, ZigBee, Bluetooth, LoRaWAN, etc.</ListItem>
          <ListItem delay={0.45} icon={Cpu}><strong>Application Layer:</strong> Processes the data, presents it to the user via specific applications (e.g., a Smart Home app, a dashboard), and enables control of actuators.</ListItem>
        </ul>
        <p className="text-muted-foreground mt-4">Modern models often expand this to a 5-layer architecture (e.g., Objects/Things, Object Abstraction/Connectivity, Service Management/Cloud, Application, Business Layer) for a more detailed view.</p>
      </SectionCard>

      <SectionCard title="Intelligent Living: The Smart Home Concept" delay={0.4} seoKeywords="Smart Home explained, Intelligent Home, Smart Home components, Home Automation basics, Smart Home definition">
        <p className="text-muted-foreground">A Smart Home, or intelligent home, uses the networking of household appliances and systems to increase living comfort, improve energy efficiency, and enhance security. From automatic lighting and heating control to intelligent security systems and voice control – the possibilities are diverse.</p>
        <p className="font-medium text-foreground mt-4 mb-2">Typical Components of a Smart Home:</p>
        <ul className="space-y-3">
          <ListItem delay={0.45} icon={Home}><strong>Central Control Unit (Controller/Hub):</strong> The brain of the system, collects data and coordinates devices. In this project, a Raspberry Pi.</ListItem>
          <ListItem delay={0.5}><strong>Sensors:</strong> Detect states (e.g., temperature, window opening, smoke).</ListItem>
          <ListItem delay={0.55}><strong>Actuators:</strong> Execute commands (e.g., switching lights, adjusting thermostats).</ListItem>
          <ListItem delay={0.6}><strong>Communication Network:</strong> Connects all components (e.g., WLAN, ZigBee).</ListItem>
          <ListItem delay={0.65}><strong>User Interfaces:</strong> Apps, web interfaces, or voice assistants for control and monitoring.</ListItem>
        </ul>
      </SectionCard>

      <SectionCard title="The Language of Smart Devices: Key Communication Protocols" delay={0.5} seoKeywords="Smart Home Protocols, IoT Communication Protocols, HTTP, MQTT, ZigBee, Z-Wave, Bluetooth, BLE, WLAN">
        <p className="text-muted-foreground">Various protocols are used for communication between devices in IoT and Smart Homes:</p>
        <ul className="space-y-3 mt-4">
          <ListItem delay={0.55} icon={Info}><strong>HTTP (HyperText Transfer Protocol):</strong> Widely used on the web, often for connecting to cloud services or for RESTful APIs in Smart Home systems.</ListItem>
          <ListItem delay={0.6} icon={Info}><strong>MQTT (Message Queuing Telemetry Transport):</strong> A very lightweight publish-subscribe protocol, ideal for resource-constrained devices and unreliable networks. Very popular in the IoT domain.</ListItem>
          <ListItem delay={0.65} icon={Radio}><strong>ZigBee & Z-Wave:</strong> Wireless standards specifically developed for home automation, focusing on low energy consumption and mesh networking capabilities.</ListItem>
          <ListItem delay={0.7} icon={Bluetooth}><strong>Bluetooth (especially Bluetooth Low Energy - BLE):</strong> Suitable for short-range communication with very low energy consumption.</ListItem>
          <ListItem delay={0.75} icon={Wifi}><strong>WLAN (Wi-Fi):</strong> Offers high data rates, often used for bandwidth-intensive applications or devices with direct internet connectivity.</ListItem>
        </ul>
         <p className="text-muted-foreground mt-4">For detailed information on ZigBee, please visit the dedicated page. (<Link to="/zigbee-detail" className="text-cta hover:underline">ZigBee in Detail</Link>)</p>
      </SectionCard>

    </motion.div>
  );
};

export default IoTBasicsPage;