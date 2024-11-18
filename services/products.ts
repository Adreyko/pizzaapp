import { Product } from '@prisma/client';

import { ApiRoutes } from './consts';
import { api } from './instance';

export const getProducts = async (query: string): Promise<Product[]> => {
  return (
    await api.get<Product[]>(ApiRoutes.PRODUCT_SEARCH, {
      params: { query },
    })
  ).data;
};
