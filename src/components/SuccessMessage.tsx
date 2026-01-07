import React, { memo } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface SuccessMessageProps {
  message: string;
}

export const SuccessMessage = memo(({ message }: SuccessMessageProps) => {
  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl px-4 py-3 flex items-center gap-3 shadow-sm animate-in slide-in-from-left duration-300">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
        <CheckCircle2 className="w-5 h-5 text-green-600" strokeWidth={2.5} />
      </div>
      <span className="text-green-900 text-sm font-semibold">
        {message}
      </span>
    </div>
  );
});

SuccessMessage.displayName = 'SuccessMessage';