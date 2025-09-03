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
        <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm border border-white/30 animate-float">
          <GraduationCap className="w-6 h-6 animate-pulse" />
        </div>
        <div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent animate-fade-in">
            J&K College Selection Assistant
          </h1>
          <div className="flex items-center gap-1 text-blue-100 text-sm">
            <MapPin className="w-4 h-4 animate-bounce" />
            <span>Guiding J&K Students</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 mb-3">
        <div className="flex items-center gap-1 text-blue-100 text-xs">
          <Zap className="w-3 h-3 animate-pulse" />
          <span>AI-Powered</span>
        </div>
        <div className="flex items-center gap-1 text-blue-100 text-xs">
          <Database className="w-3 h-3 animate-pulse delay-300" />
          <span>Smart Guidance</span>
        </div>
      </div>
      <p className="text-blue-100 text-sm leading-relaxed">
        Get AI-powered guidance for college selection, admission requirements, 
        scholarships, and career planning. Powered by Gemini AI.
      </p>
      </div>
    </div>
  );
};