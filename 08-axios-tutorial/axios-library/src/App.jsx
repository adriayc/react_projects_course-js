import Title from './components/Title';
import Setup from './examples/04-global-instance';
import './axios/global';

const App = () => {
  return (
    <main>
      <Title />
      <Setup />
    </main>
  );
};

export default App;
