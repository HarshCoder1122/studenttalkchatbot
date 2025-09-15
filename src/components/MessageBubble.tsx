import React from 'react';
import { User, Bot } from 'lucide-react';
import { Message } from '../types';

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const formatMessage = (text: string) => {
    const paragraphs = text.split('\n\n');
    
    return paragraphs.map((paragraph, index) => {
      const lines = paragraph.split('\n');
      
      return (
        <div key={index} className={index > 0 ? 'mt-3' : ''}>
          {lines.map((line, lineIndex) => {
            const parts = line.split(/(\*\*.*?\*\*)/g);
            const formattedLine = parts.map((part, partIndex) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={partIndex} className="font-semibold text-gray-900">{part.slice(2, -2)}</strong>;
              }
              return part;
            });

            if (line.trim().startsWith('-') || line.trim().startsWith('•')) {
              return (
                <div key={lineIndex} className="ml-4 mb-1 text-gray-700">
                  {formattedLine}
                </div>
              );
            }

            if (line.trim().match(/^[🎓💼🔬💰📅📝💡🌟📈💬🏥📚📍📋🎯]/)) {
              return (
                <div key={lineIndex} className="font-semibold text-blue-800 mb-2 mt-2 first:mt-0">
                  {formattedLine}
                </div>
              );
            }

            return lineIndex < lines.length - 1 ? (
              <div key={lineIndex} className="mb-1">{formattedLine}</div>
            ) : (
              <span key={lineIndex}>{formattedLine}</span>
            );
          })}
        </div>
      );
    });
  };

  return (
    <div className={`flex gap-3 mb-4 ${message.isUser ? 'flex-row-reverse' : 'flex-row'} animate-fade-in`}>
      {/* Avatar */}
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
        message.isUser 
          ? 'bg-blue-600 text-white' 
          : 'bg-gray-100 text-gray-600 border border-gray-200'
      }`}>
        {message.isUser ? (
          <User className="w-4 h-4" />
        ) : (
          <Bot className="w-4 h-4" />
        )}
      </div>
      
      {/* Message Content */}
      <div className={`max-w-[80%] ${message.isUser ? 'text-right' : 'text-left'}`}>
        <div className={`inline-block px-4 py-3 rounded-2xl shadow-sm ${
          message.isUser
            ? 'bg-blue-600 text-white rounded-br-md'
            : 'bg-white text-gray-800 rounded-bl-md border border-gray-200'
        }`}>
          <div className="text-sm leading-relaxed">
            {message.isUser ? message.text : formatMessage(message.text)}
          </div>
        </div>
        <div className={`text-xs text-gray-500 mt-1 ${message.isUser ? 'text-right' : 'text-left'}`}>
          {formatTime(message.timestamp)}
        </div>
      </div>
    </div>
  );
};