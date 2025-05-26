
import React from 'react';
import { Instagram, Facebook, MessageSquare } from 'lucide-react'; // Assuming TikTok icon isn't directly in lucide, using MessageSquare as placeholder

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 text-secondary-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <p className="text-sm">
            Copyright &copy; {currentYear} IoT Smart Home Projekt – Adam Dolgos
          </p>
        </div>
        <div className="mb-4 space-x-4">
          <span className="text-sm hover:text-primary cursor-pointer">Impressum (Platzhalter)</span>
          <span className="text-sm hover:text-primary cursor-pointer">Datenschutz (Platzhalter)</span>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="#" aria-label="Instagram" className="text-secondary-foreground hover:text-primary transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" aria-label="TikTok" className="text-secondary-foreground hover:text-primary transition-colors">
            <MessageSquare size={24} /> {/* Placeholder for TikTok */}
          </a>
          <a href="#" aria-label="Facebook" className="text-secondary-foreground hover:text-primary transition-colors">
            <Facebook size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  