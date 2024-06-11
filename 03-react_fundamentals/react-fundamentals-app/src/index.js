import React from 'react';
import ReactDOM from 'react-dom/client';

// JSX Rules
function Greeting() {
  return <h2>Hello world!</h2>;
}
// function Greeting() {
//   return (
//     <>
//       <div className="someValue">
//         <h2>My First Component</h2>
//         <ul>
//           <li>
//             <a href="#">Hello world</a>
//           </li>
//         </ul>
//       </div>
//       <h2>Other title</h2>
//       <input type="text" name="" id="" />
//     </>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);
