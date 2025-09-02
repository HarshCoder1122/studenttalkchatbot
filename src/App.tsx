import React from 'react';
import { ChatContainer } from './components/ChatContainer';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <div className="container mx-auto px-4 py-8">
        <ChatContainer />
        <Footer />
      </div>
    </div>
  );
}

export default App;