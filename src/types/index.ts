export interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export interface College {
  name: string;
  location: string;
  type: string;
  courses: string[];
  eligibility: string;
  website?: string;
}

export interface QuickSuggestion {
  text: string;
  category: string;
}