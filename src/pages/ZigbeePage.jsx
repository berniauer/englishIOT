// ZigbeePage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Network, Shield, Settings, ListChecks, Aperture } from 'lucide-react'; // Added more specific icons

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

const FeatureListItem = ({ icon: Icon, title, description, delay }) => (
  <motion.li
    className="flex items-start space-x-4 p-4 bg-card/50 rounded-lg shadow"
    variants={listItemVariants}
    custom={delay}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
  >
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
      <Icon size={22} />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  </motion.li>
);


const ZigbeePage = () => {
  return (
    <motion.div
      className="py-8 md:py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* SEO Keywords Meta */}
      <meta name="keywords" content="ZigBee Technology, ZigBee Protocol, IEEE 802.15.4, Smart Home Wireless, Low Power Network, ZigBee Mesh" />

      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-10 md:mb-16 text-primary text-center"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        ZigBee in Detail: Powering Efficient Smart Homes
      </motion.h1>

      <motion.section
        variants={sectionVariants}
        custom={0.1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-card p-6 md:p-8 rounded-xl shadow-lg mb-10 md:mb-12"
      >
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
          <p>
            This section will offer a detailed exploration of the ZigBee protocol, a key technology for creating low-power, reliable wireless networks in Smart Home and IoT applications.
            We will delve into its technical aspects, advantages, disadvantages, and practical application examples.
          </p>
          <p className="text-foreground font-medium">
            Stay tuned! Detailed content for this page is currently under development and will be added soon.
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        custom={0.2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-primary-dark text-center">
          What We'll Cover:
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <FeatureListItem
            icon={Settings}
            title="Technical Specifications"
            description="Understanding the foundation: IEEE 802.15.4, frequency bands, and data rates."
            delay={0.3}
          />
          <FeatureListItem
            icon={Network}
            title="Network Topologies"
            description="Exploring Star, Mesh, and Cluster Tree configurations and their use cases."
            delay={0.35}
          />
          <FeatureListItem
            icon={Aperture} // Using Aperture for a more abstract "profile"
            title="ZigBee Profiles & Clusters"
            description="How ZigBee standardizes device interactions and functionalities."
            delay={0.4}
          />
          <FeatureListItem
            icon={ListChecks} // Using ListChecks for comparison
            title="Pros and Cons"
            description="A balanced look at ZigBee's strengths and limitations compared to other protocols."
            delay={0.45}
          />
          <FeatureListItem
            icon={Shield}
            title="Security Mechanisms"
            description="How ZigBee ensures secure communication within the network."
            delay={0.5}
          />
          <FeatureListItem
            icon={Radio} // Radio icon for practical implementation
            title="Practical Implementation Insights"
            description="Examples and considerations for deploying ZigBee in real-world scenarios."
            delay={0.55}
          />
        </ul>
      </motion.section>
    </motion.div>
  );
};

export default ZigbeePage;