import { configureStore } from "@reduxjs/toolkit";
import task from "./todoSlice";
export const store = configureStore({
     reducer: {
          todoReducer: task,
     },
});
