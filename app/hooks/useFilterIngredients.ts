import { Api } from '@/services/api-client';
import { Ingredient } from '@prisma/client';
import { useEffect, useState } from 'react';
import { useSet } from 'react-use';

interface ReturnProps {
  ingredients: Ingredient[];
  loading: boolean;
  selectedIds: Set<string>;
  onAddId: (id: string) => void;
}

export const useFilterIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [selectedIds, { toggle: onAddId }] = useSet(new Set<string>([]));

  useEffect(() => {
    Api.ingredients
      .getAll()
      .then(setIngredients)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);
  return { ingredients, loading, selectedIds, onAddId };
};
