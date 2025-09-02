import OpenAI from 'openai';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize OpenAI only if API key is available
const openai = import.meta.env.VITE_OPENAI_API_KEY ? new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
}) : null;

// Initialize Gemini only if API key is available
const genAI = import.meta.env.VITE_GEMINI_API_KEY ? new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY) : null;

export class AIService {
  private static instance: AIService;
  private geminiModel: any;

  private constructor() {
    this.geminiModel = genAI ? genAI.getGenerativeModel({ model: "gemini-pro" }) : null;
  }

  public static getInstance(): AIService {
    if (!AIService.instance) {
      AIService.instance = new AIService();
    }
    return AIService.instance;
  }

  async getChatGPTResponse(message: string, context: string = ''): Promise<string> {
    try {
      if (!openai) {
        throw new Error('OpenAI API key not configured');
      }

      const systemPrompt = `You are a helpful college selection assistant for students from Jammu & Kashmir. 
      Provide accurate, helpful information about colleges, courses, admissions, and career guidance.
      Focus on colleges in J&K and popular destinations for J&K students.
      ${context ? `Additional context: ${context}` : ''}`;

      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message }
        ],
        max_tokens: 500,
        temperature: 0.7
      });

      return completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.';
    } catch (error) {
      console.error('ChatGPT API error:', error);
      throw new Error('Failed to get response from ChatGPT');
    }
  }

  async getGeminiResponse(message: string, context: string = ''): Promise<string> {
    try {
      if (!this.geminiModel) {
        throw new Error('Gemini API key not configured');
      }

      const prompt = `You are a college selection assistant for J&K students. 
      Provide helpful guidance about colleges, courses, and admissions.
      ${context ? `Context: ${context}` : ''}
      
      User question: ${message}`;

      const result = await this.geminiModel.generateContent(prompt);
      const response = await result.response;
      return response.text() || 'Sorry, I could not generate a response.';
    } catch (error) {
      console.error('Gemini API error:', error);
      throw new Error('Failed to get response from Gemini');
    }
  }

  async getHybridResponse(message: string, context: string = ''): Promise<{
    response: string;
    source: 'chatgpt' | 'gemini' | 'fallback';
  }> {
    // Try ChatGPT first
    try {
      const chatgptResponse = await this.getChatGPTResponse(message, context);
      return { response: chatgptResponse, source: 'chatgpt' };
    } catch (error) {
      console.log('ChatGPT failed, trying Gemini...');
      
      // Fallback to Gemini
      try {
        const geminiResponse = await this.getGeminiResponse(message, context);
        return { response: geminiResponse, source: 'gemini' };
      } catch (error) {
        console.log('Both AI services failed, using fallback...');
        return { 
          response: 'I apologize, but I\'m having trouble connecting to my AI services right now. Please try again in a moment, or ask me about specific colleges in J&K and I\'ll do my best to help with the information I have available.',
          source: 'fallback'
        };
      }
    }
  }
}