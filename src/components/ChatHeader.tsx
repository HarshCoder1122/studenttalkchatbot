import React from 'react';
import { GraduationCap, MapPin, Zap, Database } from 'lucide-react';

export const ChatHeader: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-2xl shadow-lg">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-white/20 rounded-full">
          <GraduationCap className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-xl font-bold">J&K College Selection Assistant</h1>
          <div className="flex items-center gap-1 text-blue-100 text-sm">
            <MapPin className="w-4 h-4" />
            <span>Guiding J&K Students</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 mb-3">
        <div className="flex items-center gap-1 text-blue-100 text-xs">
          <Zap className="w-3 h-3" />
          <span>AI-Powered</span>
        </div>
        <div className="flex items-center gap-1 text-blue-100 text-xs">
          <Database className="w-3 h-3" />
          <span>J&K Gov Data</span>
        </div>
      </div>
      <p className="text-blue-100 text-sm leading-relaxed">
        Get AI-powered guidance with real-time J&K government data for college selection, 
        admission requirements, scholarships, and career planning. Powered by ChatGPT and Gemini.
      </p>
    </div>
  );
};