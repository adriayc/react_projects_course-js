import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

// Props - Semewhat Dynamic Setup
const firstBook = {
  author: 'Jeffrey Mason',
  title: 'Dad, I Want to Hear Your Story',
  img: './images/book-1.jpg',
};
const secondBook = {
  author: 'Michael Crichton, James Patterson',
  title: 'Eruption',
  img: 'https://m.media-amazon.com/images/I/81SIQfF-aGL._SL1500_.jpg',
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
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
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
