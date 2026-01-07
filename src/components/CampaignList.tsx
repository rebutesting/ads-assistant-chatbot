import React, { memo } from 'react';
import { ChevronRight, PlayCircle, PauseCircle, Clock } from 'lucide-react';
import { Campaign } from '../types';
import { cn } from '../lib/utils';

interface CampaignListProps {
  campaigns: Campaign[];
  onSelect: (campaignName: string) => void;
}

const getStatusConfig = (status: string) => {
  switch (status) {
    case 'Active':
      return {
        icon: PlayCircle,
        className: 'bg-green-100 text-green-700 border-green-200',
        iconClassName: 'text-green-600'
      };
    case 'Paused':
      return {
        icon: PauseCircle,
        className: 'bg-amber-100 text-amber-700 border-amber-200',
        iconClassName: 'text-amber-600'
      };
    case 'Pending':
      return {
        icon: Clock,
        className: 'bg-blue-100 text-blue-700 border-blue-200',
        iconClassName: 'text-blue-600'
      };
    default:
      return {
        icon: PauseCircle,
        className: 'bg-gray-100 text-gray-700 border-gray-200',
        iconClassName: 'text-gray-600'
      };
  }
};

export const CampaignList = memo(({ campaigns, onSelect }: CampaignListProps) => {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden w-full shadow-sm animate-in fade-in duration-300">
      {campaigns.map((campaign, index) => {
        const statusConfig = getStatusConfig(campaign.status);
        const StatusIcon = statusConfig.icon;

        return (
          <div
            key={campaign.id}
            onClick={() => onSelect(campaign.name)}
            className={cn(
              "group p-4 hover:bg-muted/50 cursor-pointer transition-all duration-200",
              index !== campaigns.length - 1 && "border-b border-border"
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground mb-2 group-hover:text-purple-600 transition-colors">
                  {campaign.name}
                </p>
                
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border",
                      statusConfig.className
                    )}
                  >
                    <StatusIcon className={cn("w-3 h-3", statusConfig.iconClassName)} />
                    {campaign.status}
                  </span>
                  {campaign.budget && (
                    <span className="text-xs text-muted-foreground font-medium">
                      {campaign.budget}
                    </span>
                  )}
                </div>
                
                {campaign.performance && (
                  <p className="text-xs text-muted-foreground font-medium">
                    {campaign.performance}
                  </p>
                )}
              </div>
              
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all shrink-0 mt-1" />
            </div>
          </div>
        );
      })}
    </div>
  );
});

CampaignList.displayName = 'CampaignList';