import React, { useState } from 'react';
import svgPaths from '../imports/svg-lmgmq5rpht';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

function PlusIcon() {
  return (
    <div className="relative shrink-0 size-3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <path d={svgPaths.pb9563d0} fill="white" />
      </svg>
    </div>
  );
}

function SendIcon() {
  return (
    <div className="relative shrink-0 size-3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <path d={svgPaths.p3812800} fill="white" />
      </svg>
    </div>
  );
}

export function ChatInput({ onSend, disabled = false }: ChatInputProps) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() && !disabled) {
      onSend(input);
      setInput('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t border-gray-200 px-3 py-2.5 bg-white">
      <div className="flex gap-2 items-center">
        <button 
          className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors disabled:opacity-50"
          disabled={disabled}
        >
          <PlusIcon />
        </button>
        
        <div className="flex-1 relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything..."
            disabled={disabled}
            className="w-full px-3 py-2 bg-white border border-gray-200 rounded-full outline-none focus:border-[#7a15cf] transition-colors font-['Uber_Move_Text',sans-serif] text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
        </div>

        <button
          onClick={handleSend}
          disabled={!input.trim() || disabled}
          className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <SendIcon />
        </button>
      </div>
    </div>
  );
}