import React from 'react';

interface PreloadedPromptsProps {
  onPromptClick: (action: string) => void;
}

export function PreloadedPrompts({ onPromptClick }: PreloadedPromptsProps) {
  const prompts = [
    { text: "Why aren't my ads delivering?", action: 'Fix My Ads' },
    { text: "Increase my top campaign's budget by 20%.", action: 'Edit Campaign' },
    { text: "Create a new ad for my Sale.", action: 'Create Campaign' },
    { text: "Give me performance insights.", action: 'Get Insights' },
    { text: "Fix my disapproved ad.", action: 'troubleshoot' },
    { text: "Optimize my campaigns.", action: 'Optimize Campaigns' },
  ];

  return (
    <div className="px-3 pb-3">
      <p className="font-['Uber_Move_Text',sans-serif] text-xs text-[#4b4b4b] mb-2">Suggested actions:</p>
      <div className="grid grid-cols-2 gap-2">
        {prompts.map((prompt, index) => (
          <button
            key={index}
            onClick={() => onPromptClick(prompt.action)}
            className="px-2.5 py-2 bg-white border border-gray-200 rounded-xl text-left text-xs text-gray-700 hover:border-[#7a15cf] hover:bg-[#faf5ff] transition-all font-['Uber_Move_Text',sans-serif] leading-tight"
          >
            {prompt.text}
          </button>
        ))}
      </div>
    </div>
  );
}