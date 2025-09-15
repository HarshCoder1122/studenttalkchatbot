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
    <div className="border-t border-gray-200 bg-gray-50/50 px-4 sm:px-6 py-4">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm text-gray-600 mb-3 font-medium">💡 Quick suggestions:</p>
        <div className="flex flex-wrap gap-2">
          {quickSuggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => onSuggestionClick(suggestion.text)}
              disabled={disabled}
              className="px-3 py-2 bg-white text-gray-700 text-sm rounded-lg 
                       border border-gray-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700
                       transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
            >
              {suggestion.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};