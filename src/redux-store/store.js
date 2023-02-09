import { configureStore } from "@reduxjs/toolkit";
import task from "./todoSlice";
import timeFocus from "./timeFocusSlice";
export const store = configureStore({
     reducer: {
          todoReducer: task,
          timeFocusReducer: timeFocus,
     },
});
