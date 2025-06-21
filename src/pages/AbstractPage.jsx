// 📄 src/pages/AbstractPage.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Animations-Definition wie bei der funktionierenden Seite
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay }
  })
};

const AbstractPage = () => {
  return (
    <motion.div
      className="py-8 md:py-12 space-y-12 md:space-y-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* SEO Keywords */}
        <meta 
          name="keywords" 
          content="ZigBee Technology, ZigBee Protocol, IEEE 802.15.4, Smart Home Wireless, ZigBee Mesh Network, Low Power IoT, Zigbee2MQTT, CC2531 Coordinator, Open Source Home Automation, ZigBee in Home Assistant, ZigBee Domoticz Integration" 
        />

      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-primary text-center"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        Abstract of the Thesis
      </motion.h1>

      {/* Hauptinhalt */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        custom={0.1}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-card p-6 md:p-8 rounded-xl shadow-lg text-muted-foreground text-lg leading-relaxed"
      >
        <p className="mb-6">
          This master thesis presents the development of a vendor-independent Smart Home system using the ZigBee communication protocol on a Raspberry Pi. The goal was to create a cost-effective, scalable, and secure setup that enables the integration of various devices without relying on proprietary hubs. ZigBee was chosen due to its low energy consumption and suitability for mesh networks.
        </p>
        <p className="mb-6">
          A key component of the project was the comparison of two open-source home automation platforms: Domoticz and Home Assistant (Hass.io). Both were installed on a Raspberry Pi and tested using a custom ZigBee network, built with a CC2531 USB stick and Zigbee2MQTT software. Four devices—a temperature/humidity sensor, a door/window sensor, a smoke detector, and an RGB LED strip—were integrated to demonstrate functionality.
        </p>
        <p className="mb-6">
          The evaluation focused on installation complexity, system performance, user interface, automation features, and flexibility. While Domoticz offered deeper system access and lower resource usage, Home Assistant stood out for its modern interface, active community, and ease of use, making it more suitable for beginners according to the thesis findings.
        </p>
        <p>
          The results confirm that both platforms are capable, but the choice ultimately depends on the user's technical expertise and specific project needs. This thesis offers a practical guide for building flexible Smart Home environments and outlines future enhancements such as extended protocol support, visual floorplans, and advanced long-term data logging.
        </p>
      </motion.section>
    </motion.div>
  );
};

export default AbstractPage;
