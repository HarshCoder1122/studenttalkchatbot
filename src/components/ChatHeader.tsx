import React from 'react';
import { GraduationCap, MapPin, Zap, Database } from 'lucide-react';

export const ChatHeader: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-6 rounded-t-3xl shadow-lg relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-gradient-x"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 animate-shimmer"></div>
      
      <div className="relative z-10">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm border border-white/30 animate-float">
          <img 
            src="/Aspirofy logo.png" 
            alt="Aspirofy Logo" 
            className="w-8 h-8 sm:w-10 sm:h-10 animate-pulse"
          />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent animate-fade-in">
            Aspirofy
          </h1>
          <div className="flex items-center gap-1 text-blue-100 text-xs sm:text-sm">
            <MapPin className="w-4 h-4 animate-bounce" />
            <span className="hidden sm:inline">AI College Selection Assistant</span>
            <span className="sm:hidden">AI Assistant</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-4 mb-3">
        <div className="flex items-center gap-1 text-blue-100 text-xs sm:text-sm">
          <Zap className="w-3 h-3 animate-pulse" />
          <span className="hidden sm:inline">AI-Powered</span>
          <span className="sm:hidden">AI</span>
        </div>
        <div className="flex items-center gap-1 text-blue-100 text-xs sm:text-sm">
          <Database className="w-3 h-3 animate-pulse delay-300" />
          <span className="hidden sm:inline">Smart Guidance</span>
          <span className="sm:hidden">Smart</span>
        </div>
      </div>
      <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
        <span className="hidden sm:inline">Get AI-powered guidance for college selection, admission requirements, scholarships, and career planning.</span>
        <span className="sm:hidden">Your AI-powered college selection guide.</span>
      </p>
      </div>
    </div>
  );
};