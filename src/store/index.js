import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { thunk } from 'redux-thunk'

import { cashReducer } from './cashReducer'
import { customerReducer } from './customerReducer'

const rootReducer = combineReducers({
  cashReducer,
  customerReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
