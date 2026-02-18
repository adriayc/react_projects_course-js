import { createContext, useContext, useState } from 'react';

// Define context
const GlobalContext = createContext();

// Custom hook (Context)
export const useGlobalContext = () => useContext(GlobalContext);

// Define component
// const AppContext = (props) => {
const AppContext = ({ children }) => {
  const [name, setName] = useState('Adriano');
  return (
    <GlobalContext.Provider
      value={{
        // name: name,
        name,
        // setName: setName,
        setName,
      }}
    >
      {/* {props.children} */}
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
