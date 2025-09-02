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
    <div className="p-4 bg-gray-50 border-t border-gray-200">
      <p className="text-sm text-gray-600 mb-3 font-medium">Quick suggestions:</p>
      <div className="flex flex-wrap gap-2">
        {quickSuggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onSuggestionClick(suggestion.text)}
            disabled={disabled}
            className="px-3 py-2 bg-white text-gray-700 text-sm rounded-full border border-gray-300 
                     hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 
                     transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
                     shadow-sm hover:shadow-md transform hover:scale-105"
          >
            {suggestion.text}
          </button>
        ))}
      </div>
    </div>
  );
};