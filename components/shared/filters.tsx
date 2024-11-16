import React, { FC } from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input, RangeSlider } from '../ui';
import { FilterCheckboxGroup } from './filter-checkbox-group';

interface FiltersProps {
  className?: string;
}

export const Filters: FC<FiltersProps> = ({ className }) => {
  return (
    <div className={className}>
      <Title text='Filters' size='sm' className='mb-5 font-bold' />

      <div className='flex flex-col gap-4'>
        <FilterCheckbox text='Can pick' value='1' />
        <FilterCheckbox text='New products' value='2' />
      </div>

      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='font-bold mb-3'>Price from and to:</p>
        <div className='flex gap-3 mb-5'>
          <Input
            type='number'
            placeholder='0'
            min={0}
            max={3000}
            defaultValue={0}
          />
          <Input
            type='number'
            placeholder='3000'
            min={100}
            max={3000}
            defaultValue={3000}
          />
        </div>
        <RangeSlider min={0} max={3000} step={10} value={[0, 3000]} />
      </div>

      <FilterCheckboxGroup
        title='Ingredients'
        className='mt-5'
        defaultItems={[
          { text: 'Category 1', value: '1' },
          { text: 'Category 2', value: '2' },
        ]}
        items={[
          { text: 'Category 1', value: '1' },
          { text: 'Category 2', value: '2' },
          { text: 'Category 3', value: '3' },
        ]}
        limit={2}
      />
    </div>
  );
};
