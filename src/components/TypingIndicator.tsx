import React from 'react';
import { Bot } from 'lucide-react';

export const TypingIndicator: React.FC = () => {
  return (
    <div className="flex gap-3 mb-6 animate-slide-up">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 
                    text-white flex items-center justify-center shadow-lg animate-float">
        <Bot className="w-4 h-4 animate-pulse" />
      </div>
      
      <div className="max-w-[75%]">
        <div className="inline-block p-4 rounded-2xl rounded-bl-md bg-white/90 backdrop-blur-sm 
                      border border-gray-200/50 shadow-lg animate-pulse-gentle">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
        <div className="text-xs text-gray-500 mt-1 animate-fade-in">
          <span className="inline-flex items-center gap-1">
            Assistant is thinking
            <span className="animate-pulse">...</span>
          </span>
        </div>
      </div>
    </div>
  );
};