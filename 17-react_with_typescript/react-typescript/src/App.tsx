// import Component from './tutorials/01-return';
// import Component from './tutorials/02-props';
// import Component from './tutorials/03-state';
// import Component from './tutorials/04-events';
import Component from './tutorials/05-challenge';

function App() {
  return (
    <main>
      {/* <h2>React & TypeScript</h2> */}
      {/* Return */}
      {/* <Component /> */}
      {/* Props */}
      {/* <Component name="peter" id={123}>
        <h2>hello world</h2>
      </Component> */}
      {/* <Component name="peter" id={123} /> */}
      {/* <Component id={123} /> Error */}
      {/* State */}
      {/* <Component /> */}
      {/* Events */}
      {/* <Component /> */}
      {/* Challenge */}
      <h2>React & TypeScript</h2>
      <Component type="basic" name="susan" />
      <Component type="advanced" name="anna" email="anna@mail.com" />
    </main>
  );
}

export default App;
