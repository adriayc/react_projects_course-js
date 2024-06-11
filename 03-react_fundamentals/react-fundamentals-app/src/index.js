import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

// Simple List
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

const names = ['John', 'Peter', 'Susan'];
// const newNames = names.map((name) => {
//   console.log(name);
//   return <h1>{name}</h1>;
// });

const BookList = () => {
  // return <section className="booklist">{books}</section>;
  // return <section className="booklist">{names}</section>;
  // return <section className="booklist">{newNames}</section>;
  return (
    <section className="booklist">
      {names.map((name) => {
        console.log(name);
        return <h1>{name}</h1>;
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
