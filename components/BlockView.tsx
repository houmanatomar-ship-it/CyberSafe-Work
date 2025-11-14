import React, { useState, useEffect, useRef } from 'react';
import type { BlockData } from '../types';
import { generateImage } from '../services/geminiService';
import CyberToolbox from './CyberToolbox';
import DigitalFootprint from './DigitalFootprint';
import ImageModal from './ImageModal';

const Card: React.FC<{ title: string; children: React.ReactNode; icon?: string; accentColor: string; }> = ({ title, children, icon, accentColor }) => (
  <div className="bg-gray-900/50 dark:bg-black/30 backdrop-blur-md border border-gray-700 p-6 rounded-lg shadow-xl mb-6">
    <h3 style={{ color: accentColor }} className="text-xl font-bold font-orbitron mb-4 flex items-center">
      {icon && <span className="mr-3 text-2xl">{icon}</span>}
      {title}
    </h3>
    <div className="prose prose-invert prose-p:text-gray-300 prose-li:text-gray-300 max-w-none">{children}</div>
  </div>
);

// --- ImageQuiz Component ---
interface ImageQuizProps {
  positivePrompt: string;
  negativePrompt: string;
  accentColor: string;
}

const ImageQuiz: React.FC<ImageQuizProps> = ({ positivePrompt, negativePrompt, accentColor }) => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentImage, setCurrentImage] = useState<{ url: string; isDeceptive: boolean } | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [userAnswer, setUserAnswer] = useState<boolean | null>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    // Cleanup timer on component unmount
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);
  
  const generateNewImage = async () => {
    setIsLoading(true);
    setError(null);
    setShowExplanation(false);
    setUserAnswer(null);
    setCurrentImage(null);

    try {
      const isDeceptive = Math.random() > 0.5;
      const prompt = isDeceptive ? negativePrompt : positivePrompt;
      const imageUrl = await generateImage(prompt);
      setCurrentImage({ url: imageUrl, isDeceptive });
    } catch (err) {
      setError("La génération de l'image a échoué. Cela peut être dû à une forte demande ou à des filtres de sécurité. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleStartQuiz = () => {
    setQuizStarted(true);
    generateNewImage();
  };
  
  const handleAnswer = (guessedDeceptive: boolean) => {
    if (showExplanation || !currentImage) return;

    setUserAnswer(guessedDeceptive);
    setShowExplanation(true);
    
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = window.setTimeout(() => {
      generateNewImage(); // Generate the next image
    }, 10000); // 10 seconds
  };
  
  if (!quizStarted) {
    return (
      <div className="text-center">
        <button
          onClick={handleStartQuiz}
          className="bg-cyber-orange text-white font-bold py-3 px-8 rounded-lg hover:bg-cyber-orange/80 transition-transform transform hover:scale-105 duration-300"
        >
          Tester vos compétences
        </button>
      </div>
    );
  }

  const isCorrect = userAnswer !== null && currentImage !== null && userAnswer === currentImage.isDeceptive;
  
  let explanationText = '';
  if (showExplanation) {
    if (isCorrect) {
        explanationText = currentImage?.isDeceptive 
            ? "Bien vu ! Ce scénario présentait des signes de menace que vous avez su identifier."
            : "Exact ! Ce scénario illustre une bonne pratique de sécurité.";
    } else {
        explanationText = currentImage?.isDeceptive
            ? "Attention, ce scénario était trompeur. Il est crucial d'apprendre à reconnaître ces risques."
            : "En réalité, ce scénario montrait une pratique sécuritaire. C'est une bonne habitude à adopter.";
    }
  }

  return (
    <div>
        <div className="relative mt-4 p-4 border rounded-lg min-h-[300px] flex items-center justify-center bg-black/20" style={{ borderColor: accentColor }}>
            {isLoading && (
                <div className="text-center text-gray-400">
                    <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-cyber-blue mx-auto"></div>
                    <p className="mt-3">Génération de l'image en cours...</p>
                </div>
            )}
            {error && <p className="text-red-400">{error}</p>}
            {currentImage && !isLoading && (
                <img src={currentImage.url} alt="Quiz visuel de cybersécurité" className="w-full h-auto object-contain rounded-lg max-h-96" />
            )}
        </div>

      {showExplanation && currentImage ? (
        <div className={`mt-4 p-4 rounded-lg text-center border ${isCorrect ? 'bg-green-900/30 border-green-500' : 'bg-red-900/30 border-red-500'}`}>
          <h4 className={`font-bold text-lg ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
            {isCorrect ? 'Correct !' : 'Incorrect.'}
          </h4>
          <p className="text-gray-300 mt-2">{explanationText}</p>
          <div className="w-full bg-gray-700 rounded-full h-1.5 mt-3 overflow-hidden">
            <div className="bg-cyber-blue h-1.5 rounded-full" style={{animation: 'progress 10s linear forwards'}}></div>
            <style>{`
              @keyframes progress {
                from { width: 100% }
                to { width: 0% }
              }
            `}</style>
          </div>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button
            onClick={() => handleAnswer(true)}
            disabled={isLoading || !currentImage}
            className="flex-1 bg-red-500/80 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-500 transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Choisir : image trompeuse"
          >
            👎 Trompeuse
          </button>
          <button
            onClick={() => handleAnswer(false)}
            disabled={isLoading || !currentImage}
            className="flex-1 bg-green-500/80 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-500 transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
             aria-label="Choisir : image sûre"
          >
            👍 Sûre
          </button>
        </div>
      )}
    </div>
  );
};

// Fix: Define BlockViewProps interface to resolve missing type error.
interface BlockViewProps {
  block: BlockData;
  onGoHome: () => void;
}

const BlockView: React.FC<BlockViewProps> = ({ block, onGoHome }) => {
    const [visibleJustifications, setVisibleJustifications] = useState<Record<number, boolean>>({});
    const [visibleDefinitions, setVisibleDefinitions] = useState<Record<string, boolean>>({});
    const [generatedImageUrls, setGeneratedImageUrls] = useState<Record<string, string>>({});
    const [imageLoadingStates, setImageLoadingStates] = useState<Record<string, boolean>>({});
    const [imageErrorStates, setImageErrorStates] = useState<Record<string, string>>({});
    const [fullscreenImageUrl, setFullscreenImageUrl] = useState<string | null>(null);


    useEffect(() => {
        try {
            const storedImages = localStorage.getItem('cybersafe-generated-images');
            if (storedImages) {
                setGeneratedImageUrls(JSON.parse(storedImages));
            }
        } catch (error) {
            console.error("Impossible de charger les images depuis localStorage", error);
        }
    }, []);

    const toggleJustification = (index: number) => {
        setVisibleJustifications(prev => ({ ...prev, [index]: !prev[index] }));
    };

    const toggleDefinition = async (term: string) => {
        const isOpening = !visibleDefinitions[term];
        setVisibleDefinitions(prev => ({ ...prev, [term]: isOpening }));

        // Generate image only when opening for the first time and if it doesn't exist
        if (isOpening && !generatedImageUrls[term] && !imageLoadingStates[term]) {
            const definition = block.definitions.find(d => d.term === term);
            if (definition) {
                setImageLoadingStates(prev => ({ ...prev, [term]: true }));
                setImageErrorStates(prev => {
                    const newErrors = { ...prev };
                    delete newErrors[term];
                    return newErrors;
                });
                
                try {
                    const imageUrl = await generateImage(definition.imagePrompt);
                    setGeneratedImageUrls(prev => {
                        const newUrls = { ...prev, [term]: imageUrl };
                        try {
                            localStorage.setItem('cybersafe-generated-images', JSON.stringify(newUrls));
                        } catch (storageError) {
                            console.warn("Avertissement : Impossible de sauvegarder l'image générée dans le stockage local.", storageError);
                        }
                        return newUrls;
                    });
                } catch (err) {
                    const errorMessage = err instanceof Error ? err.message : "Une erreur inconnue est survenue.";
                    setImageErrorStates(prev => ({ ...prev, [term]: errorMessage }));
                } finally {
                    setImageLoadingStates(prev => ({ ...prev, [term]: false }));
                }
            }
        }
    };


    if (block.id === 6 || block.id === 7) {
        const renderToolbox = () => {
            if (block.id === 6) return <CyberToolbox accentColor={block.accentColor} />;
            if (block.id === 7) return <DigitalFootprint accentColor={block.accentColor} />;
            return null;
        };
        return (
            <div className="animate-fade-in">
                <button
                  onClick={onGoHome}
                  className="mb-6 bg-cyber-orange/80 text-white font-bold py-2 px-4 rounded-lg hover:bg-cyber-orange transition-colors duration-300"
                >
                  &larr; Retour au menu
                </button>
                <div className="bg-gray-900/50 dark:bg-black/30 backdrop-blur-md border border-gray-700 p-6 md:p-8 rounded-lg shadow-2xl mb-8">
                    <h2 className="text-3xl font-bold font-orbitron" style={{ color: block.accentColor }}>{block.title}</h2>
                    <p className="text-gray-400 text-lg mt-1">{block.theme}</p>
                </div>
                {renderToolbox()}
            </div>
        );
    }

  return (
    <div className="animate-fade-in">
      <button
        onClick={onGoHome}
        className="mb-6 bg-cyber-orange/80 text-white font-bold py-2 px-4 rounded-lg hover:bg-cyber-orange transition-colors duration-300"
      >
        &larr; Retour au menu
      </button>

      <div className="bg-gray-900/50 dark:bg-black/30 backdrop-blur-md border border-gray-700 p-6 md:p-8 rounded-lg shadow-2xl mb-8">
        <div className="w-full h-48 md:h-64 rounded-lg mb-6 bg-black/20 flex items-center justify-center">
            <img src={block.imageUrl} alt={block.title} className="max-w-full max-h-full object-contain" />
        </div>
        <h2 className="text-3xl font-bold font-orbitron" style={{ color: block.accentColor }}>{block.title}</h2>
        <p className="text-gray-400 text-lg mt-1">{block.theme}</p>
      </div>

      <Card title="Quiz : Testez vos connaissances" icon="❓" accentColor={block.accentColor}>
        <ul className="space-y-4">
          {block.quiz.map((item, index) => (
            <li key={index} className="border-l-4 pl-4" style={{ borderColor: block.accentColor }}>
              <p className="font-semibold text-gray-200">{item.question}</p>
              <p className="text-green-400 flex items-start mt-1">
                <span className="text-xl mr-2">✅</span>
                <span>{item.answer}</span>
              </p>
               {item.justification && (
                <div className="mt-2">
                    <button
                        onClick={() => toggleJustification(index)}
                        className="text-sm font-semibold py-1 px-3 rounded hover:opacity-80 transition-opacity"
                        style={{ color: block.accentColor, backgroundColor: `${block.accentColor}20` }}
                    >
                        {visibleJustifications[index] ? 'Cacher la justification' : 'Afficher la justification'}
                    </button>
                    {visibleJustifications[index] && (
                        <div className="mt-2 p-3 rounded-md border animate-fade-in-fast" style={{ backgroundColor: `${block.accentColor}15`, borderColor: `${block.accentColor}80`}}>
                            <p className="text-gray-300">{item.justification}</p>
                            {item.example && <p className="text-sm text-gray-400 mt-2 italic"><strong className="font-semibold">Exemple concret :</strong> {item.example}</p>}
                        </div>
                    )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </Card>
      
      <Card title="Définitions Clés" icon="📖" accentColor={block.accentColor}>
        <ul className="space-y-2">
            {block.definitions.map((def, index) => (
                <li key={index} className="py-3 border-b border-gray-800 last:border-b-0">
                    <div className="flex justify-between items-center">
                        <p className="font-semibold text-gray-200 text-lg">{def.term}</p>
                        <button
                            onClick={() => toggleDefinition(def.term)}
                            className="text-sm font-semibold py-1 px-4 rounded-full hover:opacity-80 transition-opacity"
                            style={{ color: block.accentColor, backgroundColor: `${block.accentColor}20` }}
                        >
                            {visibleDefinitions[def.term] ? 'Réduire' : 'Définir'}
                        </button>
                    </div>
                    {visibleDefinitions[def.term] && (
                        <div className="mt-3 animate-fade-in-fast">
                            <p className="text-gray-300 mb-4">{def.definition}</p>
                            <div className="mt-4 p-2 bg-black/20 rounded-lg flex justify-center items-center min-h-[100px] border border-gray-700">
                                {imageLoadingStates[def.term] && (
                                    <div className="text-center text-gray-400">
                                        <div className="w-6 h-6 border-2 border-dashed rounded-full animate-spin border-cyber-blue mx-auto"></div>
                                        <p className="mt-2 text-sm">Génération du schéma...</p>
                                    </div>
                                )}
                                {imageErrorStates[def.term] && (
                                    <p className="text-red-400 text-sm text-center">
                                        Erreur de génération.<br/>
                                        {imageErrorStates[def.term]}
                                    </p>
                                )}
                                {generatedImageUrls[def.term] && !imageLoadingStates[def.term] && (
                                    <img 
                                        src={generatedImageUrls[def.term]} 
                                        alt={`Schéma pour ${def.term}`} 
                                        className="max-w-full h-auto max-h-56 object-contain rounded cursor-pointer hover:opacity-80 transition-opacity"
                                        onClick={() => setFullscreenImageUrl(generatedImageUrls[def.term])}
                                    />
                                )}
                            </div>
                        </div>
                    )}
                </li>
            ))}
        </ul>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card title="À retenir" icon="💡" accentColor={block.accentColor}>
          <p className="text-lg text-gray-200">{block.takeaway}</p>
        </Card>

        <Card title="Remarques clés" icon="🔑" accentColor={block.accentColor}>
          <p className="text-gray-300">{block.remarks}</p>
        </Card>
      </div>

      <Card title="Disponibilité – Intégrité – Confidentialité (DIC)" icon="🛡️" accentColor={block.accentColor}>
        <ul className="space-y-2 list-disc list-inside text-gray-300">
          <li><strong>Disponibilité :</strong> {block.dic.availability}</li>
          <li><strong>Intégrité :</strong> {block.dic.integrity}</li>
          <li><strong>Confidentialité :</strong> {block.dic.confidentiality}</li>
        </ul>
      </Card>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Mesures de sécurité" icon="📋" accentColor={block.accentColor}>
          <ul className="space-y-2 list-disc list-inside text-gray-300">
            {block.measures.map((measure, index) => (
              <li key={index}>{measure}</li>
            ))}
          </ul>
        </Card>

        <Card title="Historique & Exemple" icon="📜" accentColor={block.accentColor}>
          <p className="text-gray-300 mb-4">{block.history}</p>
          <p className="border-t border-gray-600 pt-4 mt-4 text-gray-300"><strong className="text-gray-200">Exemple concret :</strong> {block.example}</p>
        </Card>
      </div>

      <Card title="Quiz Visuel : Sûr ou Trompeur ?" icon="👁️" accentColor={block.accentColor}>
        <p className="mb-4 text-gray-400">
          Testez votre capacité à discerner le vrai du faux. Cliquez sur le bouton ci-dessous pour commencer le défi. Une image sera générée, et vous devrez décider si elle représente un scénario sûr ou une menace.
        </p>
        <div className="not-prose">
          <ImageQuiz 
            positivePrompt={block.positivePrompt}
            negativePrompt={block.negativePrompt}
            accentColor={block.accentColor}
          />
        </div>
      </Card>

      <button
        onClick={onGoHome}
        className="mt-6 w-full bg-cyber-orange/80 text-white font-bold py-3 px-4 rounded-lg hover:bg-cyber-orange transition-colors duration-300"
      >
        &larr; Retour au menu
      </button>

        {fullscreenImageUrl && (
            <ImageModal src={fullscreenImageUrl} onClose={() => setFullscreenImageUrl(null)} />
        )}
    </div>
  );
};

export default BlockView;