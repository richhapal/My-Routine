import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     defaultSelect: true,
     shortSelect: false,
     longSelect: false,
     defaultTimeMinute: "55",
     defaultTimeSecond: "00",
     shortTimeMinute: "05",
     shortTimeSecond: "00",
     longTimeMinute: "15",
     longTimeSecond: "00",
     isTimeRunning: false,
     timeInterval: false,
};

const timeFocusSlice = createSlice({
     name: "timeFocus",
     initialState,
     reducers: {
          updateTimeSelector(state, actions) {
               const selector = actions.payload.toLowerCase();
               if (selector.includes("default")) {
                    state.defaultSelect = true;
                    state.shortSelect = false;
                    state.longSelect = false;
                    state.shortTimeMinute = "05";
                    state.shortTimeSecond = "00";
                    state.longTimeMinute = "15";
                    state.longTimeSecond = "00";
                    state.isTimeRunning = false;
                    clearInterval(state.timeInterval);
                    state.timeInterval = false;
                    console.log("default");
               } else if (selector.includes("short")) {
                    state.defaultSelect = false;
                    state.shortSelect = true;
                    state.longSelect = false;
                    state.defaultTimeMinute = "55";
                    state.defaultTimeSecond = "00";
                    state.longTimeMinute = "15";
                    state.longTimeSecond = "00";
                    state.isTimeRunning = false;
                    clearInterval(state.timeInterval);
                    state.timeInterval = false;
                    console.log("short");
               } else {
                    state.defaultSelect = false;
                    state.shortSelect = false;
                    state.longSelect = true;
                    state.defaultTimeMinute = "55";
                    state.defaultTimeSecond = "00";
                    state.shortTimeMinute = "05";
                    state.shortTimeSecond = "00";
                    state.isTimeRunning = false;
                    clearInterval(state.timeInterval);
                    state.timeInterval = false;
                    console.log("long");
               }
          },
          updateDefaultTimeAlert(state) {
               let min = Number(state.defaultTimeMinute);
               let sec = Number(state.defaultTimeSecond);
               console.log(min, sec);
               if (state.isTimeRunning) {
                    if (min === 0 && sec === 1) {
                         clearInterval(state.timeInterval);
                         state.isTimeRunning = false;
                         console.log("Please Take Break");
                         state.defaultTimeMinute = "01";
                         state.defaultTimeSecond = "00";
                    }
                    if (sec === 0) {
                         sec = 60;
                         sec--;
                         if (min !== 0) {
                              min--;
                         }
                    } else {
                         sec--;
                    }

                    if (sec.toString().length == 1) {
                         sec = "0" + sec;
                    }
                    if (min.toString().length == 1) {
                         min = "0" + min;
                    }

                    state.defaultTimeMinute = min.toString();
                    state.defaultTimeSecond = sec.toString();
               }
          },
          updateIsTimeRunning(state) {
               state.isTimeRunning = true;
          },
          startTimeInterval(state, actions) {
               state.timeInterval = actions.payload;
          },
          stopTimeInterval(state) {
               state.isTimeRunning = false;
               clearInterval(state.timeInterval);
               state.timeInterval = false;
          },
     },
});

export const runningTimer = (MM, SS) => {
     return (dispatch) => {
          let min = MM * 1;
          let sec = SS * 1;

          if (sec !== 0) {
               sec--;
          } else {
               console.log("else true-------");
               if (min !== 0) {
                    min--;
               }
               sec = 60;
               sec--;
          }
          console.log(min, sec);
          dispatch(timeFocusActions.updateDefaultTimeAlert({ min: min, sec: sec }));
          console.log("update", typeof sec, typeof min);
     };
};

export const timeFocusActions = timeFocusSlice.actions;
export default timeFocusSlice.reducer;
