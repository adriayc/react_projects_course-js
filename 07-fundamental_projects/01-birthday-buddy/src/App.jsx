import data from './data';

import { useState } from 'react';

const App = () => {
  const [people, setPeople] = useState(data);
  console.log(people);

  return <h2>Birthday Reminder</h2>;
};

export default App;
