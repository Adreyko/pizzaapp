import { cn } from '@/lib/utils';
import { ArrowUpDown } from 'lucide-react';
import React, { FC } from 'react';

interface SortPopupProps {
  className?: string;
}

export const SortPopup: FC<SortPopupProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xlx cursor-pointer',
        className
      )}
    >
      <ArrowUpDown size={16} />
      <b>Sort by:</b>
      <b className='text-primary'>Name</b>
    </div>
  );
};
