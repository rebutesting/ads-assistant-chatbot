import React, { memo } from 'react';
import { Lightbulb, ArrowRight } from 'lucide-react';
import { Suggestion } from '../types';
import { cn } from '../lib/utils';

interface SuggestionsListProps {
  suggestions: Suggestion[];
  onSelect: (action: string) => void;
}

export const SuggestionsList = memo(({ suggestions, onSelect }: SuggestionsListProps) => {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden w-full shadow-sm animate-in fade-in duration-300">
      {suggestions.map((suggestion, index) => (
        <div
          key={`${suggestion.action}-${index}`}
          onClick={() => onSelect(suggestion.action)}
          className={cn(
            "group p-4 hover:bg-amber-50/50 cursor-pointer transition-all duration-200",
            index !== suggestions.length - 1 && "border-b border-border"
          )}
        >
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all">
              <Lightbulb className="w-5 h-5 text-amber-600" strokeWidth={2.5} />
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-foreground mb-1 group-hover:text-amber-700 transition-colors">
                {suggestion.title}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                {suggestion.description}
              </p>
              <button 
                className="inline-flex items-center gap-1.5 text-xs font-medium text-purple-600 hover:text-purple-700 group-hover:translate-x-1 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(suggestion.action);
                }}
              >
                <span>{suggestion.action}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});

SuggestionsList.displayName = 'SuggestionsList';