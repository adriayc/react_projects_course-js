import { useRef } from 'react';
import { useGlobalContext } from './Context';
import sublinks from './data';

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();

  const submenuContainerRef = useRef(null);

  const currentPage = sublinks.find((item) => item.pageId === pageId);
  // console.log(currentPage);

  const handleMouseLeave = (event) => {
    // console.log(event);

    // setPageId(null);

    const submenu = submenuContainerRef.current;
    // const result = submenu.getBoundingClientRect();
    const { left, right, bottom } = submenu.getBoundingClientRect();
    const { clientX, clientY } = event;
    // console.log(submenu);
    // console.log(result);
    // console.log(clientX, clientY);

    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }
  };

  return (
    <div
      className={currentPage ? 'submenu show-submenu' : 'submenu'}
      onMouseLeave={handleMouseLeave}
      ref={submenuContainerRef}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr',
        }}
      >
        {currentPage?.links.map((link) => {
          const { id, url, label, icon } = link;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
