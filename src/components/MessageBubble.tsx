import React, { memo } from 'react';
import { Sparkles } from 'lucide-react';
import { Message } from '../types';
import { MetricsDisplay } from './MetricsDisplay';
import { CampaignList } from './CampaignList';
import { SuggestionsList } from './SuggestionsList';
import { OptionsButtons } from './OptionsButtons';
import { SuccessMessage } from './SuccessMessage';
import { DataTable } from './DataTable';
import { PerformanceCard } from './PerformanceCard';

interface MessageBubbleProps {
  message: Message;
  onOptionSelect: (option: string) => void;
}

// AI Avatar Component
const AIAvatar = memo(() => {
  return (
    <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-sm">
      <Sparkles className="w-4 h-4 text-white" strokeWidth={2.5} />
    </div>
  );
});

AIAvatar.displayName = 'AIAvatar';

// User Message Bubble
const UserMessageBubble = memo(({ content }: { content: string }) => {
  return (
    <div className="flex flex-col items-end px-3 py-0 animate-in slide-in-from-right duration-300">
      <div className="relative inline-block max-w-[85%]">
        <div className="bg-gradient-to-br from-purple-50 to-purple-100/80 border border-purple-200 rounded-2xl px-4 py-2.5 shadow-sm">
          <p className="text-sm leading-relaxed text-purple-900 whitespace-pre-wrap font-medium">
            {content}
          </p>
        </div>
        {/* Message Tail */}
        <div className="absolute bottom-0 right-0 translate-x-[1px]">
          <svg width="18" height="8" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.8582 -1.23278C15.5198 -0.960063 15.1551 -0.663161 14.7928 -0.368525L14.785 -0.362665C12.1484 1.86388 7.96112 4.929 5.48618 6.51624L5.01547 6.81312C3.77889 7.5756 2.73117 8.16636 1.65903 8.71741C1.47853 8.80951 1.28837 8.88704 1.12387 8.92444C0.961202 8.9614 0.895114 8.9437 0.887544 8.94202C0.858936 8.92693 0.823099 8.89512 0.795747 8.82386C0.767377 8.74986 0.75389 8.64562 0.771333 8.52698L0.772309 8.51819L0.773286 8.51038C1.08142 5.8259 1.17349 3.07227 0.767426 0.238897L0.679536 -0.328485C0.645355 -0.65933 0.61005 -0.962555 0.560395 -1.23278H15.8582Z"
              fill="url(#gradient)"
              stroke="rgb(233, 213, 255)"
              transform="scale(-1, -1) rotate(180)"
              transformOrigin="center"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(250, 245, 255)" />
                <stop offset="100%" stopColor="rgba(243, 232, 255, 0.8)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
});

UserMessageBubble.displayName = 'UserMessageBubble';

// Bot Message Bubble
const BotMessageBubble = memo(({ message, onOptionSelect }: MessageBubbleProps) => {
  return (
    <div className="flex flex-col gap-2 w-full px-3 animate-in slide-in-from-left duration-300">
      <div className="flex gap-3 items-start">
        <div className="flex items-center justify-center mt-1">
          <AIAvatar />
        </div>
        
        <div className="flex-1 flex flex-col gap-3 pt-0.5 min-w-0">
          {/* Bot Message Text */}
          <div className="bg-transparent">
            <p className="text-sm leading-relaxed text-foreground/90 whitespace-pre-wrap">
              {message.content}
            </p>
          </div>

          {/* Success Message */}
          {message.successMessage && (
            <SuccessMessage message={message.successMessage} />
          )}
          
          {/* Data Table */}
          {message.dataTable && message.dataTable.length > 0 && (
            <DataTable rows={message.dataTable} />
          )}

          {/* Metrics Display */}
          {message.metrics && message.metrics.length > 0 && (
            <MetricsDisplay metrics={message.metrics} />
          )}

          {/* Campaign List */}
          {message.campaigns && message.campaigns.length > 0 && (
            <CampaignList campaigns={message.campaigns} onSelect={onOptionSelect} />
          )}

          {/* Suggestions List */}
          {message.suggestions && message.suggestions.length > 0 && (
            <SuggestionsList suggestions={message.suggestions} onSelect={onOptionSelect} />
          )}

          {/* Options Buttons */}
          {message.options && message.options.length > 0 && (
            <OptionsButtons options={message.options} onSelect={onOptionSelect} />
          )}

          {/* Performance Card */}
          {message.performanceCard && (
            <PerformanceCard 
              title={message.performanceCard.title} 
              metrics={message.performanceCard.metrics} 
            />
          )}
        </div>
      </div>
    </div>
  );
});

BotMessageBubble.displayName = 'BotMessageBubble';

// Main Message Bubble Component
export const MessageBubble = memo(({ message, onOptionSelect }: MessageBubbleProps) => {
  if (message.type === 'user') {
    return <UserMessageBubble content={message.content} />;
  }

  return <BotMessageBubble message={message} onOptionSelect={onOptionSelect} />;
});

MessageBubble.displayName = 'MessageBubble';