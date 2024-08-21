import { useState, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { links } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const linksRef = useRef(null);

  const toggleLinks = () => {
    // console.log(linksRef.current);
    // The Element.getBoundClientReact() method return a DOMRect object providing information about the size of an element and its position relative to the viewport.
    console.log(linksRef.current.getBoundingClientRect());

    setShowLinks(!showLinks);
  };

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="Logo" className="logo" />
          <button type="button" className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <ul className="links" ref={linksRef} style={linkStyles}>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
