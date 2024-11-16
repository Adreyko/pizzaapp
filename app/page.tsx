import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title size='lg' text='All Pizzas' className='font-extrabold' />
      </Container>

      <TopBar />

      <Container className='pb-14 mt-10'>
        <div className='flex gap-[60px]'>
          <div className='w-[250px]'>
            <Filters />
          </div>
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductsGroupList
                title='Pizza'
                products={[
                  {
                    id: 1,
                    name: 'Pepperoni',
                    imageUrl: '/images/pizza-1.png',
                    items: [{ price: 10 }],
                  },
                  {
                    id: 2,
                    name: 'Margherita',
                    imageUrl: '/images/pizza-2.png',
                    items: [{ price: 9 }],
                  },
                  {
                    id: 3,
                    name: 'Hawaiian',
                    imageUrl: '/images/pizza-3.png',
                    items: [{ price: 11 }],
                  },
                ]}
                categoryId={1}
              />

              <ProductsGroupList
                title='Combo'
                products={[
                  {
                    id: 1,
                    name: 'Pepperoni',
                    imageUrl: '/images/pizza-1.png',
                    items: [{ price: 10 }],
                  },
                  {
                    id: 2,
                    name: 'Margherita',
                    imageUrl: '/images/pizza-2.png',
                    items: [{ price: 9 }],
                  },
                  {
                    id: 3,
                    name: 'Hawaiian',
                    imageUrl: '/images/pizza-3.png',
                    items: [{ price: 11 }],
                  },
                ]}
                categoryId={2}
              />

              <ProductsGroupList
                title='Combo'
                products={[
                  {
                    id: 1,
                    name: 'Pepperoni',
                    imageUrl: '/images/pizza-1.png',
                    items: [{ price: 10 }],
                  },
                  {
                    id: 2,
                    name: 'Margherita',
                    imageUrl: '/images/pizza-2.png',
                    items: [{ price: 9 }],
                  },
                  {
                    id: 3,
                    name: 'Hawaiian',
                    imageUrl: '/images/pizza-3.png',
                    items: [{ price: 11 }],
                  },
                ]}
                categoryId={3}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
