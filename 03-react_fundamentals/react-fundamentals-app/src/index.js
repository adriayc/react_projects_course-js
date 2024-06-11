import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const author = 'Jeffrey Mason';

const Book = () => {
  const title = 'Dad, I Want to Hear Your Story';

  return (
    <article className="book">
      <img src="./images/book-1.jpg" alt="Dad, I Want to Hear Your Story" />
      {/* JSX - JavaScript */}
      <h2>{title}</h2>
      <h4>{author}</h4>
      {/* <h4>{author.toUpperCase()}</h4> */}
      {/* <p>{let x = 6}</p> */}
      {/* <p>{6 + 6}</p> */}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
