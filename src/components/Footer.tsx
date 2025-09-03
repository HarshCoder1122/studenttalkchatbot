import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-8 py-6 px-4 text-center text-gray-300 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-sm">Made with</span>
          <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse hover:scale-125 transition-transform duration-300" />
          <span className="text-sm">for J&K students</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a 
            href="https://jkbose.ac.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-300 hover:text-blue-100 
                     transition-all duration-300 hover:scale-105 transform
                     hover:bg-white/10 px-2 py-1 rounded-lg"
          >
            <span>J&K Board of Education</span>
            <ExternalLink className="w-3 h-3 group-hover:animate-bounce" />
          </a>
          <a 
            href="https://scholarships.gov.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-300 hover:text-blue-100 
                     transition-all duration-300 hover:scale-105 transform
                     hover:bg-white/10 px-2 py-1 rounded-lg"
          >
            <span>National Scholarship Portal</span>
            <ExternalLink className="w-3 h-3 group-hover:animate-bounce" />
          </a>
          <a 
            href="https://www.ugc.ac.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-300 hover:text-blue-100 
                     transition-all duration-300 hover:scale-105 transform
                     hover:bg-white/10 px-2 py-1 rounded-lg"
          >
            <span>UGC India</span>
            <ExternalLink className="w-3 h-3 group-hover:animate-bounce" />
          </a>
        </div>
        
        <p className="mt-4 text-xs text-gray-400 animate-fade-in">
          This chatbot provides general guidance. Please verify information with official college websites and admission offices.
        </p>
      </div>
    </footer>
  );
};