import React from 'react';
import { BLOCKS_DATA } from '../constants';

interface MainMenuProps {
  onSelectBlock: (id: number) => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ onSelectBlock }) => {
  const blockColors = {
    blue: 'border-cyan-400/50 hover:border-cyan-400 hover:shadow-[0_0_25px_theme(colors.cyan.400)]',
    purple: 'border-purple-400/50 hover:border-purple-400 hover:shadow-[0_0_25px_theme(colors.purple.400)]',
    green: 'border-green-400/50 hover:border-green-400 hover:shadow-[0_0_25px_theme(colors.green.400)]',
    red: 'border-red-400/50 hover:border-red-400 hover:shadow-[0_0_25px_theme(colors.red.400)]',
    orange: 'border-orange-400/50 hover:border-orange-400 hover:shadow-[0_0_25px_theme(colors.orange.400)]',
  };

  return (
    <div className="text-center animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-white mb-4">Choisissez un Module de Formation</h2>
      <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
        Chaque module est une étape essentielle pour devenir un maillon fort de la chaîne de cybersécurité.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOCKS_DATA.map((block) => {
          const blockName = block.title.split(': ')[1];
          return (
            <div
              key={block.id}
              onClick={() => onSelectBlock(block.id)}
              className={`relative group overflow-hidden rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer border-2 bg-black/50 ${blockColors[block.color]}`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${block.cardImageUrl})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
              
              <div className="relative z-10 flex flex-col items-center justify-between h-80 p-6 text-center text-white">
                <block.icon className="w-16 h-16 opacity-80 group-hover:opacity-100 transition-opacity" style={{ color: block.accentColor }}/>
                
                <h3 className="text-2xl font-bold font-orbitron mt-4 flex-grow flex items-center">{blockName}</h3>
                
                <div
                  className="mt-4 px-8 py-2 font-bold text-cyber-dark rounded-md transition-all duration-300 transform group-hover:scale-105"
                  style={{ 
                      backgroundColor: block.accentColor, 
                      boxShadow: `0 0 15px ${block.accentColor}, 0 0 5px ${block.accentColor} inset`
                  }}
                  aria-label={`Découvrir le module ${blockName}`}
                >
                  Découvrir
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainMenu;