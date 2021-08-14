import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import phonebookReducer from './phonebook/phonebook-reducer'
import thunk from 'redux-thunk'

let middleware = [thunk]
if (process.env.NODE_ENV === `development`) {
  middleware.push(logger)
}

const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware,
})

export default store
