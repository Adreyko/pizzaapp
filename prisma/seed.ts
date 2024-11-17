import { hashSync } from 'bcrypt';
import { prisma } from './prisma-client';
import { categories, ingredients, products } from './contants';
import { Prisma } from '@prisma/client';

const randomDecimalNumber = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const generateProductItem = ({
  productId,
  pizzeType,
  size,
}: {
  productId: number;
  pizzeType?: 1 | 2 | 3;
  size?: 20 | 30 | 40;
}) => {
  return {
    productId,
    price: randomDecimalNumber(190, 600),
    pizzeType,
    size,
    quantity: 1,
  } as Prisma.ProductItemUncheckedCreateInput;
};

async function up() {
  // Create  users
  await prisma.user.createMany({
    data: [
      {
        email: 'user1@example.com',
        fullName: 'User One',
        password: hashSync('password1', 10),
        role: 'USER',
        verified: false,
        provider: null,
        providerId: null,
      },
      {
        email: 'user2@example.com',
        fullName: 'User Two',
        password: hashSync('password1', 10),
        role: 'ADMIN',
        verified: false,
        provider: null,
        providerId: null,
      },
    ],
  });

  // Create categories
  await prisma.category.createMany({
    data: categories,
  });

  // Create ingredients
  await prisma.ingredient.createMany({
    data: ingredients,
  });

  // Create products
  await prisma.product.createMany({
    data: products,
  });

  // Create pizzas

  const pizza1 = await prisma.product.create({
    data: {
      name: 'Peperoni Pizza',
      imageUrl:
        'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp',
      categoryId: 1,
      ingredient: {
        connect: ingredients.slice(0, 5),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: 'Cheesy Pizza',
      imageUrl:
        'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
      categoryId: 1,
      ingredient: {
        connect: ingredients.slice(5, 10),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: 'Chorizo Pizza',
      imageUrl:
        'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp',
      categoryId: 1,
      ingredient: {
        connect: ingredients.slice(10, 40),
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      generateProductItem({ productId: pizza1.id, pizzeType: 1, size: 20 }),
      generateProductItem({ productId: pizza1.id, pizzeType: 2, size: 30 }),
      generateProductItem({ productId: pizza1.id, pizzeType: 3, size: 40 }),

      generateProductItem({ productId: pizza2.id, pizzeType: 1, size: 20 }),
      generateProductItem({ productId: pizza2.id, pizzeType: 2, size: 30 }),
      generateProductItem({ productId: pizza2.id, pizzeType: 3, size: 40 }),

      generateProductItem({ productId: pizza3.id, pizzeType: 1, size: 20 }),
      generateProductItem({ productId: pizza3.id, pizzeType: 2, size: 30 }),
      generateProductItem({ productId: pizza3.id, pizzeType: 3, size: 40 }),

      generateProductItem({ productId: 1 }),
      generateProductItem({ productId: 2 }),
      generateProductItem({ productId: 3 }),
      generateProductItem({ productId: 4 }),
      generateProductItem({ productId: 5 }),
      generateProductItem({ productId: 6 }),
      generateProductItem({ productId: 7 }),
      generateProductItem({ productId: 8 }),
      generateProductItem({ productId: 9 }),
      generateProductItem({ productId: 10 }),
      generateProductItem({ productId: 11 }),
      generateProductItem({ productId: 12 }),
      generateProductItem({ productId: 13 }),
      generateProductItem({ productId: 14 }),
      generateProductItem({ productId: 15 }),
      generateProductItem({ productId: 16 }),
      generateProductItem({ productId: 17 }),
    ],
  });

  // Create cart

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 1,
        token: 'token1',
      },
      {
        userId: 2,
        totalAmount: 2,
        token: 'token2',
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });
}
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
