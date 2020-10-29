import { Action } from 'redux'
import { FETCH_TODOS, FETCH_TODOS_SUCCESS } from '../constants/todo'
import { ITodo } from '@/types/models/todo'

export type IFetchAction = Action<typeof FETCH_TODOS>

export interface IFetchSuccessAction extends Action<typeof FETCH_TODOS_SUCCESS> {
  payload: ITodo[]
}

export interface ITodoState {
  todos: ITodo[]
  isFetched: boolean
}

export type ITodoActions = IFetchAction | IFetchSuccessAction
