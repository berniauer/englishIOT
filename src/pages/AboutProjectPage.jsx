import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

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
    <CheckCircle className="h-6 w-6 text-cta-alt flex-shrink-0 mt-1" />
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
      <meta name="keywords" content="Akademisches Projekt, Diplomarbeit Website, KI Website Erstellung, IoT Forschung, Smart Home Studie" />
      
      <motion.h1 
        className="text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-primary text-center"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        Projekt-Hintergrund und der Einsatz von KI
      </motion.h1>

      {/* Sektion 1: Das ursprüngliche Forschungsprojekt */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        custom={0.1}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-card p-6 md:p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary-dark">Motivation und Ziele der Diplomarbeit</h2>
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
          <p>
            Diese Website basiert auf der Diplomarbeit "Internet of Things - Smart Home" von Adam Dolgos, eingereicht am CAMPUS 02 Fachhochschule der Wirtschaft in Graz im Jahr 2020. Das Kernziel der Arbeit war die Konzeption und praktische Realisierung eines funktionierenden, flexiblen und kostengünstigen Smart Home Systems. Im Fokus standen dabei Open-Source-Komponenten und herstellerunabhängige Lösungen. Untersucht wurden geeignete Kommunikationsprotokolle, die Auswahl der Hardware (insbesondere Raspberry Pi als Zentrale und der CC2531-USB-Stick als ZigBee-Koordinator) sowie die Evaluierung und Implementierung der Software-Plattformen Domoticz und Home Assistant. Die Diplomarbeit demonstriert somit ein vollumfängliches Beispiel für ein selbstgebautes, IoT-basiertes Smart Home.
          </p>
        </div>
      </motion.section>

      {/* Sektion 2: Die Rolle von KI bei der Website-Erstellung */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        custom={0.2}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-secondary/10 p-6 md:p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary-dark">Wie Künstliche Intelligenz diese Website mitgestaltet hat</h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Die Transformation einer umfangreichen akademischen Arbeit in eine übersichtliche und ansprechende Website kann zeitintensiv sein. Um diesen Prozess zu unterstützen und die Inhalte optimal für das Web aufzubereiten, wurde für die Erstellung dieser Online-Präsentation Künstliche Intelligenz (KI) als Werkzeug eingesetzt.
          </p>
          
          <ul className="space-y-4 pl-2 md:pl-4">
            <ListItem delay={0.3}>
              <strong>Inhaltsanalyse & Extraktion:</strong> Eine KI half dabei, die Kerninformationen, Schlüsselbegriffe und die Struktur aus den bereitgestellten Texten der Diplomarbeit zu extrahieren.
            </ListItem>
            <ListItem delay={0.4}>
              <strong>Strukturierung für das Web:</strong> Basierend auf der Analyse unterstützte die KI bei der Entwicklung einer logischen Seitenstruktur und Navigationshierarchie, die für eine gute Benutzererfahrung im Web optimiert ist.
            </ListItem>
            <ListItem delay={0.5}>
              <strong>Texterstellung & Zusammenfassung:</strong> Die KI wurde genutzt, um komplexe technische Sachverhalte aus der Diplomarbeit in prägnante und web-freundliche Texte umzuformulieren und Kernaussagen, wie beispielsweise den Projekt-Abstract, zu generieren.
            </ListItem>
            <ListItem delay={0.6}>
              <strong>SEO-Optimierung:</strong> Die KI lieferte Vorschläge für relevante Keywords und half bei der Formulierung von SEO-freundlichen Überschriften, um die Auffindbarkeit der Website zu verbessern.
            </ListItem>
          </ul>

          <motion.p
            variants={sectionVariants}
            custom={0.7}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="pt-4 font-medium text-foreground"
          >
            Der Einsatz von KI diente hier als effizientes Hilfsmittel zur Inhaltsaufbereitung und Strukturierung. Die finale inhaltliche Überprüfung, das Design (realisiert mit Hostinger Horizons) und die spezifische Anpassung an die Zielgruppe bleiben jedoch wesentliche menschliche Aufgaben, um die Qualität und Relevanz der Präsentation sicherzustellen.
          </motion.p>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default AboutProjectPage;