import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  problems: {},
  passages: {},
  singleProblem: {},
  singlePassage: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PROBLEMS":
      return {
        ...state,
        problems: action.problems
      };
    case "GET_SINGLE_PROBLEM":
      return {
        ...state,
        singleProblem: action.problem
      };
    case "GET_PASSAGES":
      return {
        ...state,
        passages: action.passages
      };
    case "GET_SINGLE_PASSAGE":
      return {
        ...state,
        singlePassage: action.passage
      };
    default:
      return state;
  }
};

export const initializeStore = (preloadedState = initialState) => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
};
