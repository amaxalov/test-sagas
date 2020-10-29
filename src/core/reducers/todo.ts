import { ITodoState, ITodoActions } from '../types/todo'
import { FETCH_TODOS, FETCH_TODOS_SUCCESS } from '../constants/todo'

export const defaultState: ITodoState = {
  todos: [],
  isFetched: false,
}

export function reducer(state: ITodoState = defaultState, action: ITodoActions): ITodoState {
  switch (action.type) {
    default:
      return state
    case FETCH_TODOS:
      return {
        ...state,
        isFetched: false,
      }
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        isFetched: true,
        todos: action.payload,
      }
  }
}
