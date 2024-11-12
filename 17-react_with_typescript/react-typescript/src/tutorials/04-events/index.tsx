import React, { useState } from 'react';

type Person = {
  name: string;
};

function Component() {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  // Input element
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  // Form element
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    console.log(data);
    // const text = formData.get('text') as string;
    // const person: Person = { name: text };
    const person: Person = { name: data.text as string };
  };

  return (
    <div>
      {/* <h2>React & TypeScript</h2> */}
      {/* <h2>Events</h2> */}
      <h2>events example</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input mb-1"
          value={text}
          onChange={(e) => setText(e.target.value)}
          name="text"
        />
        <input
          type="email"
          className="form-input mb-1"
          value={email}
          onChange={handleChange}
          name="email"
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
}

export default Component;
