import React from 'react';
import { OFPPT_LOGO_SVG } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/5 dark:bg-black/20 backdrop-blur-sm mt-8 border-t border-white/10">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 dark:text-gray-500">
        <p className="text-center sm:text-left mb-2 sm:mb-0">
          © 2025 OFPPT – Programme CyberSafe@Work – Animateur : Omar Houmanat.
        </p>
        <div 
          className="h-10" 
          dangerouslySetInnerHTML={{ __html: OFPPT_LOGO_SVG }} 
        />
      </div>
    </footer>
  );
};

export default Footer;
