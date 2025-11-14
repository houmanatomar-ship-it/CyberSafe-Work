import React, { useState, useRef } from 'react';
import { analyzeEmailOrUrl, analyzeFile, getQuickTip } from '../services/geminiService';
import type { AnalysisResult } from '../types';

// --- Icons ---
const ScanIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12a5 5 0 0 1 10 0 5 5 0 0 1-10 0Z"/></svg>;
const FileIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="12" x2="12" y1="18" y2="12"/><line x1="9" x2="15" y1="15" y2="15"/></svg>;
const LightbulbIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>;

// --- Helper Components ---
const ToolCard: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode; accentColor: string; }> = ({ title, icon, children, accentColor }) => (
    <div className="bg-gray-900/50 dark:bg-black/30 backdrop-blur-md border border-gray-700 p-6 rounded-lg shadow-xl mb-6">
        <h3 style={{ color: accentColor }} className="text-xl font-bold font-orbitron mb-4 flex items-center">
            <span className="mr-3">{icon}</span>
            {title}
        </h3>
        <div>{children}</div>
    </div>
);

const RiskIndicator: React.FC<{ risk: AnalysisResult['risk'] }> = ({ risk }) => {
    const riskStyles = {
        'Faible': { text: 'Faible', color: 'text-green-400', bg: 'bg-green-900/30', border: 'border-green-500' },
        'Moyen': { text: 'Moyen', color: 'text-yellow-400', bg: 'bg-yellow-900/30', border: 'border-yellow-500' },
        'Élevé': { text: 'Élevé', color: 'text-red-400', bg: 'bg-red-900/30', border: 'border-red-500' },
        'Inconnu': { text: 'Inconnu', color: 'text-gray-400', bg: 'bg-gray-700/30', border: 'border-gray-500' }
    };
    const style = riskStyles[risk];
    return <span className={`px-3 py-1 text-sm font-bold rounded-full ${style.color} ${style.bg}`}>{style.text}</span>;
};

const Loader: React.FC = () => (
    <div className="text-center text-gray-400 my-4">
        <div className="w-6 h-6 border-2 border-dashed rounded-full animate-spin border-cyber-blue mx-auto"></div>
        <p className="mt-2 text-sm">Analyse en cours...</p>
    </div>
);

// --- Main Component ---
const CyberToolbox: React.FC<{ accentColor: string }> = ({ accentColor }) => {
    // State for URL/Email Analyzer
    const [urlInput, setUrlInput] = useState('');
    const [urlResult, setUrlResult] = useState<AnalysisResult | null>(null);
    const [isUrlLoading, setIsUrlLoading] = useState(false);

    // State for File Analyzer
    const [fileInfo, setFileInfo] = useState<{ name: string; type: string; size: number } | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [fileResult, setFileResult] = useState<AnalysisResult | null>(null);
    const [isFileLoading, setIsFileLoading] = useState(false);

    // State for Quick Tip
    const [tip, setTip] = useState('');
    const [isTipLoading, setIsTipLoading] = useState(false);
    
    const handleUrlAnalysis = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!urlInput.trim()) return;
        setIsUrlLoading(true);
        setUrlResult(null);
        const result = await analyzeEmailOrUrl(urlInput);
        setUrlResult(result);
        setIsUrlLoading(false);
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        
        const metadata = { name: file.name, type: file.type, size: file.size };
        setFileInfo(metadata);
        setIsFileLoading(true);
        setFileResult(null);
        const result = await analyzeFile(metadata);
        setFileResult(result);
        setIsFileLoading(false);
    };
    
    const handleGetTip = async () => {
        setIsTipLoading(true);
        setTip('');
        const newTip = await getQuickTip();
        setTip(newTip);
        setIsTipLoading(false);
    };

    return (
        <div>
            <ToolCard title="Analyse d’URL et d’e-mails suspects" icon={<ScanIcon />} accentColor={accentColor}>
                <p className="text-sm text-gray-400 mb-4">Collez une URL, une adresse e-mail ou le corps d'un e-mail pour une analyse de risque instantanée.</p>
                <form onSubmit={handleUrlAnalysis} className="flex flex-col sm:flex-row gap-2">
                    <textarea
                        value={urlInput}
                        onChange={(e) => setUrlInput(e.target.value)}
                        placeholder="https://example.com ou contenu de l'e-mail..."
                        className="flex-grow bg-gray-800 border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-cyber-blue text-sm text-gray-200 h-24 sm:h-auto resize-none"
                        disabled={isUrlLoading}
                    />
                    <button type="submit" className="bg-cyber-blue text-black px-6 py-2 rounded-lg hover:bg-cyber-blue/80 disabled:opacity-50 font-semibold" disabled={isUrlLoading || !urlInput.trim()}>Analyser</button>
                </form>
                {isUrlLoading && <Loader />}
                {urlResult && (
                    <div className="mt-4 p-4 bg-black/30 rounded-lg border border-gray-700">
                        <div className="flex justify-between items-center mb-2">
                            <h4 className="font-bold text-gray-200">Résultat de l'analyse :</h4>
                            <RiskIndicator risk={urlResult.risk} />
                        </div>
                        <p className="text-sm text-gray-300 mb-2"><strong className="text-gray-100">Explication :</strong> {urlResult.explanation}</p>
                        <p className="text-sm text-amber-300"><strong className="text-amber-200">Conseil :</strong> {urlResult.advice}</p>
                    </div>
                )}
            </ToolCard>
            
            <ToolCard title="Vérification rapide des pièces jointes" icon={<FileIcon />} accentColor={accentColor}>
                <p className="text-sm text-gray-400 mb-4">Sélectionnez un fichier pour analyser ses informations (nom, type, taille) et évaluer le risque potentiel. Le fichier ne sera pas téléversé.</p>
                <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
                <button onClick={() => fileInputRef.current?.click()} className="w-full bg-cyber-blue text-black px-6 py-2 rounded-lg hover:bg-cyber-blue/80 disabled:opacity-50 font-semibold" disabled={isFileLoading}>
                    {fileInfo ? `Analyser '${fileInfo.name}'` : 'Choisir un fichier'}
                </button>
                 {isFileLoading && <Loader />}
                {fileResult && fileInfo && (
                     <div className="mt-4 p-4 bg-black/30 rounded-lg border border-gray-700">
                        <div className="flex justify-between items-center mb-2">
                            <h4 className="font-bold text-gray-200">Résultat pour <span className="italic">{fileInfo.name}</span> :</h4>
                            <RiskIndicator risk={fileResult.risk} />
                        </div>
                        <p className="text-sm text-gray-300 mb-2"><strong className="text-gray-100">Explication :</strong> {fileResult.explanation}</p>
                        <p className="text-sm text-amber-300"><strong className="text-amber-200">Conseil :</strong> {fileResult.advice}</p>
                    </div>
                )}
            </ToolCard>
            
            <ToolCard title="Conseil de sécurité rapide" icon={<LightbulbIcon />} accentColor={accentColor}>
                 <p className="text-sm text-gray-400 mb-4">Besoin d'un rappel ? Obtenez un conseil de cybersécurité aléatoire et facile à appliquer.</p>
                 <button onClick={handleGetTip} className="w-full bg-cyber-blue text-black px-6 py-2 rounded-lg hover:bg-cyber-blue/80 disabled:opacity-50 font-semibold" disabled={isTipLoading}>
                    {isTipLoading ? 'Génération...' : 'Obtenir un conseil'}
                 </button>
                 {isTipLoading && <div className="h-10"></div>}
                 {tip && (
                    <div className="mt-4 p-4 bg-black/30 rounded-lg border-l-4" style={{ borderColor: accentColor }}>
                        <p className="text-lg italic text-gray-200 text-center">"{tip}"</p>
                    </div>
                 )}
            </ToolCard>
        </div>
    );
};

export default CyberToolbox;
