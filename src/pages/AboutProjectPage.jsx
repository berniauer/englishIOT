// AboutProjectPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Bot, Sparkles } from 'lucide-react'; // oben im File importieren

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay }
  })
};

const ListItem = ({ children, delay }) => (
  <motion.li
    className="flex items-start space-x-3"
    variants={sectionVariants}
    custom={delay}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
  >
    <CheckCircle className="h-6 w-6 text-cta-alt flex-shrink-0 mt-1" /> {/* Assuming cta-alt is defined in your Tailwind config */}
    <span>{children}</span>
  </motion.li>
);

const AboutProjectPage = () => {
  return (
    <motion.div
      className="py-8 md:py-12 space-y-12 md:space-y-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* SEO Keywords Meta - This was already in English, but I'll keep it for completeness and add CAMPUS 02 */}
     <meta 
        name="keywords" 
        content="Smart Home Project, DIY Smart Home, ZigBee2MQTT, Raspberry Pi Home Automation, Domoticz, Home Assistant, ZigBee Coordinator, Open Source Smart Home, Academic Thesis, CAMPUS 02, AI-assisted Web Content, IoT Platform Comparison"
      />

      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-primary text-center"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        Project Background and the Role of AI
      </motion.h1>

      {/* Section 1: The Original Research Project */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        custom={0.1}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-card p-6 md:p-8 rounded-xl shadow-lg" // Assuming card, primary-dark are defined
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary-dark">Motivation and Goals of the Thesis</h2>
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed"> {/* Assuming muted-foreground is defined */}
          <p>
            The core objective of the work was the conception and practical realization of a functioning, flexible, and cost-effective Smart Home system. The focus was on open-source components and manufacturer-independent solutions. Suitable communication protocols, hardware selection (especially Raspberry Pi as the central unit and the CC2531 USB stick as a ZigBee coordinator), as well as the evaluation and implementation of the software platforms Domoticz and Home Assistant were investigated. The thesis thus demonstrates a comprehensive example of a self-built, IoT-based Smart Home.
          </p>
        </div>
      </motion.section>

      {/* Section 2: The Role of AI in Website Creation */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        custom={0.2}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-secondary/10 p-6 md:p-8 rounded-xl shadow-lg" // Assuming secondary is defined
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary-dark">How Artificial Intelligence Shaped This Website</h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Transforming an extensive academic paper into a clear and engaging website can be time-consuming. To support this process and optimally prepare the content for the web, Artificial Intelligence (AI) was used as a tool for creating this online presentation.
          </p>

          <ul className="space-y-4 pl-2 md:pl-4">
            <ListItem delay={0.3}>
              <strong>Content Analysis & Extraction:</strong> An AI helped to extract core information, keywords, and the structure from the provided texts of the thesis.
            </ListItem>
            <ListItem delay={0.4}>
              <strong>Web Structuring:</strong> Based on the analysis, the AI assisted in developing a logical page structure and navigation hierarchy optimized for a good user experience on the web.
            </ListItem>
            <ListItem delay={0.5}>
              <strong>Text Generation & Summarization:</strong> AI was used to rephrase complex technical matters from the thesis into concise and web-friendly texts and to generate key statements, such as the project abstract.
            </ListItem>
            <ListItem delay={0.6}>
              <strong>SEO Optimization:</strong> The AI provided suggestions for relevant keywords and helped in formulating SEO-friendly headlines to improve the website's discoverability.
            </ListItem>
          </ul>

          <motion.p
            variants={sectionVariants}
            custom={0.7}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="pt-4 font-medium text-foreground" // Assuming foreground is defined
          >
            The use of AI served as an efficient aid for content preparation and structuring. However, the final content review, design (e.g., realized with a modern web framework and tools like Tailwind CSS, animated with Framer Motion), and specific adaptation to the target audience remain essential human tasks to ensure the quality and relevance of the presentation.
          </motion.p>
        </div>
      </motion.section>
      {/* AI Chat Link Card */}
      <motion.section
        variants={sectionVariants}
        custom={0.9}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-secondary/10 p-6 md:p-8 rounded-xl shadow-lg mt-12"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary-dark text-center">
          AI Chat References
        </h2>
        <p className="text-muted-foreground text-center mb-6 text-sm md:text-base">
          Browse the original AI-assisted conversations that helped shape this project:
        </p>
        <div className="flex justify-center space-x-6">
          {/* ChatGPT Link */}
          <a
            href="https://chatgpt.com/share/68567976-a9b0-800c-8c99-f063ca0df13e"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View shared ChatGPT conversation"
            className="text-primary hover:text-cta transition-colors"
          >
            <Bot size={36} />
          </a>

          {/* Gemini Link */}
          <a
            href="https://aistudio.google.com/app/prompts?state=%7B%22ids%22:%5B%221a4CtIdQNeQmFm8EL2R7hJxUVquVfGQ3o%22%5D,%22action%22:%22open%22,%22userId%22:%22100853443085577157326%22,%22resourceKeys%22:%7B%7D%7D&usp=sharing "
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View shared Gemini conversation"
            className="text-primary hover:text-cta transition-colors"
          >
            <Sparkles size={36} />
          </a>
        </div>
      </motion.section>

    </motion.div>

    
  );
};

export default AboutProjectPage;