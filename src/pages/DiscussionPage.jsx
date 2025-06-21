// DiscussionResultsPage.jsx (oder Ihr gewählter Dateiname)
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Users, Sliders, ShieldCheck, Smartphone, ThumbsUp, Lightbulb, TrendingUp, Settings2, CloudCog, ClipboardList, AlertOctagon, MessageSquare, Network, Radio, Home } from 'lucide-react'; // Network, Radio, Home hinzugefügt

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

const ComparisonPoint = ({ icon: Icon, title, domoticzText, homeAssistantText, delay }) => (
  <motion.div
    className="grid md:grid-cols-2 gap-4 items-start bg-card p-6 rounded-lg shadow-md"
    variants={sectionVariants}
    custom={delay}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="md:col-span-2 flex items-center mb-3">
      <Icon className="h-7 w-7 text-primary mr-3" />
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
    </div>
    <div>
      <h4 className="text-lg font-medium text-foreground mb-1">Domoticz</h4>
      <p className="text-muted-foreground text-sm leading-relaxed">{domoticzText}</p>
    </div>
    <div>
      <h4 className="text-lg font-medium text-foreground mb-1">Home Assistant (Hass.io)</h4>
      <p className="text-muted-foreground text-sm leading-relaxed">{homeAssistantText}</p>
    </div>
  </motion.div>
);

const FutureProspectItem = ({ icon: Icon, title, description, delay }) => ( // title hinzugefügt, falls benötigt
  <motion.li
    className="flex items-start space-x-3"
    variants={listItemVariants}
    custom={delay}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
  >
    <Icon className="h-5 w-5 text-cta-alt flex-shrink-0 mt-1" />
    {/* Falls Sie einen Titel für FutureProspectItem wollen: <h5 className="font-semibold">{title}</h5> */}
    <span className="text-muted-foreground">{description}</span>
  </motion.li>
);


const DiscussionResultsPage = () => {
  return (
    <React.Fragment>
      {/* Visual Comparison Chart */}
      <motion.div
        className="mt-12 bg-secondary/10 p-6 md:p-8 rounded-xl shadow-md"
        variants={sectionVariants}
        custom={0.7}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h3 className="text-xl md:text-2xl font-semibold text-center mb-4 text-primary">
          Visual Summary: Domoticz vs. Home Assistant
        </h3>
        <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto mb-6">
          The following chart provides a summarized, side-by-side comparison of key platform attributes based on the Likert-scale evaluation from the thesis.
        </p>
        <img
          src="/assets/img/domoticz-vs-home-assistant.svg"
          alt="Comparison chart of Domoticz and Home Assistant smart home platforms"
          className="w-full max-w-5xl mx-auto rounded-md border border-muted"
        />
      </motion.div>
      <motion.div
        className="py-8 md:py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
      {/* SEO Keywords Meta */}
      <meta name="keywords" content="Smart Home Project Results, IoT Project Discussion, Domoticz vs Home Assistant, ZigBee Implementation Review, Home Automation Comparison, Future Smart Home Trends, Adam Dolgos Thesis" />

      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-10 md:mb-16 text-primary text-center"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        Project Discussion & Key Outcomes
      </motion.h1>

      <motion.section
        variants={sectionVariants}
        custom={0.1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-card p-6 md:p-8 rounded-xl shadow-lg mb-10 md:mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary-dark">
          <BarChart3 className="inline-block mr-3 mb-1" />
          Comparing Domoticz and Home Assistant (Hass.io)
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          A core part of this project was the implementation and evaluation of two popular open-source home automation platforms: Domoticz and Home Assistant (using the Hass.io operating system). Both platforms were set up on a Raspberry Pi to control the ZigBee network. The following comparison highlights key differences and experiences based on the thesis findings.
        </p>
        <div className="space-y-8">
          <ComparisonPoint
            icon={Settings2}
            title="Installation & System Requirements"
            domoticzText="Requires an existing OS (Raspbian in this project), demanding more Linux knowledge. MQTT and Zigbee2MQTT need separate installation and configuration. Offers full system control. Lower system requirements (8GB SD card mentioned in thesis)."
            homeAssistantText="Easier initial setup due to its own OS image (Hass.io), optimized for Raspberry Pi. Components often available as easily installable Add-Ons. Less deep system access but more user-friendly for beginners. Higher system requirements (32GB SD card recommended, though 1.5GB used in tests)."
            delay={0.2}
          />
          <ComparisonPoint
            icon={Users}
            title="Web Interface & User Friendliness"
            domoticzText="Standard theme appears somewhat dated but is functional. Device data is clearly presented. User management is straightforward."
            homeAssistantText="Modern 'Lovelace' UI, highly customizable with card-based layouts. Fast response times. More advanced user management and interface customization options, including display language."
            delay={0.3}
          />
          <ComparisonPoint
            icon={Sliders}
            title="Automation Capabilities"
            domoticzText="Offers 'Blocky' (visual programming) for simple automations and LUA/DzVentz for more complex scripting. Easy to get started with basic automations."
            homeAssistantText="Automations primarily through YAML files, which can have a steeper learning curve. Integrated editor for simple automations exists but is somewhat limited. Strong integration of Node-RED (visual programming) via Add-On for complex flows."
            delay={0.4}
          />
           <ComparisonPoint
            icon={CloudCog}
            title="System Architecture & Flexibility"
            domoticzText="Software (MQTT, Zigbee2MQTT) runs independently and can be configured/monitored via SSH. Program and OS updates are manual and separate. Samba for file access is possible but more complex to set up."
            homeAssistantText="Add-On based system; all software managed through the Supervisor. Updates for Hass.io and Add-Ons are often notified and can be applied via the web UI. Samba file sharing easily available as an Add-On."
            delay={0.5}
          />
          <ComparisonPoint
            icon={Smartphone} // Korrigiertes Icon hier
            title="Mobile Applications"
            domoticzText="Offers a free Lite version (limited support) and a paid Premium version with more features including Android Wear support and fingerprint ID."
            homeAssistantText="Provides a free, fully functional mobile application. Includes features like tracking mode for location-based automations. No Android Wear integration noted at the time of the thesis."
            delay={0.6}
          />
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        custom={0.3}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-secondary/10 p-6 md:p-8 rounded-xl shadow-lg mb-10 md:mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary-dark">
            <ShieldCheck className="inline-block mr-3 mb-1" />
            Security Considerations
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
            Ensuring the security of the Smart Home system was a key consideration. Measures included changing the default ZigBee network key, enabling the pairing mode only when necessary, securing the MQTT broker with credentials, and restricting external access exclusively via HTTPS.
        </p>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        custom={0.4}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-card p-6 md:p-8 rounded-xl shadow-lg mb-10 md:mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary-dark">
            <Lightbulb className="inline-block mr-3 mb-1" />
            Conclusion & Recommendations
        </h2>
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
                Both Domoticz and Home Assistant are capable platforms for building a DIY Smart Home. The choice often depends on the user's technical expertise and specific needs.
            </p>
            <ul className="space-y-3 pl-4"> {/* Changed space-y-2 to space-y-3 for a bit more spacing */}
                <motion.li // Converted to motion.li for consistency, if desired
                    className="flex items-start space-x-3"
                    variants={listItemVariants} custom={0.45} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
                >
                    <ThumbsUp className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" /> {/* Example styling for thumbs up */}
                    <span>
                        <strong>Domoticz:</strong> Well-suited for users with Linux experience who desire full system control and find its automation methods (Blocky, LUA) sufficient. Its lower resource footprint can also be an advantage.
                    </span>
                </motion.li>
                <motion.li
                    className="flex items-start space-x-3"
                    variants={listItemVariants} custom={0.5} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
                >
                    <ThumbsUp className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>
                        <strong>Home Assistant (Hass.io):</strong> Generally more user-friendly for beginners due to its Add-On system and modern UI. It boasts a larger, more active community and more up-to-date documentation. The YAML-based automation can be powerful but requires learning.
                    </span>
                </motion.li>
            </ul>
            <p>
                For users with limited IT and Linux knowledge, the thesis suggests that Home Assistant via the Hass.io operating system might be the more approachable option due to its streamlined installation and management of components.
            </p>
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        custom={0.5}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-secondary/10 p-6 md:p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary-dark">
            <TrendingUp className="inline-block mr-3 mb-1" />
            Future Possibilities & Enhancements
        </h2>
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
                The implemented Smart Home system provides a solid foundation that can be expanded in numerous ways:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2">
                <FutureProspectItem delay={0.55} icon={Network} description="Expanding the ZigBee network with more devices and routers (e.g., smart bulbs, plugs) to create a robust mesh topology and cover larger areas." />
                <FutureProspectItem delay={0.6} icon={Users} description="Defining device groups for synchronized control (e.g., all living room lights)." />
                <FutureProspectItem delay={0.65} icon={Home} description="Utilizing floorplan visualizations for intuitive monitoring and control of devices within different rooms." />
                <FutureProspectItem delay={0.7} icon={Radio} description="Integrating devices using other communication protocols, such as WLAN (for video streams) or Bluetooth (for specific sensors), as both platforms support multi-protocol environments." />
                <FutureProspectItem delay={0.75} icon={BarChart3} description="Implementing long-term data storage and analysis using dedicated time-series databases like InfluxDB (Home Assistant offers this as an Add-On, Domoticz can be configured similarly)." />
                <FutureProspectItem delay={0.8} icon={ShieldCheck} description="Further enhancing security with more advanced network segmentation or intrusion detection systems." />
            </ul>
            <p>
                The field of Smart Home technology is constantly evolving, offering exciting opportunities for further customization and innovation.
            </p>
        </div>
      </motion.section>
    </motion.div>
    </React.Fragment>
  );
};

export default DiscussionResultsPage;