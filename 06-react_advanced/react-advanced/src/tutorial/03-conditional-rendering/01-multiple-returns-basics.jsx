import { useEffect } from 'react';
import { useState } from 'react';

const MultipleReturnsBasics = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // Done fetching data
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return <h2>Multiple Returns Basics</h2>;
};

export default MultipleReturnsBasics;
