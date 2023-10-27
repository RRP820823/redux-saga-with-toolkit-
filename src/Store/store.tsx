import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import counterReducer from "../Feature/counterSlice";
import catsReducer from "../Feature/catSlice";
import catSaga from "../catSaga";

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cats: catsReducer,
  },
  middleware: [saga],
});

saga.run(catSaga);
