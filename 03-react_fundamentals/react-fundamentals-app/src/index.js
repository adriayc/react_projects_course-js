import React from 'react';
import ReactDOM from 'react-dom/client';

// function Greeting() {
//   return <h2>My First Component</h2>;
// }
function Greeting() {
  return (
    <div>
      <h2>My First Component</h2>
    </div>
  );
}

// Create Element Function
// function Greeting() {
//   return React.createElement('h2', {}, 'Hello world!');
// }
// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h2', {}, 'Hello world!')
//   );
// };

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);
