import React from 'react';
import { Bot } from 'lucide-react';

export const TypingIndicator: React.FC = () => {
  return (
    <div className="flex gap-3 mb-4 animate-fade-in">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 text-gray-600 border border-gray-200 
                    flex items-center justify-center">
        <Bot className="w-4 h-4" />
      </div>
      
      <div className="max-w-[80%]">
        <div className="inline-block px-4 py-3 rounded-2xl rounded-bl-md bg-white border border-gray-200 shadow-sm">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
        <div className="text-xs text-gray-500 mt-1">
          Aspirofy is typing...
        </div>
      </div>
    </div>
  );
};