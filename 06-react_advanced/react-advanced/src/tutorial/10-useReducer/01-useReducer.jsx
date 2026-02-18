import { useReducer } from 'react';
import { data } from '../../data';
import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from './actions';
import reducer from './reducer';

const defaultState = {
  people: data,
  isLoading: false,
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  // console.log(state);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
  };

  const resetList = () => {
    dispatch({ type: RESET_LIST });
  };

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        );
      })}

      {state.people.length < 1 ? (
        <button
          type="button"
          className="btn"
          onClick={resetList}
          style={{ marginTop: '2rem' }}
        >
          Reset
        </button>
      ) : (
        <button
          type="button"
          className="btn"
          onClick={clearList}
          style={{ marginTop: '2rem' }}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
