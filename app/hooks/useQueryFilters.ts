import { useEffect, useRef } from 'react';
import { Filters } from './useFilter';
import QueryString from 'qs';
import { useRouter } from 'next/navigation';

const useQueryFilters = (filters: Filters) => {
  const { sizes, pizzaTypes, selectedIngredients, prices } = filters;

  const isMounted = useRef(false);
  const router = useRouter();

  useEffect(() => {
    if (isMounted.current) {
      const params = {
        ...filters.prices,
        pizzaTypes: Array.from(pizzaTypes),
        selectedIngredients: Array.from(selectedIngredients),
        sizes: Array.from(sizes),
      };
      const query = QueryString.stringify(params, {
        arrayFormat: 'comma',
      });

      router.push(`?${query}`, {
        scroll: false,
      });
    }
    isMounted.current = true;
  }, [sizes, pizzaTypes, prices, selectedIngredients, filters, router]);

  return filters;
};

export default useQueryFilters;
