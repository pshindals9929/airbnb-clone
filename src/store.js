import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initailState = {
  count: 0,
};

const rootReducer = (state = initailState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };

    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export default createStore(rootReducer, applyMiddleware(thunk));
