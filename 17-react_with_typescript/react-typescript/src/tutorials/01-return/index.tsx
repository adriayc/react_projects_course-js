// function Component() {
// function Component(): JSX.Element {
function Component(): JSX.Element | null | string {
  return null; // Error (JSX.Element)
  return 'hello'; // Error (JSX.Element)
  return (
    <div>
      <h2>React & TypeScript</h2>
      <h2>Return Type</h2>
    </div>
  );
}

export default Component;
