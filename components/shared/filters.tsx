'use client';
import { FC } from 'react';
import { Title } from './title';
import { Input, RangeSlider } from '../ui';
import { FilterCheckboxGroup } from './filter-checkbox-group';
import { useFilterIngredients } from '@/app/hooks/useFilterIngredients';

import useQueryFilters from '@/app/hooks/useQueryFilters';
import { useFilters } from '@/app/hooks/useFilter';

interface FiltersProps {
  className?: string;
}

export const Filters: FC<FiltersProps> = ({ className }) => {
  const { ingredients, loading } = useFilterIngredients();

  const filters = useFilters();

  useQueryFilters(filters);

  const { priceFrom, priceTo } = filters.prices;

  const {
    sizes,
    pizzaTypes,
    setPizzaTypes,
    setPrices,
    selectedIngredients,
    setSelectedIngredients,
    setSizes,
  } = filters;

  const items = ingredients.map((ingredient) => ({
    text: ingredient.name,
    value: String(ingredient.id),
  }));

  return (
    <div className={className}>
      <Title text='Filters' size='sm' className='mb-5 font-bold' />

      <FilterCheckboxGroup
        title='Types of Test'
        name='pizzaTypes'
        className='mb-5'
        onClickCheckbox={setPizzaTypes}
        selectedIds={pizzaTypes}
        items={[
          { text: 'Thin', value: '1' },
          { text: 'Traditional', value: '2' },
        ]}
      />

      <FilterCheckboxGroup
        title='Sizes'
        name='sizes'
        className='mb-5'
        onClickCheckbox={setSizes}
        selectedIds={sizes}
        items={[
          { text: '20 sm', value: '20' },
          { text: '30 sm', value: '30' },
          { text: '40 sm', value: '40' },
        ]}
      />

      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='font-bold mb-3'>Price from and to:</p>
        <div className='flex gap-3 mb-5'>
          <Input
            onChange={(e) =>
              setPrices({ priceFrom: Number(e.target.value), priceTo })
            }
            value={priceFrom}
            type='number'
            placeholder='0'
            min={0}
            max={3000}
          />
          <Input
            onChange={(e) =>
              setPrices({ priceFrom, priceTo: Number(e.target.value) })
            }
            value={priceTo}
            type='number'
            placeholder='3000'
            min={100}
            max={3000}
          />
        </div>
        <RangeSlider
          value={[priceFrom, priceTo]}
          onValueChange={([priceFrom, priceTo]) =>
            setPrices({ priceFrom, priceTo })
          }
          min={0}
          max={3000}
          step={10}
        />
      </div>

      <FilterCheckboxGroup
        title='Ingredients'
        className='mt-5'
        name='ingredients'
        loading={loading}
        defaultItems={items.slice(0, 3)}
        items={items}
        limit={2}
        onClickCheckbox={setSelectedIngredients}
        selectedIds={selectedIngredients}
      />
    </div>
  );
};
