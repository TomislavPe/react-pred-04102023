import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import postsReducer from "./features/posts/postsSlice"
import postSaga from './features/posts/postsSaga'
import createSagaMiddleware from "redux-saga"

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer
  },
  middleware: [saga]
})

saga.run(postSaga)

