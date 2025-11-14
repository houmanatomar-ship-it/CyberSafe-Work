// Fix: Import FC and SVGProps from React to resolve type errors.
import type { FC, SVGProps } from 'react';

export interface QuizItem {
  question: string;
  answer: string;
  justification?: string;
  example?: string;
}

export interface DicContent {
  availability: string;
  integrity: string;
  confidentiality: string;
}

export interface Definition {
  term: string;
  definition: string;
  imagePrompt: string;
}

export interface BlockData {
  id: number;
  title: string;
  theme: string;
  quiz: QuizItem[];
  definitions: Definition[];
  takeaway: string;
  dic: DicContent;
  history: string;
  example: string;
  measures: string[];
  remarks: string;
  imageUrl: string;
  cardImageUrl: string;
  color: 'blue' | 'purple' | 'green' | 'red' | 'orange';
  accentColor: string;
  // Fix: Use imported FC and SVGProps types.
  icon: FC<SVGProps<SVGSVGElement>>;
  positivePrompt: string;
  negativePrompt: string;
}

export interface ChatMessage {
    sender: 'user' | 'bot';
    text: string;
}

export interface AnalysisResult {
  risk: 'Faible' | 'Moyen' | 'Élevé' | 'Inconnu';
  explanation: string;
  advice: string;
}