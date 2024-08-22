import { useGlobalContext } from './Context';

const App = () => {
  const { isSidebarOpen } = useGlobalContext();
  console.log(isSidebarOpen);

  return <h2>Strapi</h2>;
};

export default App;
