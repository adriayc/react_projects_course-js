import { useQuery } from '@tanstack/react-query';
// Fetch tours (Axios)
import { fetchTours } from './types';

// Axios and React Query
function Component() {
  const {
    isPending,
    isError,
    error,
    data: tours,
  } = useQuery({
    queryKey: ['tours'],
    queryFn: fetchTours,
  });

  if (isPending) return <h2>Loading...</h2>;
  if (isError) return <h2>Error: {error.message}</h2>;
  return (
    <div>
      {/* <h2>React & TypeScript</h2> */}
      {/* <h2>Fetch Data</h2> */}
      <h2 className="mb-1">Tours</h2>
      {tours.map((tour) => {
        return (
          <p key={tour.id} className="mb-1">
            {tour.name}
          </p>
        );
      })}
    </div>
  );
}

export default Component;
