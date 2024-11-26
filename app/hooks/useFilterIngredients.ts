import { Api } from '@/services/api-client';
import { Ingredient } from '@prisma/client';
import { useEffect, useState } from 'react';

interface ReturnProps {
  ingredients: Ingredient[];
  loading: boolean;
}

export const useFilterIngredients = (): ReturnProps => {
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
