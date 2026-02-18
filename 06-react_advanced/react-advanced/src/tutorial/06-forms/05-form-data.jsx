import { useState } from 'react';

const UncontrolledInputs = () => {
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const formData = new FormData(e.currentTarget);
    // console.log(formData);
    // const email = formData.get('email');
    // console.log(email);
    // console.log([...formData.entries()]);
    const newUser = Object.fromEntries(formData);
    console.log(newUser);
    setValue(value + 1);
    // Reset values
    e.currentTarget.reset();
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Form Data API</h4>

        {/* Name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" name="name" id="name" className="form-input" />
        </div>
        {/* Email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" name="email" id="email" className="form-input" />
        </div>
        {/* Password */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-input"
          />
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UncontrolledInputs;
