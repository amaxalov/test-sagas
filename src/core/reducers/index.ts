import { combineReducers } from 'redux'
import { reducer as todoStore } from './todo'

const rootReducer = combineReducers({ todoStore })

export default rootReducer
