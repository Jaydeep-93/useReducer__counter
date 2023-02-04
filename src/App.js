import React, { useReducer } from 'react';
import './style.css';
const ACTION = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
};
export default function App() {
  const reducerFun = (state, action) => {
    if (action.type === ACTION.DECREMENT) {
      return { counter: state.counter - action.val };
    } else if (action.type === ACTION.INCREMENT) {
      return { counter: state.counter + action.val };
    }
    return state;
  };
  const [state, dispatch] = useReducer(reducerFun, { counter: 0 });
  return (
    <div>
      <span
        className="btn btn-sm btn-outline-secondary mx-2"
        onClick={(e) => {
          dispatch({ type: ACTION.DECREMENT, val: 1 });
        }}
      >
        Decrement
      </span>
      <span>{state.counter}</span>
      <span
        className="btn btn-sm btn-outline-secondary mx-2"
        onClick={(e) => {
          dispatch({ type: ACTION.INCREMENT, val: 1 });
        }}
      >
        Increment
      </span>
    </div>
  );
}
