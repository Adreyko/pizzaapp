'use client';

import React, { useEffect } from 'react';
import { Title } from './title';
import { ProductCard } from './product-card';
import { cn } from '@/lib/utils';
import { useIntersection } from 'react-use';
import { useCategory } from '@/store/category';

interface Props {
  title: string;
  products: any[];
  className?: string;
  listClassName?: string;
  categoryId: number;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  products,
  listClassName,
  categoryId,
  className,
}) => {
  const setActiveId = useCategory((state) => state.setActiveId);
  const intersectionRef = React.useRef(null);

  const intersection = useIntersection(intersectionRef, {
    threshold: 1,
    rootMargin: '-100px 0px -100px 0px',
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveId(categoryId);
    }
  }, [intersection?.isIntersecting]);

  const filteredProducts = products.filter(
    (product) => product.items.length > 0
  );

  return (
    <div className={cn(className, 'min-h-[500px]')} id={title}>
      <Title text={title} size='lg' className='font-extrabold mb-5' />
      <div
        ref={intersectionRef}
        className={cn('grid grid-cols-3 gap-[50px]', listClassName)}
      >
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
          />
        ))}
      </div>
    </div>
  );
};
