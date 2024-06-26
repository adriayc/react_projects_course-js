import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('Susan');
  const [user, setUser] = useState({ name: 'John' });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{text || 'Default value'}</h2>
      {text && (
        <div>
          <h2>Whatever return</h2>
          <h2>{name}</h2>
        </div>
      )}
      {/* {!text && (
        <div>
          <h2>Whatever return</h2>
          <h2>{name}</h2>
        </div>
      )} */}
      {user && <SomeComponent name={user.name} />}
    </div>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h2>Whatever return</h2>
      <h2>{name}</h2>
    </div>
  );
};

export default ShortCircuitExamples;
