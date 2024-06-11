import React from 'react';
import ReactDOM from 'react-dom/client';
// Import CSS
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

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/41kw-B7x7EL._SY445_SX342_.jpg"
    alt="Dad, I Want to Hear Your Story"
  />
);
const Title = () => <h2>Dad, I Want to Hear Your Story</h2>;
const Author = () => {
  return <h4>Jeffrey Mason</h4>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
