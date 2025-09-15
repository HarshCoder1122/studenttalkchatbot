import React from 'react';
import { ChatContainer } from './components/ChatContainer';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-indigo-100/20"></div>
      </div>
      
      <div className="relative z-10">
        <ChatContainer />
        <Footer />
      </div>
    </div>
  );
}

export default App;