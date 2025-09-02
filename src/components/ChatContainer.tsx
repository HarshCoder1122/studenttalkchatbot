import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { EnhancedResponseService } from '../services/enhancedResponseService';
import { ChatHeader } from './ChatHeader';
import { MessageBubble } from './MessageBubble';
import { MessageInput } from './MessageInput';
import { QuickSuggestions } from './QuickSuggestions';
import { TypingIndicator } from './TypingIndicator';
import { SetupInstructions } from './SetupInstructions';

export const ChatContainer: React.FC = () => {
  const enhancedResponseService = EnhancedResponseService.getInstance();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI-powered J&K College Selection Assistant. I'm integrated with ChatGPT, Gemini, and J&K government data to provide you with the most accurate and up-to-date information about colleges, courses, admissions, and scholarships in Jammu & Kashmir. What would you like to know about your educational journey?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentAISource, setCurrentAISource] = useState<string>('');
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
      // Get enhanced response using AI services and J&K data
      const result = await enhancedResponseService.getEnhancedResponse(messageText);
      setCurrentAISource(result.source);
      
      // Add source indicator to response if using AI
      let responseText = result.response;
      if (result.source === 'ai' && result.hasJKData) {
        responseText += '\n\n*Response enhanced with J&K government data and AI analysis*';
      } else if (result.source === 'ai') {
        responseText += '\n\n*Response generated using AI assistance*';
      }

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
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I apologize, but I'm experiencing some technical difficulties. Please try again in a moment. In the meantime, I can still help you with basic information about colleges in J&K.",
        isUser: false,
        timestamp: new Date()
      };
      
      setIsTyping(false);
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  const showSuggestions = messages.length <= 1 && !isTyping;

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
      <ChatHeader />
      
      <div className="px-6 pt-4">
        <SetupInstructions />
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 bg-gradient-to-b from-gray-50 to-white">
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