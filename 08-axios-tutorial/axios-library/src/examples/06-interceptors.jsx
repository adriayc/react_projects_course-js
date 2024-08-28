import { useEffect } from 'react';
// Custom instance (interceptor)
import authFetch from '../axios/interceptors';

const Interceptors = () => {
  const fetchData = async () => {
    // console.log('Axios interceptors');

    try {
      const resp = await authFetch('/react-store-productss');
      console.log(resp);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">Interceptors</h2>;
};

export default Interceptors;
