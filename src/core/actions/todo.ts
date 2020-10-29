import { ITodoActions } from '../types/todo'
import { FETCH_TODOS, FETCH_TODOS_SUCCESS } from '../constants/todo'
import { ITodo } from '@/types/models/todo'

export const fetchTodoSuccess = (payload: ITodo[]): ITodoActions => ({
  type: FETCH_TODOS_SUCCESS,
  payload,
})

export const fetchTodoEx = (): ITodoActions => ({
  type: FETCH_TODOS,
})
