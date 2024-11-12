// import Component from './tutorials/01-return';
import Component from './tutorials/02-props';

function App() {
  return (
    <main>
      {/* <h2>React & TypeScript</h2> */}
      {/* Return */}
      {/* <Component /> */}
      {/* Props */}
      <Component name="peter" id={123}>
        <h2>hello world</h2>
      </Component>
      <Component name="peter" id={123} />
      {/* <Component id={123} /> Error */}
    </main>
  );
}

export default App;
