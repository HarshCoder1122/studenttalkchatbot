import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { AIService } from '../services/aiService';
import { getResponse } from '../data/responses';
import { ChatHeader } from './ChatHeader';
import { MessageBubble } from './MessageBubble';
import { MessageInput } from './MessageInput';
import { QuickSuggestions } from './QuickSuggestions';
import { TypingIndicator } from './TypingIndicator';
import { SetupInstructions } from './SetupInstructions';

export const ChatContainer: React.FC = () => {
  const aiService = AIService.getInstance();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI-powered J&K College Selection Assistant. I'm integrated with Gemini AI to provide you with intelligent guidance about colleges, courses, admissions, and scholarships in Jammu & Kashmir. What would you like to know about your educational journey?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (messageText: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    try {
      // Try to get AI response, fallback to local responses
      const result = await aiService.getResponse(messageText);
      
      let responseText = result.source === 'fallback' 
        ? getResponse(messageText) 
        : result.response;

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        isUser: false,
        timestamp: new Date()
      };

      setIsTyping(false);
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error getting response:', error);
      
      // Use local fallback response
      const fallbackResponse = getResponse(messageText);
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: fallbackResponse,
        isUser: false,
        timestamp: new Date()
      };
      
      setIsTyping(false);
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  const showSuggestions = messages.length <= 1 && !isTyping;

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto bg-white/95 backdrop-blur-xl shadow-2xl rounded-none sm:rounded-3xl overflow-hidden border-0 sm:border border-white/20 animate-fade-in">
      <ChatHeader />
      
      <div className="px-3 sm:px-6 pt-4">
        <SetupInstructions />
      </div>
      
      <div className="flex-1 overflow-y-auto p-3 sm:p-6 bg-gradient-to-b from-gray-50/50 to-white/80 backdrop-blur-sm">
        {/* University Background Image */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="University Campus"
            className="w-full h-full object-cover blur-none"
          />
        </div>
        
        <div className="space-y-4">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {showSuggestions && (
        <QuickSuggestions 
          onSuggestionClick={handleSendMessage}
          disabled={isTyping}
        />
      )}
      
      <MessageInput 
        onSendMessage={handleSendMessage}
        disabled={isTyping}
      />
    </div>
  );
};