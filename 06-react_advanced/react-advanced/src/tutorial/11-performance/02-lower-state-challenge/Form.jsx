import { useState } from 'react';

const Form = ({ addPerson }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert('Please provide name value');
      return;
    }

    addPerson(name);
    setName('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </form>
  );
};

export default Form;
