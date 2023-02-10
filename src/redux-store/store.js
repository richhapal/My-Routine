import { configureStore } from "@reduxjs/toolkit";
import task from "./todoSlice";
import timeFocus from "./timeFocusSlice";
import notificationAlertSlice from "./notificatonAlertSlice";
export const store = configureStore({
     reducer: {
          todoReducer: task,
          timeFocusReducer: timeFocus,
          notificationAlertReducer: notificationAlertSlice,
     },
});
