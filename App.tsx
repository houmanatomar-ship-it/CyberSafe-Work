import React, { useState, useEffect } from 'react';
import { BLOCKS_DATA } from './constants';
import type { BlockData } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import MainMenu from './components/MainMenu';
import BlockView from './components/BlockView';
import CyberHelper from './components/CyberHelper';

const App: React.FC = () => {
  const [selectedBlock, setSelectedBlock] = useState<BlockData | null>(null);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const handleSelectBlock = (blockId: number) => {
    const block = BLOCKS_DATA.find(b => b.id === blockId);
    if (block) {
      setSelectedBlock(block);
      window.scrollTo(0, 0);
    }
  };

  const handleGoHome = () => {
    setSelectedBlock(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-cyber-dark text-gray-800 dark:text-gray-200 font-roboto transition-colors duration-500">
      <div className="absolute top-0 left-0 w-full h-full bg-grid z-0"></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header toggleTheme={toggleTheme} currentTheme={theme} />
        <main className="flex-grow container mx-auto p-4 md:p-8">
          {selectedBlock ? (
            <BlockView block={selectedBlock} onGoHome={handleGoHome} />
          ) : (
            <MainMenu onSelectBlock={handleSelectBlock} />
          )}
        </main>
        <CyberHelper />
        <Footer />
      </div>
    </div>
  );
};

export default App;
