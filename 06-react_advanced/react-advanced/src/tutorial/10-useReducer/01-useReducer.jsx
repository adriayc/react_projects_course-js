import { useReducer } from 'react';
import { data } from '../../data';

const CLEAR_LIST = 'CLEAR_LIST';
const RESET_LIST = 'RESET_LIST';
const REMOVE_ITEM = 'REMOVE_ITEM';

const defaultState = {
  people: data,
  isLoading: false,
};

const reducer = (state, action) => {
  // console.log(action);
  if (action.type === CLEAR_LIST) {
    return {
      ...state,
      people: [],
    };
  }
  if (action.type === RESET_LIST) {
    return {
      ...state,
      people: data,
    };
  }
  if (action.type === REMOVE_ITEM) {
    // console.log(action);
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );

    return {
      ...state,
      people: newPeople,
    };
  }
  //   return state;
  throw new Error(`No matching "${action.type}" - action type`);
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
