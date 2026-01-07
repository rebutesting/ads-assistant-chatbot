import React, { memo } from 'react';
import { BarChart3, TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '../lib/utils';

interface MetricData {
  label: string;
  value: string;
  change?: string;
  isPositive?: boolean;
}

interface PerformanceCardProps {
  title: string;
  metrics: MetricData[];
}

export const PerformanceCard = memo(({ title, metrics }: PerformanceCardProps) => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-xl shadow-sm p-4 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-4">
        <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-sm">
          <BarChart3 className="w-4 h-4 text-white" strokeWidth={2.5} />
        </div>
        <h3 className="text-sm font-semibold text-purple-900">
          {title}
        </h3>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <div key={`${metric.label}-${index}`} className="bg-white/60 backdrop-blur-sm rounded-lg p-3 shadow-sm">
            <div className="text-xs text-purple-700/70 font-medium mb-1">
              {metric.label}
            </div>
            <div className="text-lg font-bold text-purple-900 mb-1">
              {metric.value}
            </div>
            {metric.change && (
              <div className={cn(
                "text-xs flex items-center gap-1 font-medium",
                metric.isPositive ? 'text-green-600' : 'text-red-600'
              )}>
                {metric.isPositive ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                <span>{metric.change}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

PerformanceCard.displayName = 'PerformanceCard';