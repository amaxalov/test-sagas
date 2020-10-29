import { takeEvery, put, call, ForkEffect } from 'redux-saga/effects'
import { fetchTodoSuccess } from '../actions/todo'
import { FETCH_TODOS } from '../constants/todo'

function fetchData() {
  return fetch('/api/todos').then((response) => response.json())
}

function* workerLoadData() {
  const data = yield call(fetchData)
  yield put(fetchTodoSuccess(data))
}

export function* watchLoadData(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(FETCH_TODOS, workerLoadData)
}
