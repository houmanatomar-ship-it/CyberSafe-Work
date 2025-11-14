



import { GoogleGenAI, Modality, Type } from "@google/genai";
import type { AnalysisResult } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    console.error("Gemini API key is not set. Please set the API_KEY environment variable.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

const textModel = 'gemini-2.5-flash';
const imageModel = 'gemini-2.5-flash-image';

const systemInstruction = `
Vous êtes CyberHelper, un assistant IA amical et pédagogique spécialisé en cybersécurité. 
Votre ton est bienveillant, formateur et neutre. Vous répondez toujours en français.
Lorsque l'utilisateur colle un lien ou un e-mail, fournissez une analyse simulée et des conseils pratiques.
Par exemple, pour 'micros0ft.com', soulignez l'utilisation du chiffre '0' à la place de la lettre 'o' comme technique de tromperie.
Expliquez clairement des concepts comme DIC (Disponibilité, Intégrité, Confidentialité) si on vous le demande.
Restez concis et direct dans vos réponses.
`;

export const getCyberHelperResponse = async (prompt: string): Promise<string> => {
    if (!API_KEY) {
        return "Erreur: La clé API Gemini n'est pas configurée.";
    }

    try {
        const response = await ai.models.generateContent({
            model: textModel,
            contents: prompt,
            config: {
                systemInstruction: systemInstruction,
            },
        });
        return response.text;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        return "Désolé, une erreur s'est produite. Veuillez réessayer plus tard.";
    }
};

export const generateImage = async (prompt: string): Promise<string> => {
    if (!API_KEY) {
        throw new Error("La clé API Gemini n'est pas configurée.");
    }
    try {
        const response = await ai.models.generateContent({
            model: imageModel,
            contents: {
                parts: [{ text: prompt }],
            },
            config: {
                responseModalities: [Modality.IMAGE],
            },
        });
        
        if (response.candidates && response.candidates.length > 0) {
            for (const part of response.candidates[0].content.parts) {
                if (part.inlineData) {
                    const base64ImageBytes: string = part.inlineData.data;
                    const mimeType = part.inlineData.mimeType;
                    return `data:${mimeType};base64,${base64ImageBytes}`;
                }
            }
        }
        
        throw new Error("Aucune image n'a été générée par le modèle.");

    } catch (error) {
        console.error("Error calling Gemini Image API:", error);
        let errorMessage = "Désolé, une erreur s'est produite lors de la génération de l'image.";
        if (error instanceof Error && (error.message.includes('SAFETY') || error.message.includes('blocked'))) {
            errorMessage += " Le contenu a peut-être été bloqué pour des raisons de sécurité.";
        }
        throw new Error(errorMessage);
    }
};

const analysisSchema = {
    type: Type.OBJECT,
    properties: {
        risk: {
            type: Type.STRING,
            enum: ['Faible', 'Moyen', 'Élevé', 'Inconnu'],
            description: "Le niveau de risque évalué."
        },
        explanation: {
            type: Type.STRING,
            description: "Une explication courte (1-2 phrases) justifiant le niveau de risque."
        },
        advice: {
            type: Type.STRING,
            description: "Un conseil pratique et concis pour l'utilisateur."
        },
    },
    required: ['risk', 'explanation', 'advice']
};


export const analyzeEmailOrUrl = async (content: string): Promise<AnalysisResult> => {
    if (!API_KEY) throw new Error("La clé API Gemini n'est pas configurée.");

    const prompt = `Analyse le contenu suivant pour détecter des signes de phishing, de malware ou d'arnaque. Le contenu peut être un corps d'e-mail, une URL, ou une adresse e-mail. Évalue le niveau de risque (Faible, Moyen, Élevé, Inconnu), fournis une brève explication, et donne un conseil pratique.

Contenu à analyser : "${content}"`;

    try {
        const response = await ai.models.generateContent({
            model: textModel,
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: analysisSchema,
            },
        });
        const jsonStr = response.text.trim();
        return JSON.parse(jsonStr) as AnalysisResult;
    } catch (error) {
        console.error("Error analyzing email/URL:", error);
        return {
            risk: 'Inconnu',
            explanation: "L'analyse n'a pas pu être complétée.",
            advice: "Veuillez réessayer ou faire preuve de prudence."
        };
    }
};

export const analyzeFile = async (file: { name: string; type: string; size: number }): Promise<AnalysisResult> => {
    if (!API_KEY) throw new Error("La clé API Gemini n'est pas configurée.");

    const prompt = `Analyse les métadonnées de ce fichier pour évaluer un risque potentiel de sécurité (malware, phishing). Ne te base que sur ces informations : nom, type MIME, taille. Par exemple, une double extension ('.pdf.exe'), un type de fichier souvent risqué ('.zip', '.exe', '.scr') ou une taille inhabituelle peuvent être des indicateurs. Évalue le niveau de risque, fournis une explication, et donne un conseil.

Métadonnées :
- Nom : ${file.name}
- Type : ${file.type || 'inconnu'}
- Taille : ${file.size} octets`;

    try {
        const response = await ai.models.generateContent({
            model: textModel,
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: analysisSchema,
            },
        });
        const jsonStr = response.text.trim();
        return JSON.parse(jsonStr) as AnalysisResult;
    } catch (error) {
        console.error("Error analyzing file metadata:", error);
        return {
            risk: 'Inconnu',
            explanation: "L'analyse n'a pas pu être complétée.",
            advice: "Ne jamais ouvrir une pièce jointe d'un expéditeur inconnu."
        };
    }
};

export const getQuickTip = async (): Promise<string> => {
    if (!API_KEY) return "Erreur: La clé API Gemini n'est pas configurée.";
    
    const prompt = "Donne-moi un conseil de cybersécurité court, pratique et facile à comprendre pour un débutant. Le conseil doit être une seule phrase percutante.";
    try {
        const response = await ai.models.generateContent({
            model: textModel,
            contents: prompt
        });
        return response.text;
    } catch (error) {
        console.error("Error getting quick tip:", error);
        return "Activez toujours l'authentification à deux facteurs (MFA) sur vos comptes.";
    }
};
