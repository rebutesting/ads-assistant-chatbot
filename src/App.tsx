import React, { useState, useEffect, useRef, useCallback } from "react";
import { MessageBubble } from "./components/MessageBubble";
import { QuickActions } from "./components/QuickActions";
import { Message, ConversationFlow } from "./types";
import { conversationFlows } from "./conversationFlows";

const INITIAL_MESSAGE: Message = {
  id: "welcome",
  type: "bot",
  content:
    "Hi! I'm your Ads Assistant. I can help you troubleshoot issues, optimize campaigns, update budgets, and more. What would you like to do today?",
  timestamp: new Date(),
  options: ["Fix My Ads", "Optimize Campaigns", "Get Insights"],
};

const BOT_RESPONSE_DELAY = 600;
const TYPING_DELAY = 500;

export default function App() {
  // State management
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [activeFlow, setActiveFlow] = useState<ConversationFlow | null>(null);
  const [flowStep, setFlowStep] = useState(0);
  const [expectingCustomInput, setExpectingCustomInput] = useState(false);
  const [customInputContext, setCustomInputContext] = useState("");
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Add message to conversation
  const addMessage = useCallback((
    content: string,
    type: "user" | "bot",
    additionalData?: Partial<Message>
  ) => {
    const newMessage: Message = {
      id: `${type}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      type,
      content,
      timestamp: new Date(),
      ...additionalData,
    };
    setMessages((prev) => [...prev, newMessage]);
  }, []);

  // Execute a step in the conversation flow
  const executeFlowStep = useCallback((flow: ConversationFlow, step: number) => {
    if (step < flow.steps.length) {
      const currentStep = flow.steps[step];
      
      setTimeout(() => {
        addMessage(currentStep.botMessage, "bot", {
          options: currentStep.options,
          metrics: currentStep.metrics,
          campaigns: currentStep.campaigns,
          suggestions: currentStep.suggestions,
          successMessage: currentStep.successMessage,
          dataTable: currentStep.dataTable,
          performanceCard: currentStep.performanceCard,
        });
      }, BOT_RESPONSE_DELAY);
    }
  }, [addMessage]);

  // Handle quick action button clicks
  const handleQuickAction = useCallback((action: string) => {
    const flow = conversationFlows[action];
    if (!flow) return;

    // Add user message
    addMessage(flow.userMessage, "user");

    // Start the conversation flow
    setTimeout(() => {
      setActiveFlow(flow);
      setFlowStep(0);
      executeFlowStep(flow, 0);
    }, TYPING_DELAY);
  }, [addMessage, executeFlowStep]);

  // Generate custom input prompt based on context
  const getCustomInputPrompt = (option: string): string => {
    const lowerOption = option.toLowerCase();
    
    if (lowerOption.includes("name")) {
      return "What would you like to name this campaign?";
    } else if (lowerOption.includes("amount") || lowerOption.includes("budget")) {
      return "Enter your custom budget amount (e.g., $450/week or $64/day):";
    } else if (lowerOption.includes("date")) {
      return "Enter your preferred date (e.g., 12/25/2024):";
    } else if (lowerOption.includes("schedule")) {
      return "Enter your custom schedule (e.g., Start 12/20/2024 - End 01/15/2025):";
    } else if (lowerOption.includes("audience")) {
      return "Describe your target audience:";
    } else if (lowerOption.includes("offer")) {
      return "Enter your custom offer (e.g., $5 off orders over $30):";
    }
    
    return "Please enter your custom value:";
  };

  // Generate acknowledgment for custom input
  const getCustomInputAcknowledgment = (text: string, context: string): string => {
    const lowerContext = context.toLowerCase();
    
    if (lowerContext.includes("name")) {
      return `Perfect! Campaign name set to: "${text}"`;
    } else if (lowerContext.includes("amount") || lowerContext.includes("budget")) {
      return `Got it! Budget set to: ${text}`;
    } else if (lowerContext.includes("date")) {
      return `Scheduled for: ${text}`;
    }
    
    return `Great! I've set that to: ${text}`;
  };

  // Handle option button selection
  const handleOptionSelect = useCallback((option: string) => {
    // Check if option starts a new flow (when no flow is active)
    if (!activeFlow && conversationFlows[option]) {
      handleQuickAction(option);
      return;
    }

    // Check if option requires custom text input
    if (option.toLowerCase().includes("custom")) {
      addMessage(option, "user");
      setExpectingCustomInput(true);
      setCustomInputContext(option);

      // Show appropriate prompt
      setTimeout(() => {
        const prompt = getCustomInputPrompt(option);
        addMessage(prompt, "bot");
      }, TYPING_DELAY);
      return;
    }

    // Regular option selection
    addMessage(option, "user");

    if (activeFlow) {
      const nextStep = flowStep + 1;
      setFlowStep(nextStep);

      if (nextStep < activeFlow.steps.length) {
        executeFlowStep(activeFlow, nextStep);
      } else {
        // Flow complete
        setTimeout(() => {
          addMessage(activeFlow.completionMessage, "bot");
          setActiveFlow(null);
          setFlowStep(0);
        }, BOT_RESPONSE_DELAY);
      }
    }
  }, [activeFlow, flowStep, addMessage, executeFlowStep, handleQuickAction]);

  // Handle custom text input from user
  const handleCustomInput = useCallback((text: string) => {
    if (!text.trim()) return;

    addMessage(text, "user");

    // Handle custom input within active flow
    if (expectingCustomInput && activeFlow) {
      setExpectingCustomInput(false);

      // Acknowledge the custom input
      setTimeout(() => {
        const acknowledgment = getCustomInputAcknowledgment(text, customInputContext);
        addMessage(acknowledgment, "bot");

        // Continue to next step in flow
        const nextStep = flowStep + 1;
        setFlowStep(nextStep);

        if (nextStep < activeFlow.steps.length) {
          executeFlowStep(activeFlow, nextStep);
        } else {
          // Flow complete
          setTimeout(() => {
            addMessage(activeFlow.completionMessage, "bot");
            setActiveFlow(null);
            setFlowStep(0);
          }, BOT_RESPONSE_DELAY);
        }
      }, TYPING_DELAY);

      setCustomInputContext("");
      return;
    }

    // Generic response for messages outside of flow
    setTimeout(() => {
      addMessage(
        `I understand you want to: ${text}. Let me help you with that. Could you provide more details or select one of the quick actions below?`,
        "bot"
      );
    }, BOT_RESPONSE_DELAY);
  }, [expectingCustomInput, activeFlow, customInputContext, flowStep, addMessage, executeFlowStep]);

  return (
    <div className="flex flex-col h-screen max-w-[440px] mx-auto bg-background">
      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto pb-4">
        <div className="flex flex-col gap-3 pt-4">
          {messages.map((message) => (
            <MessageBubble
              key={message.id}
              message={message}
              onOptionSelect={handleOptionSelect}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Quick Actions Bar */}
      <QuickActions onActionClick={handleQuickAction} />
    </div>
  );
}