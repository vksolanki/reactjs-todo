import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './features/todo/todoSlice'
import todoUIReducer from './features/todo/todoUISlice'


export const store = configureStore({
  reducer: {
    todo: todoReducer,
    todoui: todoUIReducer
  }
})