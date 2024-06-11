import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

// Props - Basic Setup
const author = 'Jeffrey Mason';
const title = 'Dad, I Want to Hear Your Story';
const img = './images/book-1.jpg';

// Parameters
// const someFunc = (param1, param2) => {
//   console.log(param1, param2);
// };

// Argunments
// someFunc('job', 'developer');

const BookList = () => {
  return (
    <section className="booklist">
      {/* <Book job="developer" /> */}
      {/* <Book title="ramdon title" number={22} /> */}
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
      {/* {console.log(props)} */}
      {/* <p>{props.job}</p> */}
      {/* <p>{props.title}</p> */}
      {/* <p>{props.number}</p> */}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
