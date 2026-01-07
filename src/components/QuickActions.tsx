import React, { memo } from 'react';
import { MessageSquare, TrendingUp, AlertCircle, PlusCircle, Zap, Settings } from 'lucide-react';
import { cn } from '../lib/utils';

interface QuickActionsProps {
  onActionClick: (action: string) => void;
}

interface QuickAction {
  icon: React.ElementType;
  label: string;
  action: string;
  variant?: 'default' | 'primary';
}

const actions: QuickAction[] = [
  { icon: AlertCircle, label: 'Fix My Ads', action: 'Fix My Ads', variant: 'primary' },
  { icon: Settings, label: 'Edit Campaign', action: 'Edit Campaign' },
  { icon: TrendingUp, label: 'Get Insights', action: 'Get Insights' },
  { icon: PlusCircle, label: 'Create Campaign', action: 'Create Campaign' },
  { icon: Zap, label: 'Optimize', action: 'Optimize Campaigns' },
  { icon: MessageSquare, label: 'Troubleshoot', action: 'troubleshoot' },
];

interface ActionButtonProps {
  action: QuickAction;
  onClick: () => void;
}

const ActionButton = memo(({ action, onClick }: ActionButtonProps) => {
  const { icon: Icon, label, variant = 'default' } = action;

  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-200 whitespace-nowrap font-medium text-sm shadow-sm",
        "hover:shadow-md hover:scale-105 active:scale-95",
        variant === 'primary'
          ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700"
          : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
      )}
      aria-label={label}
    >
      <Icon className="w-4 h-4 shrink-0" strokeWidth={2.5} />
      <span>{label}</span>
    </button>
  );
});

ActionButton.displayName = 'ActionButton';

export const QuickActions = memo(({ onActionClick }: QuickActionsProps) => {
  return (
    <div className="sticky bottom-0 bg-background/95 backdrop-blur-sm border-t border-border shadow-lg">
      <div className="px-4 py-3">
        <div 
          className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {actions.map((action) => (
            <ActionButton
              key={action.action}
              action={action}
              onClick={() => onActionClick(action.action)}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

QuickActions.displayName = 'QuickActions';