import React from 'react';
import svgPaths from '../imports/svg-lmgmq5rpht';

interface ChatHeaderProps {
  onEndChat: () => void;
}

function AIIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_ai)">
          <g>
            <path d={svgPaths.p22e6c000} fill="#932FFB" />
            <path d={svgPaths.p25037800} fill="#932FFB" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_ai">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ThreeDotsIcon() {
  return (
    <div className="relative shrink-0 size-[12px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g>
          <g>
            <path d={svgPaths.pe94d800} fill="black" />
            <path d={svgPaths.p13ba8f00} fill="black" />
            <path d={svgPaths.pc942880} fill="black" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function CloseIcon() {
  return (
    <div className="relative shrink-0 size-[12px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g>
          <path d={svgPaths.p184d7400} fill="black" />
        </g>
      </svg>
    </div>
  );
}

export function ChatHeader({ onEndChat }: ChatHeaderProps) {
  return (
    <div className="bg-white px-2 py-2 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-12 h-16">
            <AIIcon />
          </div>
          <span className="font-['Uber_Move_Text',sans-serif] text-base leading-5">Merchant Assistant</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onEndChat}
            className="bg-[#f3f3f3] px-2 py-1.5 rounded-full hover:bg-gray-200 transition-colors"
          >
            <span className="font-['Uber_Move_Text',sans-serif] text-xs leading-4 text-black">End chat</span>
          </button>

          <button className="bg-[#f3f3f3] hover:bg-gray-200 p-1.5 rounded-full transition-colors w-7 h-7 flex items-center justify-center">
            <ThreeDotsIcon />
          </button>

          <button className="hover:bg-gray-100 p-1.5 rounded-full transition-colors w-7 h-7 flex items-center justify-center">
            <CloseIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
