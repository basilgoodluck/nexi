'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatBoxProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function ChatBox({ isOpen, onToggle }: ChatBoxProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi there! I'm NEXI. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const responses = [
        "I understand. Let me connect you with the right information.",
        "Thanks for reaching out. I'll help you with that.",
        "Got it. Processing your request now.",
        "I can help with that. Give me just a moment.",
        "Perfect. Let me get that sorted for you."
      ];

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-24 right-8 z-40 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-xs">N</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm">NEXI</div>
                <div className="text-xs text-green-600 flex items-center">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></div>
                  Online
                </div>
              </div>
            </div>
            <Button
              onClick={onToggle}
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 hover:bg-gray-200"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[75%] rounded-lg px-3 py-2 text-sm ${
                  message.sender === 'user'
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}>
                  {message.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg px-3 py-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-gray-100 bg-white">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage(e);
                  }
                }}
                placeholder="Type a message..."
                className="flex-1 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                disabled={isTyping}
              />
              <Button
                onClick={handleSendMessage}
                size="sm"
                className="bg-black hover:bg-gray-800 text-white px-3"
                disabled={!inputValue.trim() || isTyping}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}