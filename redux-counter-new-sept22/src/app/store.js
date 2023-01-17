import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../reducers/Counter/CounterSlice'

export default configureStore({
 reducer: {
    counter: counterSlice
 }
})
