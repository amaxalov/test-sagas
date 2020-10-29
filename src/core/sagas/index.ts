import { ForkEffect } from 'redux-saga/effects'
import { watchLoadData } from './todo'

export default function* rootSaga(): Generator<(() => Generator<ForkEffect<never>, void, unknown>)[], void, unknown> {
  yield [watchLoadData]
}
