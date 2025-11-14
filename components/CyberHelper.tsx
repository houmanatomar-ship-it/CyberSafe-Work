import React, { useState, useRef, useEffect } from 'react';
import type { ChatMessage } from '../types';
import { getCyberHelperResponse } from '../services/geminiService';

const CyberHelper: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: 'bot', text: 'Bonjour ! Je suis CyberHelper. Comment puis-je vous aider avec la cybersécurité ?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = { sender: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const botResponseText = await getCyberHelperResponse(inputValue);
      const botMessage: ChatMessage = { sender: 'bot', text: botResponseText };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = { sender: 'bot', text: 'Désolé, une erreur est survenue.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-cyber-blue text-cyber-dark w-16 h-16 rounded-full shadow-lg flex items-center justify-center text-3xl hover:bg-cyber-blue/80 transition-transform transform hover:scale-110 shadow-cyber-blue/50"
        aria-label="Ouvrir CyberHelper"
      >
        🤖
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-[90vw] max-w-sm h-[70vh] max-h-[600px] flex flex-col bg-white dark:bg-cyber-dark rounded-xl shadow-2xl border border-gray-200 dark:border-cyber-blue/50 z-50 animate-fade-in">
      <div className="flex justify-between items-center p-4 bg-cyber-blue/20 text-white rounded-t-xl border-b border-cyber-blue/50">
        <h3 className="font-bold font-orbitron text-lg text-cyber-blue">CyberHelper</h3>
        <button onClick={() => setIsOpen(false)} className="text-2xl font-bold text-cyber-blue/80 hover:text-cyber-blue">&times;</button>
      </div>

      <div className="flex-grow p-4 overflow-y-auto bg-gray-100 dark:bg-cyber-dark/80">
        {messages.map((msg, index) => (
          <div key={index} className={`flex mb-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`rounded-lg px-4 py-2 max-w-[80%] ${msg.sender === 'user' ? 'bg-cyber-blue text-black' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}>
              <p className="text-sm">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="rounded-lg px-4 py-2 bg-gray-200 dark:bg-gray-700">
              <span className="animate-pulse text-gray-400">...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 dark:border-cyber-blue/50 bg-white dark:bg-cyber-dark">
        <div className="flex items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Posez votre question..."
            className="flex-grow bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-cyber-blue text-sm text-gray-800 dark:text-gray-200"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="bg-cyber-blue text-black px-4 py-2 rounded-r-lg hover:bg-cyber-blue/80 disabled:bg-cyber-blue/30 font-semibold"
            disabled={isLoading || !inputValue.trim()}
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default CyberHelper;
