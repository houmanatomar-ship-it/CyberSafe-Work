import React from 'react';

interface HeaderProps {
  toggleTheme: () => void;
  currentTheme: 'dark' | 'light';
}

const SunIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
);

const MoonIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
);


const Header: React.FC<HeaderProps> = ({ toggleTheme, currentTheme }) => {
  return (
    <header className="bg-white/5 dark:bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-left">
          <h1 className="text-2xl md:text-4xl font-bold font-orbitron text-cyber-blue">
            CyberSafe@Work
          </h1>
          <p className="text-gray-300 dark:text-gray-400 mt-1 text-sm md:text-base animate-slogan opacity-0">
            Apprenez à repérer, prévenir et réagir face aux cybermenaces.
          </p>
        </div>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full text-cyber-blue hover:bg-cyber-blue/20 transition-colors"
          aria-label="Toggle theme"
        >
          {currentTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
