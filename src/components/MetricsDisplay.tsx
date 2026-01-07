import React, { memo } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Metric } from '../types';
import { cn } from '../lib/utils';

interface MetricsDisplayProps {
  metrics: Metric[];
}

export const MetricsDisplay = memo(({ metrics }: MetricsDisplayProps) => {
  return (
    <div className="bg-card border border-border rounded-xl p-4 w-full shadow-sm animate-in fade-in duration-300">
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <div 
            key={`${metric.label}-${index}`} 
            className="bg-secondary/30 rounded-lg p-3 hover:bg-secondary/50 transition-colors"
          >
            <p className="text-xs text-muted-foreground font-medium mb-1.5">
              {metric.label}
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-base font-bold text-foreground">
                {metric.value}
              </span>
              {metric.change && (
                <span
                  className={cn(
                    "flex items-center gap-0.5 text-xs font-medium",
                    metric.trend === 'up' && 'text-green-600',
                    metric.trend === 'down' && 'text-red-600',
                    metric.trend === 'neutral' && 'text-gray-500'
                  )}
                >
                  {metric.trend === 'up' && <TrendingUp className="w-3 h-3" strokeWidth={2.5} />}
                  {metric.trend === 'down' && <TrendingDown className="w-3 h-3" strokeWidth={2.5} />}
                  {metric.trend === 'neutral' && <Minus className="w-3 h-3" strokeWidth={2.5} />}
                  {metric.change}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

MetricsDisplay.displayName = 'MetricsDisplay';