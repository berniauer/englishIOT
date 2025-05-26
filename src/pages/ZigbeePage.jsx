
import React from 'react';
import { motion } from 'framer-motion';

const ZigbeePage = () => {
  return (
    <motion.div 
      className="py-8 section-fade-in"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-6 text-primary">ZigBee im Detail</h1>
      <div className="space-y-4 text-lg text-foreground">
        <p>
          Diese Sektion wird eine detaillierte Betrachtung des ZigBee-Protokolls bieten.
          Es werden technische Aspekte, Vor- und Nachteile sowie Anwendungsbeispiele im Smart Home Kontext beleuchtet.
        </p>
        <p>
          Die spezifischen Inhalte für diese Seite werden in einer zukünftigen Iteration erstellt.
        </p>
        <p><strong>Geplante Inhalte:</strong></p>
        <ul className="list-disc list-inside pl-4 space-y-2">
          <li>Technische Spezifikationen von ZigBee (IEEE 802.15.4)</li>
          <li>Netzwerktopologien (Stern, Mesh, Baum)</li>
          <li>ZigBee Profile und Cluster</li>
          <li>Vor- und Nachteile im Vergleich zu anderen Protokollen</li>
          <li>Sicherheitsmechanismen in ZigBee</li>
          <li>Praktische Implementierungsbeispiele</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default ZigbeePage;
  