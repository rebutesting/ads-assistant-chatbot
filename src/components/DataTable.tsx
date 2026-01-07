import React, { memo } from 'react';
import { DataTableRow } from '../types';

interface DataTableProps {
  rows: DataTableRow[];
}

export const DataTable = memo(({ rows }: DataTableProps) => {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden w-full shadow-sm animate-in fade-in duration-300">
      <div className="divide-y divide-border">
        {rows.map((row, index) => (
          <div 
            key={`${row.label}-${index}`} 
            className="flex justify-between items-start gap-4 px-4 py-3 hover:bg-muted/50 transition-colors"
          >
            <span className="text-muted-foreground text-sm font-medium flex-shrink-0">
              {row.label}
            </span>
            <span className="text-foreground text-sm font-semibold text-right">
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
});

DataTable.displayName = 'DataTable';