import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './Context';
import sublinks from './data';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className="sidebar">
      <div className="sidebar-container">
        <button type="button" className="close-btn">
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item) => {
            // console.log(item);
            const { pageId, links, page } = item;
            return (
              <article key={pageId}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link) => {
                    const { id, url, icon, label } = link;
                    return (
                      <a key={id} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
