import { useState } from 'react';
import axios from 'axios';

const url = 'https://icanhazdadjoke.com/';
// Accpt: 'application/json'

const Headers = () => {
  const [joke, setJoke] = useState('Random dad joke');

  const fetchDataJoke = async () => {
    // console.log('Fetch dad joke');
    try {
      const { data } = await axios(url, {
        headers: {
          Accept: 'application/json',
        },
      });
      //   console.log(data);
      setJoke(data.joke);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <section className="section text-center">
      <button type="button" className="btn" onClick={fetchDataJoke}>
        Random joke
      </button>
      <p className="dad-joke">{joke}</p>
    </section>
  );
};
export default Headers;
