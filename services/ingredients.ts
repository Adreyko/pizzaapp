import { Ingredient } from '@prisma/client';

import { ApiRoutes } from './consts';
import { api } from './instance';

export const getAll = async (): Promise<Ingredient[]> => {
  return (await api.get<Ingredient[]>(ApiRoutes.INGREDIENTS)).data;
};