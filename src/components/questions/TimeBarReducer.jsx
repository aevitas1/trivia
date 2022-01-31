import { useReducer, useEffect, useRef } from "react";

export const ACTIONS = {
  START: "start",
  STOP: "stop",
  RESET: "reset",
  TICK: "tick",
};
export default function TimeBarReducer() {
  const [state, dispatch] = useReducer(reducer, {
    progress: 10,
    isRunning: false,
  });
  const idRef = useRef(0);
  console.log(state.isRunning);
  useEffect(() => {
    if (!state.isRunning) {
      return;
    }
    idRef.current = setInterval(() => dispatch({ type: ACTIONS.TICK }), 100);
    return () => {
      clearInterval(idRef.current);
      idRef.current = 0;
    };
  }, [state.isRunning]);

  if (state.progress < 0) {
    state.isRunning = false;
  }

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.START:
        return { ...state, isRunning: true };
      case ACTIONS.STOP:
        return { ...state, isRunning: false };
      case ACTIONS.RESET:
        return { isRunning: false, progress: 10 };
      case ACTIONS.TICK:
        return { ...state, progress: state.progress - 0.1 };
      default:
        return state;
    }
  }
  return {
    state,
    reducer,
    dispatch,
  };
}

// const clearUsers = () => dispatch({type: 'CLEAR_USERS'})
