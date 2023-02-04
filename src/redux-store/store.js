import { configureStore } from "@reduxjs/toolkit";
import task from "./taskSlice";
export const store = configureStore({
     reducer: {
          taskReducer: task,
     },
});
