import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-4 sm:mt-8 py-4 sm:py-6 px-3 sm:px-4 text-center text-gray-300 bg-white/10 backdrop-blur-xl rounded-none sm:rounded-2xl border-0 sm:border border-white/20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
          <span className="text-xs sm:text-sm">Made with</span>
          <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse hover:scale-125 transition-transform duration-300" />
          <span className="text-xs sm:text-sm">for students</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
          <a 
            href="https://jkbose.ac.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-300 hover:text-blue-100 
                     transition-all duration-300 hover:scale-105 transform
                     hover:bg-white/10 px-1.5 sm:px-2 py-1 rounded-lg"
          >
            <span className="hidden sm:inline">J&K Board of Education</span>
            <span className="sm:hidden">J&K Board</span>
            <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover:animate-bounce" />
          </a>
          <a 
            href="https://scholarships.gov.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-300 hover:text-blue-100 
                     transition-all duration-300 hover:scale-105 transform
                     hover:bg-white/10 px-1.5 sm:px-2 py-1 rounded-lg"
          >
            <span className="hidden sm:inline">National Scholarship Portal</span>
            <span className="sm:hidden">Scholarships</span>
            <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover:animate-bounce" />
          </a>
          <a 
            href="https://www.ugc.ac.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-300 hover:text-blue-100 
                     transition-all duration-300 hover:scale-105 transform
                     hover:bg-white/10 px-1.5 sm:px-2 py-1 rounded-lg"
          >
            <span>UGC</span>
            <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover:animate-bounce" />
          </a>
        </div>
        
        <p className="mt-3 sm:mt-4 text-xs text-gray-400 animate-fade-in">
          <span className="hidden sm:inline">This chatbot provides general guidance. Please verify information with official college websites and admission offices.</span>
          <span className="sm:hidden">Verify information with official sources.</span>
        </p>
      </div>
    </footer>
  );
};