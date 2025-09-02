import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini only if API key is available
const genAI = import.meta.env.VITE_GEMINI_API_KEY ? new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY) : null;

export class AIService {
  private static instance: AIService;
  private geminiModel: any;

  private constructor() {
    this.geminiModel = genAI ? genAI.getGenerativeModel({ model: "gemini-1.5-flash" }) : null;
  }

  public static getInstance(): AIService {
    if (!AIService.instance) {
      AIService.instance = new AIService();
    }
    return AIService.instance;
  }

  async getGeminiResponse(message: string): Promise<string> {
    try {
      if (!this.geminiModel) {
        throw new Error('Gemini API key not configured');
      }

      const prompt = `You are a helpful college selection assistant specifically for students from Jammu & Kashmir (J&K). 
      Your role is to provide accurate, helpful information about:
      - Colleges and universities in J&K
      - Course options and eligibility criteria
      - Admission processes and requirements
      - Career guidance and stream selection
      - Scholarship opportunities
      - Study tips and preparation strategies
      
      Always be encouraging, informative, and focus on helping J&K students make informed educational decisions.
      Keep responses conversational but informative, and use relevant emojis to make the content engaging.
      
      User question: ${message}`;

      const result = await this.geminiModel.generateContent(prompt);
      const response = await result.response;
      return response.text() || 'Sorry, I could not generate a response.';
    } catch (error) {
      console.error('Gemini API error:', error);
      throw new Error('Failed to get response from Gemini');
    }
  }

  async getResponse(message: string): Promise<{
    response: string;
    source: 'gemini' | 'fallback';
  }> {
    try {
      const geminiResponse = await this.getGeminiResponse(message);
      return { response: geminiResponse, source: 'gemini' };
    } catch (error) {
      console.log('Gemini failed, using fallback...');
      return { 
        response: 'I apologize, but I\'m having trouble connecting to my AI service right now. Please try again in a moment, or ask me about specific colleges in J&K and I\'ll do my best to help with the information I have available.',
        source: 'fallback'
      };
    }
  }
}