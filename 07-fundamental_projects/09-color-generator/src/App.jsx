import { useState } from 'react';
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';
import ColorList from './ColorList';
import Form from './Form';

const App = () => {
  // const [colors, setColors] = useState([]);
  const [colors, setColors] = useState(new Values('#f15025').all(10));
  // console.log(new Values('#f15025').all(10));

  const addColor = (color) => {
    // console.log(color);

    try {
      const newColor = new Values(color).all(10);
      setColors(newColor);
    } catch (error) {
      // console.log(error.message);
      // Toastify
      toast.error(error.message);
    }
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />

      {/* Toastify */}
      <ToastContainer position="top-center" />
    </main>
  );
};

export default App;
