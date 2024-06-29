import { useState } from 'react';
import { data } from '../../data';

const UserChallenge = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate
    if (!name) return;

    const fakeId = Date.now();
    // console.log(fakeId);
    // const newUser = { id: fakeId, name: name };
    const newUser = { id: fakeId, name };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    console.log('Form submitted');
    // Reset value
    setName('');
  };

  const removeUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>

        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>

      {/* Render users below */}
      <h3>Users</h3>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <button
              type="button"
              className="btn"
              onClick={() => removeUser(user.id)}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default UserChallenge;
