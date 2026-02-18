import useToggle from './useToggle';

const ToggleExample = () => {
  // Custom hook
  //   const { show, toggle } = useToggle(false);
  const { show, toggle } = useToggle(true);

  return (
    <div>
      <h4>Toggle custom hook</h4>
      <button type="button" className="btn" onClick={toggle}>
        Toggle
      </button>
      {show && <h4>So stuff</h4>}
    </div>
  );
};

export default ToggleExample;
