import UserContainer from './UserContainer';

const NavLinks = ({ user, logout }) => {
  return (
    <div className="nav-container no-max-width">
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>

      <UserContainer user={user} logout={logout} />
    </div>
  );
};

export default NavLinks;
