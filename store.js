import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  problems: {},
  passages: {},
  singleProblem: {},
  singlePassage: {},
  problemsMeta: {
    hasMore: false,
    pages: 0,
    currentPage: null,
    pageUrl: "http://18.237.242.89/api/problems?page="
  },
  passagesMeta: {
    hasMore: false,
    pages: null,
    currentPage: null,
    pageUrl: "http://18.237.242.89/api/passages?page="
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PROBLEMS":
      return {
        ...state,
        problems: action.problems,
        problemsMeta: {
          ...state.problemsMeta,
          pages: action.pages,
          currentPage: 1,
          hasMore: action.pages > action.currentPage ? true : false
        }
      };
    case "GET_SINGLE_PROBLEM":
      return {
        ...state,
        singleProblem: action.problem
      };
    case "GET_PASSAGES":
      return {
        ...state,
        passages: action.passages,
        passagesMeta: {
          ...state.passagesMeta,
          pages: action.pages,
          currentPage: 1,
          hasMore: action.pages >= action.currentPage ? true : false
        }
      };
    case "GET_SINGLE_PASSAGE":
      return {
        ...state,
        singlePassage: action.passage
      };
    case "GET_MORE_PROBLEMS":
      return {
        ...state,
        problems: state.problems.concat(action.newList),
        problemsMeta: {
          ...state.problemsMeta,
          currentPage: action.currentPage,
          hasMore: state.problemsMeta.pages > action.currentPage ? true : false
        }
      };
    case "GET_MORE_PASSAGES":
      return {
        ...state,
        passages: state.passages.concat(action.newList),
        passagesMeta: {
          ...state.passagesMeta,
          currentPage: action.currentPage,
          hasMore: state.passagesMeta.pages > action.currentPage ? true : false
        }
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
