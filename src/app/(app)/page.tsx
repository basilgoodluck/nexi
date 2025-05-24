'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChatBox } from '@/components/custom/Chatbox';
import { motion } from 'framer-motion';
import { MessageCircle, GitFork } from 'lucide-react';

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="flex justify-between items-center p-8">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black font-bold text-sm">N</span>
            </div>
            <span className="text-xl font-semibold tracking-tight">NEXI</span>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm">
            <a href="https://github.com/basilgoodluck/nexi" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">GITHUB<GitFork /></a>
          </nav>
        </header>

        <main className="flex-1 flex items-center justify-center px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-3xl md:text-5xl font-bold">
                Hello I'm Noble
                <span className="text-2xl md:text-3xl font-bold block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  This is my official customer care page
                </span>
              </h1>
              
              <p className="text-lg text-gray-400 mx-auto">
                Meet Nexi, an AI that talks exactly like me, have fun and always share your feedback.
              </p>
            </motion.div>
          </div>
        </main>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-t border-gray-800 p-8"
        >
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Always Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2s</div>
              <div className="text-gray-400 text-sm">Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime</div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="cursor-pointer w-14 h-14 rounded-full bg-white text-black hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </motion.div>

      <ChatBox isOpen={isChatOpen} onToggle={() => setIsChatOpen(!isChatOpen)} />
    </div>
  );
}