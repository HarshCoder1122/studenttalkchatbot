import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 px-4 sm:px-6 py-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-sm text-gray-600">Made with</span>
          <Heart className="w-4 h-4 text-red-500 fill-current" />
          <span className="text-sm text-gray-600">for students in J&K</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm mb-4">
          <a 
            href="https://jkbose.ac.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
          >
            J&K Board of Education
            <ExternalLink className="w-3 h-3" />
          </a>
          <a 
            href="https://scholarships.gov.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
          >
            National Scholarship Portal
            <ExternalLink className="w-3 h-3" />
          </a>
          <a 
            href="https://www.ugc.ac.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
          >
            UGC
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
        
        <p className="text-xs text-gray-500">
          This chatbot provides general guidance. Please verify information with official college websites and admission offices.
        </p>
      </div>
    </footer>
  );
};