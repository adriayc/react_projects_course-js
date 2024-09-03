import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
// Custom hook (Context)
import { useGlobalContext } from './context';

const url =
  'https://api.unsplash.com/search/photos?client_id={{YOUR_ACCESS_KEY}}';

const Gallery = () => {
  const { searchTerm } = useGlobalContext();

  const response = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    },
  });
  // console.log(response);

  if (response.isPending) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (response.isError) {
    return (
      <section className="image-container">
        <h4>There was an error....</h4>
      </section>
    );
  }

  const results = response.data.results;
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found...</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        console.log(item);
        const url = item?.urls?.regular;
        return (
          <img
            key={item.id}
            src={url}
            alt={item.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
