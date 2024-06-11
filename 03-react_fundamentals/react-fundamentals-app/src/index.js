import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

// Proper List
const books = [
  {
    author: 'Jeffrey Mason',
    title: 'Dad, I Want to Hear Your Story',
    img: './images/book-1.jpg',
  },
  {
    author: 'Michael Crichton, James Patterson',
    title: 'Eruption',
    img: 'https://m.media-amazon.com/images/I/81SIQfF-aGL._SL1500_.jpg',
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        console.log(book);
        const { img, title, author } = book;
        return (
          // <div>
          //   <h2>Item</h2>
          // </div>
          <Book img={img} title={title} author={author} />
        );
      })}
    </section>
  );
};

const Book = (props) => {
  // const Book = ({ img, title, author }) => {
  console.log(props);
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
