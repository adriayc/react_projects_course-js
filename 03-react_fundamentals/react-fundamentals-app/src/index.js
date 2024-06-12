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
  const handleFormInput = (e) => {
    // console.log(e);
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
    // console.log('Handle form input');
  };
  const handleButtonClick = () => {
    alert('Handle button click');
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <section>
      {/* <form onSubmit={handleFormSubmission}> */}
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="product"
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
        {/* <button type="submit"> */}
        <button type="submit" onClick={handleFormSubmission}>
          Submit
        </button>
        <div>
          <button type="button" onClick={handleButtonClick}>
            Click me
          </button>
        </div>
      </form>
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
