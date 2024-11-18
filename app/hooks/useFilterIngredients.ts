import { Api } from '@/services/api-client';
import { Ingredient } from '@prisma/client';
import { useEffect, useState } from 'react';

export const useFilterIngredients = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    Api.ingredients
      .getAll()
      .then(setIngredients)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);
  return { ingredients, loading };
};
