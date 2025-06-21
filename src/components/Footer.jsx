import React from 'react';
import { Instagram, Facebook, MessageSquare } from 'lucide-react'; // Using MessageSquare as placeholder for TikTok

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Placeholder URLs - replace with your actual links
  const instagramUrl = "https://instagram.com/your_profile"; 
  const tiktokUrl = "https://tiktok.com/@your_profile";
  const facebookUrl = "https://facebook.com/your_page";

  return (
    <footer className="bg-secondary/50 text-secondary-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <p className="text-sm">
            Copyright © {currentYear} IoT Smart Home Project – Adam Dolgos
          </p>
        </div>
        <div className="mb-4 space-x-4">
          {/* Replace with actual links or components for Imprint/Privacy Policy */}
          <span className="text-sm hover:text-primary cursor-pointer">Imprint (Placeholder)</span>
          <span className="text-sm hover:text-primary cursor-pointer">Privacy Policy (Placeholder)</span>
        </div>
        <div className="flex justify-center space-x-6">
          <a 
            href="https://www.instagram.com/iot_smarthomeproject?igsh=dDRtNXZ3eW9zczFv&utm_source=qr" 
            aria-label="Instagram" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-secondary-foreground hover:text-primary transition-colors"
          >
            <Instagram size={24} />
          </a>
          <a 
            href={tiktokUrl} 
            aria-label="TikTok" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-secondary-foreground hover:text-primary transition-colors"
          >
            {/* You might want to find a more specific TikTok icon or use a generic share icon */}
            <MessageSquare size={24} /> 
          </a>
          <a 
            href={facebookUrl} 
            aria-label="Facebook" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-secondary-foreground hover:text-primary transition-colors"
          >
            <Facebook size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;