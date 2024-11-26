import { headers } from 'next/headers';

const Ip = () => {
  const headersList = headers();
  const ip =
    headersList.get('x-forwarded-for') ||
    headersList.get('x-real-ip') ||
    'IP not found';

  return <div className='text-lg'>Your IP: {ip}</div>;
};

export default Ip;
