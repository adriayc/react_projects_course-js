import { useQuery } from '@tanstack/react-query';
import customFetch from './utils';
import SingleItem from './SingleItem';

const Items = () => {
  // const result = useQuery({
  // isLoading - V4
  // const { isLoading, data } = useQuery({
  const { isPending, data } = useQuery({
    queryKey: ['tasks'],
    // queryFn: () => customFetch.get('/'),
    queryFn: async () => {
      const { data } = await customFetch.get('/');
      return data;
    },
  });
  // console.log(result);

  // if (isLoading) {
  if (isPending) {
    return <p style={{ marginTop: '1rem' }}>Loading...</p>;
  }
  // console.log(data);

  return (
    <div className="items">
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Items;
