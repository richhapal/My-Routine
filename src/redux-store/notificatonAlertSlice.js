import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     showNotification: true,
};

const notificationAlert = createSlice({
     name: "notification",
     initialState,
     reducers: {
          updateNotification(state) {
               state.showNotification = false;
          },
     },
});

export const { updateNotification } = notificationAlert.actions;
export default notificationAlert.reducer;
