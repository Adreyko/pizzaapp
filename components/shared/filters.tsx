'use client';
import React, { FC } from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input, RangeSlider } from '../ui';
import { FilterCheckboxGroup } from './filter-checkbox-group';
import { useFilterIngredients } from '@/app/hooks/useFilterIngredients';

interface FiltersProps {
  className?: string;
}

export const Filters: FC<FiltersProps> = ({ className }) => {
  const { ingredients, loading } = useFilterIngredients();

  const items = ingredients.map((ingredient) => ({
    text: ingredient.name,
    value: String(ingredient.id),
  }));
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
        loading={loading}
        defaultItems={items.slice(0, 3)}
        items={items}
        limit={2}
      />
    </div>
  );
};
