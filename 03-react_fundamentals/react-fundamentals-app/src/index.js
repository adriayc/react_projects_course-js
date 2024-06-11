import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

// Key Prop
const books = [
  {
    author: 'Jeffrey Mason',
    title: 'Dad, I Want to Hear Your Story',
    img: './images/book-1.jpg',
    id: 1,
  },
  {
    author: 'Michael Crichton, James Patterson',
    title: 'Eruption',
    img: 'https://m.media-amazon.com/images/I/81SIQfF-aGL._SL1500_.jpg',
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        // {books.map((book, index) => {
        console.log(book);
        const { img, title, author, id } = book;
        return <Book img={img} title={title} author={author} key={id} />;
        // return <Book img={img} title={title} author={author} key={index} />;
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
