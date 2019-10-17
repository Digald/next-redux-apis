import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  problems: [],
  singleProblem: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PROBLEMS':
      return {
        ...state,
        problems: action.problems
      }
    default:
      return state
  }
}

export const initializeStore = (preloadedState = initialState) => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  )
}
