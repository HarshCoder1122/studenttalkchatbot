import React from 'react';
import { Bot, Sparkles } from 'lucide-react';

export const ChatHeader: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white px-4 sm:px-6 py-4 sm:py-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Logo */}
          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
            <img 
              src="/Aspirofy logo.png" 
              alt="Aspirofy Logo" 
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
          </div>
          
          {/* Title and Description */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-xl sm:text-2xl font-bold text-white">
                Aspirofy
              </h1>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 animate-pulse" />
            </div>
            <p className="text-blue-100 text-sm sm:text-base font-medium">
              AI College Selection Assistant
            </p>
            <p className="text-blue-200 text-xs sm:text-sm mt-1 opacity-90">
              Get personalized guidance for your educational journey in J&K
            </p>
          </div>
          
          {/* Status Indicator */}
          <div className="flex-shrink-0 hidden sm:flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/20">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-white">Online</span>
          </div>
        </div>
      </div>
    </div>
  );
};