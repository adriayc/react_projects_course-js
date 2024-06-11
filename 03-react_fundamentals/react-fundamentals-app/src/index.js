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
  return (
    <section className="booklist">
      <EventExample />

      {books.map((book) => {
        console.log(book);
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const EventExample = () => {
  const handleFormInput = () => {
    console.log('Handle form input');
  };
  const handleButtonClick = () => {
    alert('Handle button click');
  };

  // return <h1>Events</h1>;
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
      </form>
      <button onClick={handleButtonClick}>Click me</button>
    </section>
  );
};

const Book = (props) => {
  // console.log(props);
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
