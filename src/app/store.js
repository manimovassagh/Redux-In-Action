import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import nameReducer from '../features/name/nameSlice'
import statReducer from '../features/statistik/statSlice'
export default configureStore({
  reducer: {
    counter: counterReducer,
    name:nameReducer,
    stat:statReducer
  },
  
})