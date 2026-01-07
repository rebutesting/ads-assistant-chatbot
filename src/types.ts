// Core message types
export interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  options?: string[];
  metrics?: Metric[];
  campaigns?: Campaign[];
  suggestions?: Suggestion[];
  successMessage?: string;
  dataTable?: DataTableRow[];
  performanceCard?: PerformanceCardData;
}

export interface Metric {
  label: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
}

export interface Campaign {
  id: string;
  name: string;
  status: 'Active' | 'Paused' | 'Pending' | 'Draft';
  budget?: string;
  performance?: string;
}

export interface Suggestion {
  title: string;
  description: string;
  action: string;
}

export interface DataTableRow {
  label: string;
  value: string;
}

export interface PerformanceCardData {
  title: string;
  metrics: PerformanceMetric[];
}

export interface PerformanceMetric {
  label: string;
  value: string;
  change?: string;
  isPositive?: boolean;
}

// Conversation flow types
export interface ConversationStep {
  botMessage: string;
  options?: string[];
  metrics?: Metric[];
  campaigns?: Campaign[];
  suggestions?: Suggestion[];
  successMessage?: string;
  dataTable?: DataTableRow[];
  performanceCard?: PerformanceCardData;
  expectCustomInput?: boolean;
  customInputPrompt?: string;
}

export interface ConversationFlow {
  userMessage: string;
  steps: ConversationStep[];
  completionMessage: string;
}

export type ConversationFlows = Record<string, ConversationFlow>;

// UI State types
export interface ChatState {
  messages: Message[];
  activeFlow: ConversationFlow | null;
  flowStep: number;
  isWaitingForCustomInput: boolean;
  customInputContext: string;
  showPrompts: boolean;
}