// 📄 src/pages/AbstractPage.jsx

import { motion } from "framer-motion";
import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { HardDrive, Radio, Cog, Settings, Zap, PlugZap, Wifi, Terminal, Cloud, KeyRound, Smartphone as SmartPhoneIcon, ChevronDown, ChevronRight, Image as ImageIcon, Code as CodeIcon, Share2 as FlowchartIcon } from 'lucide-react';
import Metadata from '../components/Metadata'; // Pfad ggf. anpassen


export default function AbstractPage() {
  return (
    <>
      <Metadata
        title="Abstract – Smart Home with ZigBee, Raspberry Pi & Open Source Automation"
        description="Summary of the academic thesis about building a vendor-independent smart home using ZigBee, Raspberry Pi, and open-source platforms like Home Assistant and Domoticz."
        keywords="Smart Home Abstract, ZigBee Thesis, Raspberry Pi Home Automation, Open Source Smart Home, Domoticz vs Home Assistant, Academic IoT Project, Smart Home Integration, Adam Dolgos"
      />

      <PageHeader
        title="Project Abstract"
        subtitle="Master Thesis Summary – ZigBee-Based Smart Home with Raspberry Pi and Open Source Platforms"
      />

      <motion.section
        className="max-w-4xl mx-auto px-4 md:px-0 py-12 text-muted-foreground leading-relaxed"
        variants={sectionVariants} // Stelle sicher, dass sectionVariants definiert ist
        initial="hidden"
        animate="visible" // oder whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        // viewport={{ once: true, amount: 0.2 }} // nur nötig bei whileInView
        transition={{ duration: 0.7, delay: 0.1 }} // Beispiel-Transition, falls nicht in sectionVariants
      >
        <p className="mb-6 text-lg"> {/* Optional: Etwas größerer Text für bessere Lesbarkeit */}
          This master thesis presents the development of a vendor-independent Smart Home system using the ZigBee communication protocol on a Raspberry Pi. The goal was to create a cost-effective, scalable, and secure setup that enables the integration of various devices without relying on proprietary hubs. ZigBee was chosen due to its low energy consumption and suitability for mesh networks.
        </p>
        <p className="mb-6 text-lg">
          A key component of the project was the comparison of two open-source home automation platforms: Domoticz and Home Assistant (Hass.io). Both were installed on a Raspberry Pi and tested using a custom ZigBee network, built with a CC2531 USB stick and Zigbee2MQTT software. Four devices—a temperature/humidity sensor, a door/window sensor, a smoke detector, and an RGB LED strip—were integrated to demonstrate functionality.
        </p>
        <p className="mb-6 text-lg">
          The evaluation focused on installation complexity, system performance, user interface, automation features, and flexibility. While Domoticz offered deeper system access and lower resource usage, Home Assistant stood out for its modern interface, active community, and ease of use, making it more suitable for beginners according to the thesis findings.
        </p>
        <p className="text-lg">
          The results confirm that both platforms are capable, but the choice ultimately depends on the user's technical expertise and specific project needs. This thesis offers a practical guide for building flexible Smart Home environments and outlines future enhancements such as extended protocol support, visual floorplans, and advanced long-term data logging. It contributes to the ongoing development of open, accessible, and user-empowering home automation systems.
        </p>
      </motion.section>
    </>
  );
}