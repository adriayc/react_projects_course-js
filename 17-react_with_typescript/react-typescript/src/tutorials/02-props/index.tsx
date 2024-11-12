import { type PropsWithChildren } from 'react';

// Option #1
// type ComponentProps = {
//   name: string;
//   id: number;
//   children?: React.ReactNode;
// };
// Option #2
type ComponentProps = PropsWithChildren<{
  name: string;
  id: number;
}>;

// function Component({ name, id }: { name: string; id: number }) {
function Component({ name, id, children }: ComponentProps) {
  // function Component(props: ComponentProps) {
  return (
    <div>
      {/* <h2>React & TypeScript</h2> */}
      {/* <h2>Props</h2> */}
      <h1>Name: {name}</h1>
      {/* <h1>Name: {props.name}</h1> */}
      <h1>ID: {id}</h1>
      {/* <h1>ID: {props.id}</h1> */}

      {/* Call children */}
      {children}
    </div>
  );
}

export default Component;
