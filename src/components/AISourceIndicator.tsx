import React from 'react';
import { Bot, Zap, Database } from 'lucide-react';

interface AISourceIndicatorProps {
  source: 'chatgpt' | 'gemini' | 'local' | 'hybrid';
  hasJKData?: boolean;
}

export const AISourceIndicator: React.FC<AISourceIndicatorProps> = ({ source, hasJKData }) => {
  const getSourceInfo = () => {
    switch (source) {
      case 'chatgpt':
        return { icon: Bot, label: 'ChatGPT', color: 'text-green-600' };
      case 'gemini':
        return { icon: Zap, label: 'Gemini', color: 'text-purple-600' };
      case 'hybrid':
        return { icon: Bot, label: 'AI Hybrid', color: 'text-blue-600' };
      default:
        return { icon: Database, label: 'Local', color: 'text-gray-600' };
    }
  };

  const { icon: Icon, label, color } = getSourceInfo();

  return (
    <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
      <Icon className={`w-3 h-3 ${color}`} />
      <span>{label}</span>
      {hasJKData && (
        <>
          <span>•</span>
          <Database className="w-3 h-3 text-blue-600" />
          <span>J&K Data</span>
        </>
      )}
    </div>
  );
};