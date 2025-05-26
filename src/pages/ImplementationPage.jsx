// ImplementationPage.jsx
import React, { useState } from 'react'; // useState für Akkordeon
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HardDrive, Radio, Cog, Settings, Zap, PlugZap, Wifi, Terminal, Cloud, KeyRound, Smartphone as SmartPhoneIcon, ChevronDown, ChevronRight, Image as ImageIcon, Code as CodeIcon, Share2 as FlowchartIcon } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay }
  })
};

const ImplementationSection = ({ icon: Icon, title, children, delay, seoKeywords, id }) => (
  <motion.section
    id={id}
    variants={sectionVariants}
    custom={delay}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    className="bg-card p-6 md:p-8 rounded-xl shadow-lg mb-10 md:mb-12"
  >
    {seoKeywords && <meta name="keywords" content={seoKeywords} />}
    <div className="flex items-center mb-6">
      <Icon className="h-8 w-8 text-primary mr-4" />
      <h2 className="text-2xl md:text-3xl font-semibold text-primary-dark">{title}</h2>
    </div>
    <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
      {children}
    </div>
  </motion.section>
);

const SubSection = ({ title, children }) => (
    <div className="mt-6 pt-4 border-t border-border">
        <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
        <div className="space-y-3 text-sm text-muted-foreground/90">
            {children}
        </div>
    </div>
);

// Einfache Akkordeon-Item Komponente (kann durch eine UI-Bibliothek ersetzt/erweitert werden)
const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-3 text-left text-foreground hover:bg-secondary/10 px-2 rounded"
      >
        <span className="font-medium">{title}</span>
        {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="p-3 pl-5 bg-secondary/5 text-xs" // Kleinerer Text für Details
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

const PlaceholderImage = ({ caption }) => (
    <div className="my-4 p-4 border-2 border-dashed border-border rounded-md text-center bg-secondary/5">
        <ImageIcon size={48} className="mx-auto text-muted-foreground mb-2" />
        <p className="text-sm text-muted-foreground italic">{caption}</p>
    </div>
);

const PlaceholderCode = ({ caption, language = "yaml" }) => (
    <div className="my-4 p-4 border-2 border-dashed border-border rounded-md bg-muted text-left"> {/* Assuming muted for code bg */}
        <div className="flex items-center text-muted-foreground mb-2">
            <CodeIcon size={18} className="mr-2" />
            <p className="text-sm italic">{caption} (Example {language.toUpperCase()})</p>
        </div>
        <pre className="text-xs overflow-x-auto"><code>{`# Placeholder for ${language} code
# Replace with actual code snippet
#
# Example:
# setting: value
# another_setting:
#   - item1
#   - item2`}
        </code></pre>
    </div>
);


const ImplementationPage = () => {
  return (
    <motion.div
      className="py-8 md:py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <meta name="keywords" content="Smart Home Implementation Steps, IoT System Setup Guide, Raspberry Pi Configuration Tutorial, ZigBee CC2531 Setup, Zigbee2MQTT Configuration, Domoticz Installation Guide, Home Assistant Installation Tutorial, MQTT Broker Setup Details" />

      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-10 md:mb-16 text-primary text-center"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        System Implementation: Building the Smart Home
      </motion.h1>

      <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
        This page details the practical steps taken to implement the Smart Home system as described in Adam Dolgos' thesis. It covers hardware selection, software setup on the Raspberry Pi, and the configuration of both Domoticz and Home Assistant platforms. Click on the expandable sections for more details.
      </p>

      <ImplementationSection icon={HardDrive} title="Hardware Foundation" delay={0.1} id="hardware">
        <p>The core of the system relies on carefully selected hardware components:</p>
        <ul className="list-disc list-inside pl-4 space-y-2 mt-4">
          <li><strong>Raspberry Pi (Model 3 B+):</strong> Central controller. (Thesis Ref: Ch. 4.5)</li>
          <li><strong>ZigBee Coordinator (CC2531 USB Stick):</strong> Flashed with custom firmware. (Thesis Ref: Ch. 4.3)</li>
          <li><strong>End Devices:</strong> Xiaomi Temperature/Humidity & Door/Window Sensors, Heiman Smoke Detector, Gledopto LED Strip. (Thesis Ref: Ch. 4.2)</li>
        </ul>
        <PlaceholderImage caption="Image: Assembled Raspberry Pi with CC2531 Stick and a Sensor" />
      </ImplementationSection>

      <ImplementationSection icon={Cog} title="Software Architecture & Core Components" delay={0.2} id="software-architecture">
        <p>The open-source software stack on the Raspberry Pi includes:</p>
        <ul className="list-disc list-inside pl-4 space-y-2 mt-4">
            <li><strong>OS:</strong> Raspbian Lite. (Thesis Ref: Ch. 4.7.1)</li>
            <li><strong>MQTT Broker:</strong> Mosquitto. (Thesis Ref: Ch. 4.7.3, 4.8.2)</li>
            <li><strong>ZigBee Bridge:</strong> Zigbee2MQTT. (Thesis Ref: Ch. 4.7.4, 4.8.3)</li>
            <li><strong>Automation Platforms:</strong> Domoticz (Thesis Ref: Ch. 4.6.1, 4.7) & Home Assistant (Hass.io) (Thesis Ref: Ch. 4.6.2, 4.8).</li>
        </ul>
        <div className="my-6 p-4 border-2 border-dashed border-border rounded-md text-center bg-secondary/5">
            <FlowchartIcon size={48} className="mx-auto text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground italic">Placeholder: Software Architecture Flowchart</p>
            <p className="text-xs text-muted-foreground/70 mt-1">Illustrating data flow: ZigBee Devices ↔ CC2531 ↔ Zigbee2MQTT ↔ Mosquitto ↔ Automation Platform.</p>
        </div>
      </ImplementationSection>

      <ImplementationSection icon={Zap} title="Setting up the Domoticz Platform" delay={0.3} id="domoticz-setup" seoKeywords="Domoticz Setup Raspberry Pi, Installing Domoticz, Zigbee2MQTT Domoticz, Domoticz Configuration Guide">
        <p>Key steps for Domoticz on Raspbian Lite:</p>
        <SubSection title="1. Raspberry Pi OS Preparation (Ref: Ch. 4.7.1)">
            <p>Updates, SSH, WLAN configuration.</p>
            <AccordionItem title="View OS Setup Notes">
                <p>Ensured latest updates with `sudo apt update && sudo apt full-upgrade`.</p>
                <p>Enabled SSH via `raspi-config` or by creating an empty `ssh` file on the boot partition.</p>
                <p>Configured `wpa_supplicant.conf` for Wi-Fi connectivity.</p>
                <PlaceholderImage caption="Screenshot: Terminal showing OS update process" />
            </AccordionItem>
        </SubSection>
        <SubSection title="2. MQTT Broker (Mosquitto) Installation (Ref: Ch. 4.7.3)">
            <p>Installed via `apt` and secured with user authentication.</p>
            <AccordionItem title="View Mosquitto Configuration Details">
                <p>Installed with `sudo apt install mosquitto mosquitto-clients`.</p>
                <p>Password file created with `mosquitto_passwd`.</p>
                <p>Edited `mosquitto.conf` to set `password_file` and `allow_anonymous false`.</p>
                <PlaceholderCode caption="Mosquitto.conf snippet for authentication" language="conf" />
            </AccordionItem>
        </SubSection>
        <SubSection title="3. Zigbee2MQTT Installation & Configuration (Ref: Ch. 4.7.4)">
            <p>Cloned, Node.js installed, `configuration.yaml` edited.</p>
            <AccordionItem title="View Zigbee2MQTT Setup Highlights">
                <p>Cloned repository from GitHub to `/opt/zigbee2mqtt`.</p>
                <p>Installed required Node.js version (e.g., v12.x as per thesis).</p>
                <p>Key `configuration.yaml` settings: `homeassistant: false`, MQTT server details, serial port for CC2531 (e.g., `/dev/ttyACM0`), network_key.</p>
                <PlaceholderCode caption="Zigbee2MQTT configuration.yaml snippet" language="yaml" />
            </AccordionItem>
        </SubSection>
        <SubSection title="4. Domoticz Installation (Ref: Ch. 4.7.5)">
            <p>Via official script, configured network settings.</p>
        </SubSection>
        <SubSection title="5. Zigbee2MQTT Python Plugin for Domoticz (Ref: Ch. 4.7.5)">
            <p>Plugin installed for communication.</p>
             <AccordionItem title="Plugin Setup Notes">
                <p>Plugin by Stanislav Demydiuk cloned into Domoticz `plugins` directory.</p>
                <p>Configured in Domoticz UI: MQTT server, topic, username/password.</p>
                <PlaceholderImage caption="Screenshot: Domoticz Hardware Setup for Zigbee2MQTT Plugin" />
            </AccordionItem>
        </SubSection>
        <SubSection title="6. Device Pairing & Management (Ref: Ch. 4.7.8)">
            <p>ZigBee devices paired; Heiman smoke detector required manual converter additions.</p>
        </SubSection>
         <SubSection title="7. External Access & HTTPS (Ref: Ch. 4.7.6, 4.7.7)">
            <p>Port forwarding, DDNS, Let's Encrypt for SSL.</p>
        </SubSection>
      </ImplementationSection>

      <ImplementationSection icon={PlugZap} title="Setting up Home Assistant (Hass.io) Platform" delay={0.4} id="home-assistant-setup" seoKeywords="Home Assistant Hass.io Setup Guide, Installing Home Assistant Raspberry Pi, Zigbee2MQTT Home Assistant Tutorial">
        <p>Hass.io simplifies parts of the setup:</p>
        <SubSection title="1. Hass.io OS Installation (Ref: Ch. 4.8.1)">
            <p>Hass.io image flashed to microSD. WLAN pre-configurable.</p>
        </SubSection>
        <SubSection title="2. Initial HA Setup & Core Add-Ons">
            <p>Web UI access, user creation. Essential Add-Ons: Configurator, SSH, Mosquitto Broker, Zigbee2MQTT.</p>
            <AccordionItem title="View Add-On Installation Notes">
                <p>Add-Ons installed from the Supervisor panel in Home Assistant.</p>
                <p>Mosquitto Broker Add-On configured with user credentials.</p>
                <PlaceholderImage caption="Screenshot: Home Assistant Supervisor Add-On Store" />
            </AccordionItem>
        </SubSection>
        <SubSection title="3. Zigbee2MQTT Add-On Configuration (Ref: Ch. 4.8.3)">
            <p>Configured via Add-On UI: serial port, MQTT (pointing to Mosquitto Add-On), `homeassistant: true`.</p>
            <PlaceholderCode caption="Zigbee2MQTT Add-On configuration snippet (Home Assistant)" language="json" />
        </SubSection>
        <SubSection title="4. MQTT Integration in Home Assistant">
            <p>Auto-discovery of Mosquitto Add-On. Devices appear as entities.</p>
        </SubSection>
        <SubSection title="5. Device Pairing & Management (Ref: Ch. 4.8.4)">
            <p>Pairing via `input_boolean` helper and automation, or Zigbee2MQTT Add-On UI. Heiman smoke detector recognized as older model but functional.</p>
            <AccordionItem title="Home Assistant Pairing Automation Example">
                <p>An `input_boolean` created in `configuration.yaml` to toggle `permit_join`.</p>
                <p>An automation in `automations.yaml` listens to this helper and sends MQTT messages to `zigbee2mqtt/bridge/config/permit_join`.</p>
                <PlaceholderCode caption="Home Assistant automation.yaml for permit_join" language="yaml" />
            </AccordionItem>
        </SubSection>
        <SubSection title="6. External Access & HTTPS (Ref: Ch. 4.8.5)">
            <p>Port forwarding. DuckDNS and Let's Encrypt Add-Ons for DDNS and SSL within Hass.io.</p>
        </SubSection>
      </ImplementationSection>

    </motion.div>
  );
};

export default ImplementationPage;