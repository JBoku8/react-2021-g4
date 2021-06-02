import { useEffect } from 'react';

export const useBackgroundColor = (color = 'red') => {
  useEffect(() => {
    document.body.style.backgroundColor = color;

    return () => {
      document.body.style.backgroundColor = 'initial';
    };
  }, [color]);
};

export default useBackgroundColor;
