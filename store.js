import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  problems: [],
  singleProblem: {},
  // problemsScroll: {
  //   pages: 0,
  //   nextPage: 0,
  //   nextUrl: `http://18.237.242.89/api/problems?page=`,
  //   hasMore: false
  // }
};

const reducer = async (state = initialState, action) => {
  switch (action.type) {
    case "GET_PROBLEMS":
      return {
        ...state,
        problems: action.problems,
      };
    case "GET_SINGLE_PROBLEM":
      return {
        ...state,
        singleProblem: action.problem
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
