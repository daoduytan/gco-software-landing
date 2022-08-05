import { useEffect, useState } from 'react';

interface Props {
  value: number;
  speed?: number;
}
const Counter = ({ value, speed = 1000 }: Props) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    if (count === value) {
      clearInterval(interval);
    }

    () => {
      clearInterval(interval);
    };
  }, [value]);

  return <span>{count}</span>;
};

export { Counter };
