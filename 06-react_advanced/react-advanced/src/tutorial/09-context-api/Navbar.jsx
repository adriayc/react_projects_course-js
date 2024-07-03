import { createContext, useState } from 'react';
import NavLinks from './NavLinks';

// Define context
export const NavbarContext = createContext();
// console.log(NavbarContext);

const Navbar = () => {
  const [user, setUser] = useState({ name: 'Adriano' });

  const logout = () => {
    setUser(null);
  };

  return (
    <NavbarContext.Provider
      value={{
        user,
        logout,
      }}
    >
      <nav className="navbar">
        <h5>CONTEXT API</h5>

        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;
