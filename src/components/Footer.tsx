import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-8 py-6 px-4 text-center text-gray-600 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-sm">Made with</span>
          <Heart className="w-4 h-4 text-red-500 fill-current" />
          <span className="text-sm">for J&K students</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a 
            href="https://jkbose.ac.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span>J&K Board of Education</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a 
            href="https://scholarships.gov.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span>National Scholarship Portal</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a 
            href="https://www.ugc.ac.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span>UGC India</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
        
        <p className="mt-4 text-xs text-gray-500">
          This chatbot provides general guidance. Please verify information with official college websites and admission offices.
        </p>
      </div>
    </footer>
  );
};