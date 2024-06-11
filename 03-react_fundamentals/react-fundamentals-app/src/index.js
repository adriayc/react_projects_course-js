import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

// Children Prop
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
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
          consequatur nisi molestias, adipisci sunt eaque maiores dignissimos
          quas nobis dolorum!
        </p>
        <button>Click me</button>
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
};

const Book = (props) => {
  // const Book = ({ img, title, author, children }) => {
  console.log(props);
  const { img, title, author, children } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
