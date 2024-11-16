'use client';
import { cn } from '@/lib/utils';
import { getActiveCategoryId, useCategory } from '@/store/category';
import { FC } from 'react';

interface CategoriesProps {
  className?: string;
}

const categories = [
  { id: 1, name: 'Pizza' },
  { id: 2, name: 'Combo' },
  { id: 3, name: 'Vegan' },
  { id: 4, name: 'Spicy' },
  { id: 5, name: 'Cheese' },
];

const scrollWithOffset = (elementId: string) => {
  const element = document.getElementById(elementId);
  const categories = document.getElementById('categories');

  if (element && categories) {
    const categoriesHeight = categories.offsetHeight;
    window.scrollTo({
      top: element.offsetTop - categoriesHeight - 42,
      behavior: 'smooth',
    });
  }
};

export const Categories: FC<CategoriesProps> = ({ className }) => {
  const activeCategoryId = useCategory(getActiveCategoryId);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    categoryName: string
  ) => {
    e.preventDefault();
    scrollWithOffset(categoryName);
  };

  return (
    <div
      id='categories'
      className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
    >
      {categories.map((category) => (
        <a
          key={category.id}
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            category.id === activeCategoryId &&
              'bg-white shadow-md shadow-gray-200 text-primary'
          )}
          href={`/#${category.name}`}
          onClick={(e) => handleClick(e, category.name)}
        >
          {category.name}
        </a>
      ))}
    </div>
  );
};
