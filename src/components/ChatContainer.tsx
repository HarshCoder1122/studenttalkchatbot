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
      text: "Hello! I'm Aspirofy, your AI-powered college selection assistant for Jammu & Kashmir. I can help you with college information, admission requirements, scholarships, and career guidance. How can I assist you today?",
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
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    try {
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
    <div className="max-w-4xl mx-auto min-h-screen flex flex-col">
      {/* Chat Container */}
      <div className="flex-1 flex flex-col bg-white shadow-xl">
        <ChatHeader />
        
        {/* Setup Instructions */}
        <div className="px-4 sm:px-6">
          <SetupInstructions />
        </div>
        
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 bg-gray-50/30">
          <div className="space-y-4 max-w-3xl mx-auto">
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
            {isTyping && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Quick Suggestions */}
        {showSuggestions && (
          <QuickSuggestions 
            onSuggestionClick={handleSendMessage}
            disabled={isTyping}
          />
        )}
        
        {/* Message Input */}
        <MessageInput 
          onSendMessage={handleSendMessage}
          disabled={isTyping}
        />
      </div>
    </div>
  );
};