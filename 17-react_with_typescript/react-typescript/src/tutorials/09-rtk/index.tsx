// Custom hooks (RTK)
import { useAppSelector, useAppDispatch } from '../../hooks';
// Action (RTK)
import { increment, decrement, reset, setStatus } from './counterSlice';

function Component() {
  const { count, status } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div>
      {/* <h2>React & TypeScript</h2> */}
      {/* <h2>Redux Toolkit</h2> */}
      <h2>Count: {count}</h2>
      <h2>Status: {status}</h2>

      <div className="btn-container">
        <button
          type="button"
          className="btn"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button type="button" className="btn" onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
      <div className="btn-container">
        <button
          type="button"
          className="btn"
          onClick={() => dispatch(setStatus('active'))}
        >
          Set Status to Active
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => dispatch(setStatus('inactive'))}
        >
          Set Status to Inactive
        </button>
      </div>
    </div>
  );
}

export default Component;
