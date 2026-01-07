import React, { memo } from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface OptionsButtonsProps {
  options: string[];
  onSelect: (option: string) => void;
}

export const OptionsButtons = memo(({ options, onSelect }: OptionsButtonsProps) => {
  return (
    <div className="flex flex-col gap-2 w-full animate-in fade-in duration-300">
      {options.map((option, index) => (
        <button
          key={`${option}-${index}`}
          onClick={() => onSelect(option)}
          className={cn(
            "group relative flex items-center justify-between",
            "bg-white hover:bg-secondary/80 border border-border",
            "text-secondary-foreground px-4 py-3 text-sm font-medium",
            "transition-all duration-200 text-left w-full",
            "rounded-full shadow-sm hover:shadow-md",
            "hover:translate-x-1 active:scale-[0.98]"
          )}
          style={{ 
            animationDelay: `${index * 50}ms`,
          }}
        >
          <span className="flex-1">{option}</span>
          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
        </button>
      ))}
    </div>
  );
});

OptionsButtons.displayName = 'OptionsButtons';