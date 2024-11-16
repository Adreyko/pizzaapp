import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import { Categories } from './categories';
import { SortPopup } from './sort-popup';
import { Container } from './container';

interface TopBarProps {
  className?: string;
}
export const TopBar: FC<TopBarProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10',
        className
      )}
    >
      <Container className='flex justify-between items-center'>
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};
