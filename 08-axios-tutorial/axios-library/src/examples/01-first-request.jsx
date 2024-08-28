import { useEffect } from 'react';
import axios from 'axios';
// Limit, if 429 wait for 15 min and try again
const url = 'https://www.course-api.com/react-store-productss';

const FirstRequest = () => {
  const fetchData = async () => {
    try {
      const response = await axios(url);
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    // console.log('First axios request');
    fetchData();
  }, []);

  return <h2 className="text-center">First request</h2>;
};
export default FirstRequest;
