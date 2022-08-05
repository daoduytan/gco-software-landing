import { useEffect, useState } from 'react';
import { getRandowNumber } from '../helps';

export const useActiveNumber = (lists: any[], time?: number) => {
  const [activeNumber, setActiveNumber] = useState<number>();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNumber(getRandowNumber(lists));
    }, time || 5000);
    () => {
      clearInterval(interval);
    };
  }, [lists]);

  return activeNumber;
};
