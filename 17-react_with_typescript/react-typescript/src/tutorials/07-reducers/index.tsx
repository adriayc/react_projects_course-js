import { useReducer } from 'react';
// Reducer (initialState and counterReducer)
import { initialState, counterReducer } from './reducer';

function Component() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      {/* <h2>React & TypeScript</h2> */}
      {/* <h2>Reducers</h2> */}
      <h2>Count: {state.count}</h2>
      <h2>Status: {state.status}</h2>

      <div className="btn-container">
        <button
          type="button"
          className="btn"
          onClick={() => dispatch({ type: 'increment' })}
        >
          Increment
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => dispatch({ type: 'decrement' })}
        >
          Decrement
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => dispatch({ type: 'reset' })}
        >
          Reset
        </button>
      </div>
      <div className="btn-container">
        <button
          onClick={() => dispatch({ type: 'setStatus', payload: 'active' })}
          className="btn"
        >
          Set Status to Active
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: 'setStatus', payload: 'inactive' })}
        >
          Set Status to Inactive
        </button>
      </div>
    </div>
  );
}

export default Component;
