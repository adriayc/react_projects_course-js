import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        // console.log(resp);
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const result = await resp.json();
        console.log(result);
        setData(result);
      } catch (error) {
        // console.log(error);
        setIsError(true);
      }
      // Hide loading
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { isLoading, isError, data };
};

export default useFetch;
