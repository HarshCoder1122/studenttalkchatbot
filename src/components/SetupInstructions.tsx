import React, { useState } from 'react';
import { Key, AlertCircle, CheckCircle, ExternalLink } from 'lucide-react';

export const SetupInstructions: React.FC = () => {
  const [showInstructions, setShowInstructions] = useState(false);

  const hasGeminiKey = !!import.meta.env.VITE_GEMINI_API_KEY;

  if (hasGeminiKey) {
    return null; // Don't show if API key is configured
  }

  return (
    <div className="mb-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        <AlertCircle className="w-5 h-5 text-amber-600" />
        <h3 className="font-semibold text-amber-800">AI Integration Setup Required</h3>
      </div>
      
      <p className="text-amber-700 text-sm mb-3">
        To unlock AI-powered responses for better guidance, please configure your Gemini API key.
      </p>

      <button
        onClick={() => setShowInstructions(!showInstructions)}
        className="text-amber-700 text-sm underline hover:text-amber-800 mb-3"
      >
        {showInstructions ? 'Hide' : 'Show'} setup instructions
      </button>

      {showInstructions && (
        <div className="space-y-4 text-sm">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Key className="w-4 h-4 text-amber-600" />
              <span className="text-amber-700">Gemini API Key (Required)</span>
            </div>
            <div className="ml-6 text-gray-600">
              <p>1. Visit <a href="https://makersuite.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">Google AI Studio <ExternalLink className="w-3 h-3" /></a></p>
              <p>2. Create a new API key</p>
              <p>3. Create a .env file in your project root</p>
              <p>4. Add: VITE_GEMINI_API_KEY=your_key_here</p>
              <p>5. Restart the development server</p>
            </div>
          </div>

          <div className="p-3 bg-blue-50 rounded border border-blue-200">
            <p className="text-blue-800 text-xs">
              <strong>Note:</strong> The chatbot will work with basic responses even without the API key, 
              but Gemini AI integration provides much more intelligent and personalized guidance.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};