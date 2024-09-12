import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
// Components
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async ({ request }) => {
  // Returns an newly created URL object
  const url = new URL(request.url);
  // Get search params or default empty string
  const searchTerm = url.searchParams.get('search') || '';

  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  //   console.log(response);

  return { drinks: response.data.drinks, searchTerm };
};

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData();
  // console.log(drinks);

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Landing;
