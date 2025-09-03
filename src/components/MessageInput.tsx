import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2 } from 'lucide-react';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage, disabled = false }) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [message]);

  return (
    <div className="p-4 bg-white/95 backdrop-blur-xl border-t border-gray-200/50">
      <form onSubmit={handleSubmit} className="flex gap-3 items-end">
        <div className="flex-1 relative">
          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me about colleges, courses, admissions, or anything related to your education..."
            disabled={disabled}
            className="w-full p-4 pr-12 border border-gray-300/50 rounded-2xl resize-none 
                     focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400
                     disabled:bg-gray-100 disabled:cursor-not-allowed
                     transition-all duration-300 shadow-lg hover:shadow-xl
                     min-h-[56px] max-h-32 bg-white/90 backdrop-blur-sm
                     placeholder:text-gray-400 hover:border-blue-300
                     transform hover:scale-[1.01]"
            rows={1}
          />
        </div>
        <button
          type="submit"
          disabled={!message.trim() || disabled}
          className="p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl 
                   hover:from-blue-600 hover:to-indigo-700 
                   disabled:bg-gray-400 disabled:cursor-not-allowed
                   transition-all duration-300 shadow-lg hover:shadow-xl
                   transform hover:scale-110 active:scale-95 hover:rotate-3
                   flex items-center justify-center min-w-[56px]
                   group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                        transform -skew-x-12 -translate-x-full group-hover:translate-x-full 
                        transition-transform duration-700"></div>
          {disabled ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Send className="w-5 h-5 relative z-10 group-hover:animate-bounce" />
          )}
        </button>
      </form>
    </div>
  );
};