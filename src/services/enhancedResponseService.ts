import { AIService } from './aiService';
import { JKDataService } from './jkDataService';
import { getResponse } from '../data/responses';

export class EnhancedResponseService {
  private static instance: EnhancedResponseService;
  private aiService: AIService;
  private jkDataService: JKDataService;

  private constructor() {
    this.aiService = AIService.getInstance();
    this.jkDataService = JKDataService.getInstance();
  }

  public static getInstance(): EnhancedResponseService {
    if (!EnhancedResponseService.instance) {
      EnhancedResponseService.instance = new EnhancedResponseService();
    }
    return EnhancedResponseService.instance;
  }

  async getEnhancedResponse(message: string): Promise<{
    response: string;
    source: 'ai' | 'local' | 'hybrid';
    hasJKData: boolean;
  }> {
    const lowerMessage = message.toLowerCase();
    
    // Check if we should use AI for complex queries
    const shouldUseAI = this.shouldUseAI(lowerMessage);
    
    if (shouldUseAI) {
      try {
        // Get J&K government data for context
        const jkData = await this.getRelevantJKData(lowerMessage);
        const context = this.buildContext(jkData);
        
        // Get AI response with J&K data context
        const aiResult = await this.aiService.getHybridResponse(message, context);
        
        return {
          response: aiResult.response,
          source: 'ai',
          hasJKData: jkData.institutions.length > 0 || jkData.schemes.length > 0
        };
      } catch (error) {
        console.error('AI service error:', error);
        // Fallback to local response
        return {
          response: getResponse(message),
          source: 'local',
          hasJKData: false
        };
      }
    } else {
      // Use local responses for simple queries
      return {
        response: getResponse(message),
        source: 'local',
        hasJKData: false
      };
    }
  }

  private shouldUseAI(message: string): boolean {
    // Use AI for complex queries that benefit from natural language processing
    const aiTriggers = [
      'compare', 'recommend', 'suggest', 'best', 'which college',
      'career advice', 'future prospects', 'job opportunities',
      'placement', 'salary', 'scope', 'difficulty',
      'preparation strategy', 'study plan', 'guidance'
    ];
    
    return aiTriggers.some(trigger => message.includes(trigger));
  }

  private async getRelevantJKData(message: string): Promise<any> {
    try {
      if (message.includes('scholarship') || message.includes('financial')) {
        const schemes = await this.jkDataService.getScholarshipSchemes();
        return { institutions: [], schemes, statistics: [] };
      }
      
      if (message.includes('statistics') || message.includes('data') || message.includes('numbers')) {
        const statistics = await this.jkDataService.getEducationStatistics();
        return { institutions: [], schemes: [], statistics };
      }
      
      // For general queries, try to get institution data
      const institutions = await this.jkDataService.getEducationInstitutions();
      return { institutions, schemes: [], statistics: [] };
    } catch (error) {
      console.error('Error fetching J&K data:', error);
      return { institutions: [], schemes: [], statistics: [] };
    }
  }

  private buildContext(jkData: any): string {
    let context = '';
    
    if (jkData.institutions.length > 0) {
      context += `J&K Government Education Data - Institutions: ${JSON.stringify(jkData.institutions.slice(0, 5))}. `;
    }
    
    if (jkData.schemes.length > 0) {
      context += `J&K Scholarship Schemes: ${JSON.stringify(jkData.schemes.slice(0, 3))}. `;
    }
    
    if (jkData.statistics.length > 0) {
      context += `J&K Education Statistics: ${JSON.stringify(jkData.statistics.slice(0, 3))}. `;
    }
    
    return context;
  }
}