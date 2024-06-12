import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

// Object as a Prop
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
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};

const Book = (props) => {
  // console.log(props);
  const { img, title, author, id, getBook } = props;
  // const getSingleBook = () => {
  //   getBook(id);
  // };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      {/* <button onClick={getSingleBook}>Click me</button> */}
      <button onClick={() => getBook(id)}>Click me</button>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
