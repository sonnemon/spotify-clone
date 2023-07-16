import { useState, useEffect } from 'react';

function useDebounce<T>(value: T, delay?: number): T {
  const [debounceValue, setDevounceValue] = useState<T>(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDevounceValue(value);
    }, delay || 500);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debounceValue;
}

export default useDebounce;
