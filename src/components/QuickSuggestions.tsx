import React from 'react';
import { quickSuggestions } from '../data/responses';

interface QuickSuggestionsProps {
  onSuggestionClick: (suggestion: string) => void;
  disabled?: boolean;
}

export const QuickSuggestions: React.FC<QuickSuggestionsProps> = ({ 
  onSuggestionClick, 
  disabled = false 
}) => {
  return (
    <div className="p-6 bg-gradient-to-r from-gray-50/80 to-blue-50/80 backdrop-blur-sm border-t border-gray-200/50">
      <p className="text-sm text-gray-700 mb-4 font-semibold animate-fade-in">✨ Quick suggestions:</p>
      <div className="flex flex-wrap gap-2">
        {quickSuggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onSuggestionClick(suggestion.text)}
            disabled={disabled}
            className="px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-700 text-sm rounded-full 
                     border border-gray-300/50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 
                     hover:border-blue-400 hover:text-blue-700 
                     transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                     shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1
                     group relative overflow-hidden animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-blue-400/0 
                          transform -translate-x-full group-hover:translate-x-full 
                          transition-transform duration-500"></div>
            <span className="relative z-10">
            {suggestion.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};