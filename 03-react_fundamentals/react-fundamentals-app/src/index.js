import React from 'react';
import ReactDOM from 'react-dom/client';

// Nest Components
function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}
const Person = () => <h2>Adriano Ayala</h2>;
const Message = () => {
  return <p>This is my message</p>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);
