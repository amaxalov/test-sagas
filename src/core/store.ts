import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import logger from 'redux-logger'
import sagas from './sagas'

/* eslint-disable @typescript-eslint/no-explicit-any */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose
/* eslint-enable */

const sagaMiddleware = createSagaMiddleware()
const enhancer = applyMiddleware(logger, sagaMiddleware)
const store = createStore(rootReducer, composeEnhancers(enhancer))

sagaMiddleware.run(sagas)

export default store
