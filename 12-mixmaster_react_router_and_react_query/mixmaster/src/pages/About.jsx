import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link to="/">Home Page</Link>
      <a href="https://johnsmilga.com/">Best web dev courses</a>
    </div>
  );
};

export default About;
