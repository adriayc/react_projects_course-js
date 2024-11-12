import { useState } from 'react';

type Link = {
  id: number;
  url: string;
  text: string;
};

const navLinks: Link[] = [
  { id: 1, url: 'some url', text: 'some text' },
  { id: 2, url: 'some url', text: 'some text' },
];

function Component() {
  const [text, setText] = useState('shakeAndBake');
  const [number, setNumber] = useState(1);
  // const [number, setNumber] = useState<number>(1);
  const [list, setList] = useState<string[]>([]);
  const [links, setLinks] = useState<Link[]>(navLinks);

  return (
    <div>
      <h2 className="mb-1">React & TypeScript</h2>
      {/* <h2>State</h2> */}
      <button
        type="button"
        className="btn btn-center"
        onClick={() => {
          //   setText(1); // Error
          setNumber(23);
          setList(['hello', 'world']);
          //   setList([1, 3]); // Error
          setLinks([...links, { id: 3, url: 'hello', text: 'hello' }]);
          //   setLinks([...links, { id: 3, url: 'hello' }]); // Error
        }}
      >
        click me
      </button>
    </div>
  );
}

export default Component;
