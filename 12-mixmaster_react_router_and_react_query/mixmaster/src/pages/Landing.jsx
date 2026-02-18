import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
// Components
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

// Query
const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.drinks;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    // Returns an newly created URL object
    const url = new URL(request.url);
    // Get search params or default empty string
    const searchTerm = url.searchParams.get('search') || '';
    // Asynchronous function that ca be used to get an existing query's cached data
    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));

    return { searchTerm };
  };

const Landing = () => {
  const { searchTerm } = useLoaderData();
  // useQuery
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));
  // console.log(drinks);

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Landing;
