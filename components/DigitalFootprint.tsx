import React, { useState, useEffect } from 'react';

// --- Icon ---
const FingerprintIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...props },
        React.createElement("path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" }),
        React.createElement("path", { d: "M14 13.12c0 2.38 0 6.38-1 8.88" }),
        React.createElement("path", { d: "M17.29 21.02c.12-.6.43-2.3.5-3.02" }),
        React.createElement("path", { d: "M2 12a10 10 0 0 1 10-10c.94 0 1.84.13 2.69.35" }),
        React.createElement("path", { d: "M20 21a10 10 0 0 0-10-10" }),
        React.createElement("path", { d: "M10 22c-3.33 0-5.46-1.44-6-4" }),
        React.createElement("path", { d: "M22 12c0 3.33-1.44 5.46-4 6" })
    )
);

// --- Helper Components ---
const DataPoint: React.FC<{ label: string; value: string; explanation: string; accentColor: string; }> = ({ label, value, explanation, accentColor }) => (
    <div className="py-4 border-b border-gray-700/50 last:border-b-0">
        <p className="text-sm font-semibold" style={{ color: accentColor }}>{label}</p>
        <p className="text-md font-mono text-gray-200 break-words mt-1 bg-black/20 p-2 rounded">{value}</p>
        <p className="text-xs text-gray-400 mt-2 italic">{explanation}</p>
    </div>
);

const DigitalFootprint: React.FC<{ accentColor: string }> = ({ accentColor }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [footprintData, setFootprintData] = useState<Record<string, string>>({});

    useEffect(() => {
        const collectData = async () => {
            setIsLoading(true);
            const data: Record<string, string> = {};

            // Fetch IP Address
            try {
                const response = await fetch('https://api.ipify.org?format=json');
                const ipData = await response.json();
                data['Adresse IP Publique'] = ipData.ip;
            } catch (error) {
                data['Adresse IP Publique'] = "Impossible de récupérer. Votre bloqueur de pub est peut-être actif.";
            }

            // Browser, OS, Platform
            data['Navigateur & Version (User-Agent)'] = navigator.userAgent;
            data['Système d\'exploitation'] = navigator.platform;

            // Screen & Language
            data['Résolution d\'écran'] = `${window.screen.width} x ${window.screen.height}`;
            data['Langue préférée'] = navigator.language;

            // Timezone
            try {
                data['Fuseau Horaire'] = Intl.DateTimeFormat().resolvedOptions().timeZone;
            } catch (e) {
                data['Fuseau Horaire'] = 'Indisponible';
            }
            
            // Cookies
            const cookieString = document.cookie;
            if (cookieString) {
                data['Cookies (pour ce site)'] = cookieString.split(';').join('; ');
            } else {
                data['Cookies (pour ce site)'] = "Aucun cookie trouvé.";
            }

            setFootprintData(data);
            // Simulate a slight delay to make it feel like "collection"
            setTimeout(() => setIsLoading(false), 500);
        };

        collectData();
    }, []);

    const explanations: Record<string, string> = {
        'Adresse IP Publique': "Révèle votre fournisseur d'accès et votre localisation géographique approximative.",
        'Navigateur & Version (User-Agent)': "Détaillé, cet 'User-Agent' est un élément clé de votre empreinte numérique unique pour le pistage publicitaire.",
        'Système d\'exploitation': "Une autre information qui, combinée aux autres, affine votre profil et peut révéler des vulnérabilités.",
        'Résolution d\'écran': "Semble anodin, mais c'est un point de données très efficace pour vous identifier de manière unique parmi des millions d'utilisateurs.",
        'Langue préférée': "Permet de cibler le contenu et les publicités, mais aussi de déduire votre nationalité ou origine.",
        'Fuseau Horaire': "Confirme votre localisation géographique et vos heures d'activité.",
        'Cookies (pour ce site)': "Ce site a placé ces 'mouchards' sur votre navigateur. D'autres sites en placent aussi pour suivre vos visites et vos habitudes."
    };

    return (
        <div>
            <div className="text-center p-4 mb-6 bg-red-900/30 border border-red-500 rounded-lg animate-fade-in">
                <h3 className="text-xl font-bold font-orbitron text-red-400">ALERTE : VOS DONNÉES SONT EXPOSÉES</h3>
                <p className="text-gray-300 mt-2">Vous pensiez naviguer en toute discrétion ? Voici ce qu'une simple page web comme celle-ci a collecté sur vous en quelques secondes. C'est ce que font de nombreux sites, souvent à votre insu.</p>
            </div>
            
            <div className="bg-gray-900/50 dark:bg-black/30 backdrop-blur-md border border-gray-700 p-6 rounded-lg shadow-xl animate-fade-in" style={{animationDelay: '0.2s'}}>
                 <h3 style={{ color: accentColor }} className="text-2xl font-bold font-orbitron mb-4 flex items-center">
                    <FingerprintIcon className="w-6 h-6 mr-3" />
                    Profil Utilisateur Détecté
                </h3>
                {isLoading ? (
                    <div className="flex items-center justify-center text-gray-400 h-64">
                        <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-cyber-blue mr-4"></div>
                        <span>Analyse de votre connexion...</span>
                    </div>
                ) : (
                    <div>
                        {Object.entries(footprintData).map(([key, value]) => (
                             <DataPoint 
                                key={key}
                                label={key}
                                value={value}
                                explanation={explanations[key] || ''}
                                accentColor={accentColor}
                             />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DigitalFootprint;