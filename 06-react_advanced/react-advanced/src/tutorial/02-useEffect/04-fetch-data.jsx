import { useEffect } from 'react';
import { useState } from 'react';

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    // console.log('Hello');

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        // console.log(users);

        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <h3>Github users</h3>
      <ul className="users">
        {users.map((user) => {
          console.log(user);
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FetchData;
