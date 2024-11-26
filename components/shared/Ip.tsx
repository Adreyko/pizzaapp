'use client';
import { useEffect, useState } from 'react';

const Ip = () => {
  const [ip, setIp] = useState<string>('Loading...');

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setIp(data.ip);
      } catch (error) {
        setIp('Failed to load IP');
        console.error('Error fetching IP:', error);
      }
    };

    fetchIp();
  }, []);

  return <div className='text-lg'>Your IP: {ip}</div>;
};

export default Ip;
